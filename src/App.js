import { createContext, useEffect, useState } from 'react';

import './App.css';
import Board from './components/Board';
import EndGame from './components/EndGame';
import Keyboard from './components/Keyboard'
import { boardDefault, generatelistWordsSet } from './Words'


export const AppContext = createContext()

function App() {

  const [board, setBoard] = useState(boardDefault)
  const [currTry, setTry] = useState({attempt: 0, letterPos: 0})
  const [listWordsSet, setlistWordsSet] = useState(new Set())
  const [usedLetters, setUsedLetters] = useState([])
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false})
  const [correctWord, setCorrectWord] = useState('')


  useEffect(() => {
    generatelistWordsSet().then((words) => {
      setlistWordsSet(words.setOfWords)
      setCorrectWord(words.dailyWord.toUpperCase())
      console.log('the word is: ', words.dailyWord)
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currTry.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currTry.attempt][currTry.letterPos] = keyVal
    setBoard(newBoard)
    setTry({...currTry, letterPos: currTry.letterPos + 1})
  }

  const onDelete = () => {
    if (currTry.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currTry.attempt][currTry.letterPos - 1] = ''
    setBoard(newBoard)
    setTry({...currTry, letterPos: currTry.letterPos - 1})
  }

  const onEnter = () => {
    if (currTry.letterPos !== 5) 
      return;

    let currWord = '';
    for (let i = 0; i < 5; i++){
      currWord += board[currTry.attempt][i]
    }

    if (listWordsSet.has(currWord.toLowerCase())) {
      setTry({attempt: currTry.attempt + 1, letter: 0})
    }

    if (currWord.toLowerCase() === correctWord.toLowerCase()) {
      setGameOver({gameOver: true, guessedWord: true})
      return
    } else {
      alert ('Try using Real Words No Cheating!!')
    }

    if (currTry.attempt === 4) {
      setGameOver({gameOver: true, guessedWord: false})
      return
    }

    setTry({attempt: currTry.attempt + 1, letterPos: 0})
  }

  return (
    <div className="App">
      <nav>
        <h1>Word-lik-el</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currTry, setTry, onDelete, onEnter, onSelectLetter, correctWord, usedLetters, setUsedLetters, gameOver, setGameOver}}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <EndGame /> :<Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
