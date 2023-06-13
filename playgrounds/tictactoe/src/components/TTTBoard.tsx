import { h } from "preact";
import "./style.css";
import { useState } from "preact/hooks";

type Player = "X" | "O";

const TicTacToeBoard = () => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [players, setPlayers] = useState<Player>("O");

  const handleClick = (index: number) => {
    if (cells[index] === "") {
      const updatedCells = [...cells];
      updatedCells[index] = "O"; // Assume 'O' is the player's symbol
      setCells(updatedCells);
    }
  };

  return (
    <div className="board">
      <p style={{ fontSize: 30, textAlign: "center", marginBottom: 8 }}>
        Now Turn Player : {players}
      </p>

      <div className="row">
        <div className="cell" onClick={() => handleClick(0)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[0]}</p>
          </div>
        </div>
        <div className="cell" onClick={() => handleClick(1)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[1]}</p>
          </div>
        </div>
        <div className="cell" onClick={() => handleClick(2)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[2]}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="cell" onClick={() => handleClick(3)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[3]}</p>
          </div>
        </div>
        <div className="cell" onClick={() => handleClick(4)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[4]}</p>
          </div>
        </div>
        <div className="cell" onClick={() => handleClick(5)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[5]}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="cell" onClick={() => handleClick(6)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[6]}</p>
          </div>
        </div>
        <div className="cell" onClick={() => handleClick(7)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[7]}</p>
          </div>
        </div>
        <div className="cell" onClick={() => handleClick(8)}>
          <div
            style={{
              fontSize: "50px",
              textAlign: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: 15 }}>{cells[8]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToeBoard;
