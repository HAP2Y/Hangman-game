import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div className='wrong-letters-wrapper'>
        {wrongLetters.length > 0 && 
          <p className='wl-p'>Wrong</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i} className='wl-span'>{letter}</span>)}
      </div>
    </div>
  )
}

export default WrongLetters
