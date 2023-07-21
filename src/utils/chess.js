export const setGrid = (rows, columns) => {
    const result = [];
    for (let i = 0; i < rows; i++) {
        //Builds the 2D matrix on each iteration
        const row = Array.from({ length: columns })
        result.push(row);
    }
    return result;
}

export const chessBoardLabels = {
    letters: ["A", "B", "C", "D", "E", "F", "G", "H"],
    numbers: [8, 7, 6, 5, 4, 3, 2, 1]
}

export const setSquareProps = (indexOfRow, indexOfColumn, row) => {
    const result = {
        color: null,
        content: null
    }
    if (indexOfRow === 0) {
        result.color = "transparent";
        result.content = chessBoardLabels.letters[indexOfColumn];

    } else if (indexOfColumn === row.length - 1) {
        result.color = "transparent";
        result.content = chessBoardLabels.numbers[indexOfRow - 1]
    } else {
        result.color = (indexOfColumn + indexOfRow) % 2 === 0 && indexOfRow !== 0 ? "black" : "white"
    }

    return result;
}