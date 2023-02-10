import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App'

const Letter = ({letterPos, attemptVal}) => {

  const { board, correctWord, currTry, setUsedLetters} = useContext(AppContext)
  const letter = board[attemptVal][letterPos]

  const correct = correctWord.toUpperCase()[letterPos] === letter
  const almost = !correct && letter !== '' && correctWord.includes(letter.toUpperCase())

  const letterState = currTry.attempt > attemptVal && (correct ? 'correct' : almost ? 'almost' : 'error')

  useEffect(() => {
    if (letter !== '' && !correct && !almost) {
      setUsedLetters((prev) => [...prev, letter]);
    }
  }, [currTry.attempt])

  return (
    <div className='letter' id={letterState}>
      {' '}
      {letter}
    </div>
  )
}

export default Letter