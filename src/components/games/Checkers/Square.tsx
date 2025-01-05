import { ReactNode, useEffect, useRef, useState } from "react";
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';



export type Coord = [number, number];

export type PieceRecord = {
	type: PieceType;
	location: Coord;
};

export type PieceType = 'king' | 'pawn';

export function isCoord(token: unknown): token is Coord {
	return (
		Array.isArray(token) && token.length === 2 && token.every((val) => typeof val === 'number')
	);
}

const pieceTypes: PieceType[] = ['king', 'pawn'];

export function isPieceType(value: unknown): value is PieceType {
	return typeof value === 'string' && pieceTypes.includes(value as PieceType);
}

export function isEqualCoord(c1: Coord, c2: Coord): boolean {
	return c1[0] === c2[0] && c1[1] === c2[1];
}

export function canMove(
	start: Coord,
	destination: Coord,
	pieceType: PieceType,
	pieces: PieceRecord[],
) {
	const rowDist = Math.abs(start[0] - destination[0]);
	const colDist = Math.abs(start[1] - destination[1]);

	if (pieces.find((piece) => isEqualCoord(piece.location, destination))) {
		return false;
	}

	switch (pieceType) {
		case 'king':
			return [0, 1].includes(rowDist) && [0, 1].includes(colDist);
		case 'pawn':
			return colDist === 0 && start[0] - destination[0] === -1;
		default:
			return false;
	}
}




type HoveredState = 'idle' | 'validMove' | 'invalidMove';

function getColor(state: HoveredState, isDark: boolean): string {
	if (state === 'validMove') {
		return 'lightgreen';
	} else if (state === 'invalidMove') {
		return 'pink';
	}
	return isDark ? 'lightgrey' : 'white';
}

interface SquareProps {
    pieces: PieceRecord[];
    location: [number, number];
    children: ReactNode;
}

export default function Square({ pieces, location, children }: SquareProps) {
    const ref = useRef(null);
    const [isPlayable, setIsPlayable] = useState<HoveredState>('idle');

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        return dropTargetForElements({
            element: el,
            onDragEnter: ({ source }) => {
				if (!isCoord(source.data.location) || !isPieceType(source.data.pieceType)) {
					return;
				}

				if (canMove(source.data.location, location, source.data.pieceType, pieces)) {
					setIsPlayable('validMove');
				} else {
					setIsPlayable('invalidMove');
				}
			},
			onDragLeave: () => setIsPlayable('idle'),
			onDrop: () => setIsPlayable('idle'),
        });
    }, []);

    const isDark = (location[0] + location[1]) % 2 === 1;

    return (
        <div style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getColor(isPlayable, isDark) }} ref={ref}>
            {children}
        </div>
    );
}