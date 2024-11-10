import { useState } from "react"
import "./FallingLetters.css"

const FallingLetters = ({ setCompleted }) => {
  const [clickedLetters, setClickedLetters] = useState("")

  const baseLetters = "CaNcElcAnCeL"
  const repeatLetters = baseLetters.repeat(27)

  const letters = [...repeatLetters].map((letter, i) => ({
    id: `${i}`,
    text: letter,
  }))

  const letterClick = (letter, e) => {
    setClickedLetters((prev) => prev + letter)
  }

  const handleSubmit = () => {
    if (clickedLetters === "CANCEL") {
      setCompleted(true);
    } else {
      alert("Typed text does not match 'CANCEL'")
    }
  }

  const getRandomDuration = () => `${Math.random() * 3 + 3}s`
  const getRandomDelay = () => `${Math.random() * 2}s`

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
              style={{
                animationDuration: getRandomDuration(),
                animationDelay: getRandomDelay(),
              }}
            >
              {letter.text}
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <input
          className="input-text"
          type="text"
          placeholder="Type CANCEL to cancel"
          value={clickedLetters}
          onChange={(e) => setClickedLetters(e.target.value)}
        />
        <div>
          <button
            className="custom-button"
            onClick={() => setClickedLetters("")}
          >
            CLEAR
          </button>
          <button className="custom-button" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </>
  )
}

export default FallingLetters
