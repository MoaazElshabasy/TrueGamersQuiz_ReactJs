import React, { useState } from 'react';
import './App.css';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score , setScore ] = useState(0);
  const [currentQuestion , setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Assassin's Creed : What were the assassins called when they were first founded?",
      options: [
        { id: 0, text: "Order of the ancients", isCorrect: false },
        { id: 1, text: "The hidden ones", isCorrect: true },
        { id: 2, text: "Children of the shadows", isCorrect: false },
        { id: 3, text: "The apprentices of Bayek", isCorrect: false },
      ],
      cardShape: 'assassin-creed-card'
    },
    {
      text: "Fromsoftware Games : What charchter is found the most in diffrent Souls Games?",
      options: [
        { id: 0, text: "Patches", isCorrect: true },
        { id: 1, text: "Solaire", isCorrect: false },
        { id: 2, text: "The chosen undead", isCorrect: false },
        { id: 3, text: "Gwyn Lord of Cinder", isCorrect: false },
      ],
      cardShape: 'dark-souls-card'
    },
    {
      text: "Minecraft: What item can cure a zombie villager?",
      options: [
        { id: 0, text: "Golden carrot", isCorrect: false },
        { id: 1, text: "Potion of healing", isCorrect: false },
        { id: 2, text: "Golden apple", isCorrect: true},
        { id: 3, text: "Spider eye", isCorrect: false },
      ],
      cardShape: 'minecraft-card'
    },
    {
      text: "Borderlands 2: What is the special ability of Zer0, the assassin?",
      options: [
        { id: 0, text: "Phase Shift", isCorrect: false },
        { id: 1, text: "Decepti0n", isCorrect: true },
        { id: 2, text: "Bloodwing Attack", isCorrect: false },
        { id: 3, text: "Sabre Turret", isCorrect: false },
      ],
      cardShape: 'borderlands-card'
    },
    {
      text: "Sea of theives: What is the primary currency used for purchasing cosmetics?",
      options: [
        { id: 0, text: "Gold", isCorrect: false },
        { id: 1, text: "Doubloons", isCorrect: true },
        { id: 2, text: "Ancient Coins", isCorrect: true },
        { id: 3, text: "Reputation Points", isCorrect: false },
      ],
      cardShape : 'sea-of-theives-card'
    },
  ];

  const optionClicked = (isCorrect) => {
    if ( isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  }

  const resartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(0);
  }
 const currentClassCard = questions[currentQuestion].cardShape;

  return (
    <div className="App">

      <h1 style={{color: '#01ECFF', textShadow: '1px 1px 2px red, 0 0 1em #01ECFF, 0 0 0.2em #01ECFF'}}>Ultimate Gamer Quiz</h1>


      <h2 style={{ color: 'white'}}>Current Score: {score}</h2>

      {showFinalResults ?

        (<div className='final-results'>
          <h1>Final Results</h1>
          <h2> {score} out of {questions.length} correct - ({score/questions.length * 100}%)</h2>
          <button onClick={() => resartGame()}>Restart Game</button>
        </div>
        ) : (
          <div className= {currentClassCard}>
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className='question-text'>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              ); 
            })}
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;
