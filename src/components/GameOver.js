import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>
        You Score: <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar o jogo</button>
    </div>
  );
};

export default GameOver;
