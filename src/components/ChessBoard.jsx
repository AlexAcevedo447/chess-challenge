import Square from "./Square";
import "./ChessBoard.css";
import { useEffect, useState } from "react";
import Row from "./Row";
import { setGrid, setSquareProps } from "../utils/chess";

export default function ChessBoard({ columns, rows }) {
    const [chessBoard, setChessBoard] = useState([]);

    useEffect(() => {
        const result = setGrid(rows + 1, columns + 1);
        setChessBoard(result);
    }, [])

    return (
        <div className="chessboard" style={{ width: `calc(50px*${columns})`, height: `calc(50px*${rows})` }}>
            {chessBoard.length > 0 && chessBoard.map((row, indexOfRow) => {
                return (

                    <Row rowname={"row"} width={"100%"} height={`calc(100%/${rows})`} key={indexOfRow}>
                        {
                            row.map((_, indexOfColumn) => {
                                const color = setSquareProps(indexOfRow, indexOfColumn, row).color;
                                const content = setSquareProps(indexOfRow, indexOfColumn, row).content;
                                return <Square color={color} key={indexOfColumn} content={content} />
                            })
                        }
                    </Row>
                )
            })}

        </div>

    )
}