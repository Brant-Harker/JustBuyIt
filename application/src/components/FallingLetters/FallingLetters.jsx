import { useState } from "react"
import "./FallingLetters.css"

const FallingLetters = () => {
  const [clickedLetters, setClickedLetters] = useState("")

  const baseLetters = "CANCELcancel"
  const repeatLetters = baseLetters.repeat(32)

  const letters = [...repeatLetters].map((letter, i) => ({
    id: `${i}`,
    text: letter,
  }))

  const letterClick = (letter, e) => {
    e.preventDefault()
    setClickedLetters((prev) => prev + letter)
  }
  return (
    <>
      <div className="main">
        <div className="grid">
          {letters.map((letter, index) => (
            <div
              key={index}
              id={letter.id}
              className="letter"
              onClick={(e) => letterClick(letter.text, e)}
            >
              {letter.text}
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type CANCEL to cancel"
          value={clickedLetters}
        />
        <div>
          <button onClick={() => setClickedLetters("")}>CLEAR</button>
          <button>SUBMIT</button>
        </div>
      </div>
    </>
  )
}

export default FallingLetters
