import { h } from "preact";
import "./style.css";
import TicTacToeBoard from "./components/TTTBoard";

const App = () => {
  return (
    <div class="container">
      <div class="board-wrapper">
        <TicTacToeBoard />
      </div>
    </div>
  );
};

export default App;
