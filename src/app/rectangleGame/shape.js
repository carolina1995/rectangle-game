import React from "react";

const Shape = ({ shape, handleMouseMove, handleMouseOut }) => {
    const [position, setPosition] = React.useState({ x: shape.Xvalue, y: shape.Yvalue });
    const draggingRef = React.useRef(false);
    const offsetRef = React.useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        draggingRef.current = true;
        offsetRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMovePositions = (e) => {
        if (draggingRef.current) {
            setPosition({
                x: e.clientX - offsetRef.current.x,
                y: e.clientY - offsetRef.current.y,
            });
        }
    };

    const handleMouseUp = () => {
        draggingRef.current = false;
    };

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMovePositions);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMovePositions);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);


    console.log(shape)
    return (
        <div className="shape" onMouseDown={handleMouseDown} onMouseLeave={handleMouseOut} onMouseMove={(e) => {handleMouseMove(e, shape.name); handleMovePositions(e);}}>
            <div style={{
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
            }} className="shape"></div>


        </div>

    )
}

export default Shape