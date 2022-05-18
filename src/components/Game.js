import './Game.css';

const Game = ({verifyLetter}) => {
  return (
    // <div> 
    // <h1>Game</h1>
    // <button onClick={verifyLetter}>Finalizar o jogo</button>
    // </div>
  
    <div className="game">
      <p className="points">
        <span>Pontuação: 0</span>
      </p>
      <h1>Guess the word:</h1>
      <h3 className="tip">
        Tips about the word <span>Tip...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Guess a letter of the word: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letters already used: </p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
    

  )
}

export default Game