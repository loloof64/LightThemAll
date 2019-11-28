import React, {useState, useEffect} from 'react';
import './GameBoard.css';
import LightOn from '../images/light_on.png';
import LightOff from '../images/light_off.png';

const SIDE_CELLS_COUNT = 10;

export default function GameBoard() {
    const [board, setBoard] = useState([]);

    const resetBoard = async () => {
        let newBoard = await window.backend.generateBoard(SIDE_CELLS_COUNT);
        setBoard(newBoard);
    }

    useEffect(() => {
        resetBoard();
    }, []);

    const toggleLight = ({lineIndex, columnIndex}) => {
        setBoard(oldValue => {
            let newBoard = oldValue.map(line => line.slice());
            newBoard[lineIndex][columnIndex] = !newBoard[lineIndex][columnIndex];
            if (lineIndex > 0) newBoard[lineIndex-1][columnIndex] = !newBoard[lineIndex-1][columnIndex];
            if (lineIndex < SIDE_CELLS_COUNT-1) newBoard[lineIndex+1][columnIndex] = !newBoard[lineIndex+1][columnIndex];
            if (columnIndex > 0) newBoard[lineIndex][columnIndex-1] = !newBoard[lineIndex][columnIndex-1];
            if (columnIndex < SIDE_CELLS_COUNT-1) newBoard[lineIndex][columnIndex+1] = !newBoard[lineIndex][columnIndex+1];
            return newBoard;
        });
    }

    return (
        <div className="GameBoard">
            {
                board.map((line, lineIndex) => (
                    <div key={`line_${lineIndex}`} className="BoardLine">
                        {line.map((cell, columnIndex) => (
                            <img
                                onClick={() => toggleLight({lineIndex, columnIndex})}
                                className="BoardCell"
                                key={`cell_${lineIndex}${columnIndex}`}
                                src={cell ? LightOn : LightOff}
                                alt={cell ? "on" : "off"}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}