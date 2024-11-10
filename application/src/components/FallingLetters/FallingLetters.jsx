import { useState } from "react"
import "./FallingLetters.css"

const FallingLetters = () => {
  const [clickedLetter, setClickedLetter] = useState("")
  const letters = [
    { id: "1", text: "N" },
    { id: "2", text: "E" },
    { id: "3", text: "C" },
    { id: "4", text: "A" },
    { id: "5", text: "E" },
    { id: "6", text: "C" },
    { id: "7", text: "L" },
    { id: "8", text: "N" },
    { id: "9", text: "L" },
    { id: "10", text: "C" },
    { id: "11", text: "A" },
    { id: "12", text: "E" },
  ]

  const letterClick = (letter, e) => {
    e.preventDefault()
    setClickedLetter(letter)
  }
  return (
    <>
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
    </>
  )
}

export default FallingLetters
