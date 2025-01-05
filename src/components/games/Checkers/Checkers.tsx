'use client';
import { ReactElement } from 'react';
// import { ReactNode, useEffect, useRef, useState, type ReactElement } from 'react';
// import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import Square from './Square';
import { King, Pawn } from './Pieces';
// import invariant from 'tiny-invariant';


export type Coord = [number, number];
export type PieceType = 'king' | 'pawn';
export type PieceRecord = {
	type: PieceType;
	location: Coord;
};



export function isEqualCoord(c1: Coord, c2: Coord): boolean {
	return c1[0] === c2[0] && c1[1] === c2[1];
}

export const pieceLookup: {
	[Key in PieceType]: (location: [number, number]) => ReactElement;
} = {
	king: (location) => <King location={location} />,
	pawn: (location) => <Pawn location={location} />,
};

function renderSquares(pieces: PieceRecord[]) {
	const squares = [];
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const squareCoord: Coord = [row, col];

			const piece = pieces.find((piece) => isEqualCoord(piece.location, squareCoord));

			// const isDark = (row + col) % 2 === 1;

			squares.push(
                <Square pieces={pieces} key={`${row}_${col}`} location={squareCoord}>{piece && pieceLookup[piece.type](squareCoord)}</Square>
				// <div key={`${row}_${col}`} style={{width: '100%',
                // height: '100%',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // backgroundColor: isDark ? 'lightgrey' : 'white',}}>
				// 	{piece && pieceLookup[piece.type]()}
				// </div>,
			);
		}
	}
	return squares;
}

export default function Chessboard() {
	const pieces: PieceRecord[] = [
		{ type: 'king', location: [3, 2] },
		{ type: 'pawn', location: [1, 6] },
	];

	return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
        width: '500px',
        height: '500px',
        border: '3px solid lightgrey',
    }}>{renderSquares(pieces)}</div>;
}

