import React, {useCallback, useEffect, useContext} from 'react'
import { AppContext } from '../App'
import Key from './Key'

const Keyboard = () => {
  const {onDelete, onEnter, onSelectLetter, usedLetters, gameOver} = useContext(AppContext)

  const topRowKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']

  const MiddleRowKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']

  const BottomRowKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  const handleKeyboard = useCallback((event) => {
    if (gameOver.gameOver) 
      return;
    if (event.key === 'Enter'){
        onEnter()
    } else if (event.key === 'Backspace'){
      onDelete()
    }else {
      topRowKeys.forEach((key) =>{
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })
      MiddleRowKeys.forEach((key) =>{
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })
      BottomRowKeys.forEach((key) =>{
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }
  }, [handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>

      <div className='topRowKeys'>

        {topRowKeys.map((key) => {
        return <Key keyVal={key} disabled={usedLetters.includes(key)} />
      })}

      </div>

      <div className='middleRowKeys'>

      {MiddleRowKeys.map((key) => {
        return <Key keyVal={key} disabled={usedLetters.includes(key)} />
      })}

      </div>

      <div className='bottomRowKeys'>

      <Key keyVal={'Enter'} bigKey />
      {BottomRowKeys.map((key) => {
        return <Key keyVal={key} disabled={usedLetters.includes(key)} />
      })}

      <Key keyVal={"Delete"} bigKey />

      </div>

    </div>
  )
}

export default Keyboard