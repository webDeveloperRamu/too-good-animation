import React, { useState, useRef, useEffect } from 'react';

const DrawingApp = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#000000');
    const [lines, setLines] = useState([]);
    const [undoHistory, setUndoHistory] = useState([]);
    const [redoHistory, setRedoHistory] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = "#ccc";
            ctx.fillRect(0, 0, 500, 350);
        }
    }, []);

    // Draw on canvas
    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const currentLine = lines[lines.length - 1];
        
        if (!currentLine) return;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentLine.color;
        ctx.lineTo(x, y);
        ctx.stroke();

        // Update the current line in the state
        currentLine.points.push({ x, y });
        setLines([...lines]);
    };

    // Start drawing
    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(x, y);
        setIsDrawing(true);

        const newLine = {
            color,
            points: [{ x, y }],
        };
        setLines((prevLines) => [...prevLines, newLine]);
        setUndoHistory((prevUndo) => [...prevUndo, newLine]);
    };

    // Stop drawing
    const stopDrawing = () => {
        if (!isDrawing) return;
        setIsDrawing(false);
    };

    // Undo drawing
    const undo = () => {
        if (undoHistory.length === 0) return;

        const lastAction = undoHistory[undoHistory.length - 1];
        setUndoHistory((prevUndo) => prevUndo.slice(0, -1));
        setRedoHistory((prevRedo) => [...prevRedo, lastAction]);
        setLines((prevLines) => prevLines.slice(0, -1));

        redrawCanvas();
    };

    // Redraw canvas after undo/redo
    const redrawCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ccc";
        ctx.fillRect(0, 0, 500, 350);

        lines.forEach(({ points, color }) => {
            ctx.strokeStyle = color;
            ctx.beginPath();
            points.forEach(({ x, y }, index) => {
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            });
        });
    };

    // Redo drawing
    const redo = () => {
        if (redoHistory.length === 0) return;
        const lastRedo = redoHistory[redoHistory.length - 1];
        setRedoHistory((prevRedo) => prevRedo.slice(0, -1));
        setUndoHistory((prevUndo) => [...prevUndo, lastRedo]);
        setLines((prevLines) => [...prevLines, lastRedo]);
        redrawCanvas();
    };

    // Change the color of the pen
    const changeColor = (newColor) => {
        setColor(newColor);
    };
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ccc";
        ctx.fillRect(0, 0, 500, 350);
        setLines([]);
        setUndoHistory([]);
        setRedoHistory([]);
    }
    const handelDownload = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'drawing.png';
        link.click();
    }

    return (
        <div className="flex flex-col items-center pt-20 bg-[blue] min-h-screen">
            <div className="mb-4">
                <button onClick={undo} className="px-4 py-2 m-2 bg-gray-500 text-white rounded">Undo</button>
                <button onClick={redo} className="px-4 py-2 m-2 bg-gray-500 text-white rounded">Redo</button>
                <button onClick={() => changeColor('#FF0000')} className="px-4 py-2 m-2 bg-red-500 text-white rounded">Red</button>
                <button onClick={() => changeColor('#00FF00')} className="px-4 py-2 m-2 bg-green-500 text-white rounded">Green</button>
                <button onClick={() => changeColor('#0000FF')} className="px-4 py-2 m-2 bg-blue-500 text-white rounded">Blue</button>
                <button onClick={() => changeColor('gray')} className="px-4 py-2 m-2 bg-gray-500 text-white rounded">Gray</button>
            </div>

            <canvas
                ref={canvasRef}
                width="500"
                height="350"
                className="border border-black bg-white shadow-inner rounded-md"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            ></canvas>
            <div className="mt-4">
                <button onClick={handelDownload} className="px-4 py-2 m-2 bg-gray-500 text-white rounded">download</button>
                <button onClick={clearCanvas} className="px-4 py-2 m-2 bg-gray-500 text-white rounded">clear</button>
            </div>
        </div>
    );
};

export default DrawingApp;
