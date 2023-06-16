import { h } from "preact";
import "./style.css";
import { useState } from "preact/hooks";

type Player = "X" | "O";

const boardArrays = [
  { id: 1, item: [0, 1, 2] },
  { id: 2, item: [3, 4, 5] },
  { id: 3, item: [6, 7, 8] },
];

const TicTacToeBoard = () => {
  const [cells, setCells] = useState<string[]>(Array(9).fill(""));

  const getCurrentPlayerSymbol = (): Player => {
    const totalMoves = cells.filter((cell) => cell !== "").length;
    return totalMoves % 2 === 0 ? "X" : "O";
  };

  const checkGameResult = (cells: string[]) => {
    const winningCombinations = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      // determine a 3 Lines
      const [a, b, c] = combination;

      if (cells[a] !== "" && cells[a] === cells[b] && cells[a] === cells[c]) {
        alert(`Player ${cells[a]} wins!`);
        setCells(Array(9).fill(""));
      }
    }

    // Check for a draw
    if (!cells.includes("")) {
      alert("Draw!!");
    }
  };

  const handleClick = (index: number) => {
    if (cells[index] === "") {
      const updatedCells = [...cells];
      const currentPlayerSymbol = getCurrentPlayerSymbol();

      // [" "] = ["X"]
      updatedCells[index] = currentPlayerSymbol;
      setCells(updatedCells);

      checkGameResult(updatedCells);
    }
  };

  return (
    <div className="board">
      <p style={{ fontSize: 30, textAlign: "center", marginBottom: 8 }}>
        Now Turn Player : {getCurrentPlayerSymbol()}
      </p>

      {boardArrays.map((item) => (
        <div className="row" key={item.id}>
          {item.item.map((item) => (
            <div className="cell" onClick={() => handleClick(item)} key={item}>
              <div
                style={{
                  fontSize: "50px",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <p style={{ marginTop: 15 }}>{cells[item]}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicTacToeBoard;
