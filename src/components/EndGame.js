import React, { useContext } from 'react'
import { AppContext } from '../App'

const EndGame = () => {
  const {gameOver, correctWord, currTry} = useContext(AppContext)
  return (
    <div className='EndOfGame'>

      <h3>
        {gameOver.guessedWord 
          ?
            <button className='reloadButton' onClick={() => window.location.reload(true)}>
              Winner! Again?
            </button>  
          : 
            <button className='reloadButton' onClick={() => window.location.reload(true)}>
              New Game
            </button>
        }
      </h3>

      <h1 className='theWord'>
        The Word Was: {correctWord.toUpperCase()}
      </h1>
      
      {gameOver.guessedWord && (<h3>You Guessed in {currTry.attempt} tries</h3>)}

    </div>
  )
}

export default EndGame