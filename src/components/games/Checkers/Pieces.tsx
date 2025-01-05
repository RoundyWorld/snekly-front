import king from '@/assets/king.png';
import pawn from '@/assets/pawn.png';
import { useEffect, useRef, useState } from 'react';
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';


type PieceProps = {
    location: [number, number];
    pieceType: 'king' | 'pawn';
	image: string;
	alt: string;
};

function Piece({ location, pieceType, image, alt }: PieceProps) {
    const ref = useRef(null);
    const [dragging, setDragging] = useState<boolean>(false); // NEW


    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        // invariant(el);

        return draggable({
			element: el,
			getInitialData: () => ({ location, pieceType }),
			onDragStart: () => setDragging(true),
			onDrop: () => setDragging(false),
		});
	}, [location, pieceType]);
    
	return <img 
        style={{
            width: 45,
            height: 45,
            padding: 4,
            borderRadius: 6,
            boxShadow: '1px 3px 3px rgba(9, 30, 66, 0.25),0px 0px 1px rgba(9, 30, 66, 0.31)',
            opacity: dragging ? 0.5 : 1, // NEW
            // '&:hover': {
            //     backgroundColor: 'rgba(168, 168, 168, 0.25)',
            // },
        }} 
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(168, 168, 168, 0.25)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
        src={image} alt={alt} draggable="true" ref={ref}
    />; // draggable set to false to prevent dragging of the images
}

export function King({ location }: { location: [number, number] }) {
	return <Piece location={location} pieceType={'king'} image={king.src} alt="King" />;
}

export function Pawn({ location }: { location: [number, number] }) {
	return <Piece location={location} pieceType={'pawn'} image={pawn.src} alt="Pawn" />;
}
