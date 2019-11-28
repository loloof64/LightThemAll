import React, {useState, useEffect} from 'react';
import ReactSVG from 'react-svg'
import './GameBoard.css';

const SIDE_CELLS_COUNT = 10;

export default function GameBoard() {
    const [board, setBoard] = useState([]);

    const resetBoard = () => {
        let newBoard = [];
        for (let lineIndex = 0; lineIndex < SIDE_CELLS_COUNT; lineIndex++) {
            newBoard.push([]);
            for (let colIndex = 0; colIndex < SIDE_CELLS_COUNT; colIndex++) {
                newBoard[lineIndex][colIndex] = false;
            }
        }

        setBoard(newBoard);
    }

    useEffect(() => {
        resetBoard();
    }, []);

    return (
        <div className="GameBoard">
            {
                board.map((line, lineIndex) => (
                    <div key={`line_${lineIndex}`}>
                        {board[lineIndex].map((cell, columnIndex) => (
                            <ReactSVG 
                                key={`cell_${lineIndex}${columnIndex}`}
                                src='./images/light_on.png'
                                width="50px"
                                height="50px"
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}