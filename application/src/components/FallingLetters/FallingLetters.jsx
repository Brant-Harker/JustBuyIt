import { useState } from "react"
import "./FallingLetters.css"

const FallingLetters = () => {
  const [clickedLetters, setClickedLetters] = useState("")

  const baseLetters = "CaNcElcAnCeL"
  const repeatLetters = baseLetters.repeat(27)

  const letters = [...repeatLetters].map((letter, i) => ({
    id: `${i}`,
    text: letter,
  }))

  const letterClick = (letter, e) => {
    e.preventDefault()
    setClickedLetters((prev) => prev + letter)
  }

  const handleSubmit = () => {
    if (clickedLetters === "CANCEL") {
      alert("Success!")
    } else {
      alert("Typed text does not match 'CANCEL'")
    }
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
              style={{
                animationDuration: "6s",
              }}
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
          onChange={(e) => setClickedLetters(e.target.value)}
        />
        <div>
          <button onClick={() => setClickedLetters("")}>CLEAR</button>
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </>
  )
}

export default FallingLetters
