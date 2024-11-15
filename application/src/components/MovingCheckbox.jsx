import { useState, useRef, useEffect } from "react"
import { Container, Card, Typography, Checkbox } from "@mui/material"
import cloudflare_logo from "../assets/cloudflare_logo.png"
import checkmark from "../assets/checkmark.png"

const MovingCheckbox = ({setCompleted}) => {
  const [position, setPosition] = useState({ left: 30, top: 125 })
  const [isClicked, setIsClicked] = useState(false)
  const checkboxRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isClicked) {
        const mouseX = event.clientX
        const mouseY = event.clientY
        const rect = checkboxRef.current.getBoundingClientRect()

        const checkboxX = rect.left + rect.width / 2
        const checkboxY = rect.top + rect.height / 2

        const differenceX = Math.abs(mouseX - checkboxX)
        const differenceY = Math.abs(mouseY - checkboxY)

        const distance = Math.sqrt(differenceX ** 2 + differenceY ** 2)

        if (distance < 30) {
          const moveX = Math.random() * 32 - 16
          const moveY = Math.random() * 32 - 16

          let newLeft = position.left + moveX
          let newTop = position.top + moveY

          if (newTop > -30 && newTop < 200 && newLeft > -75 && newLeft < 200) {
            setPosition({ left: newLeft, top: newTop })
          }
        }
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
  }, [position, isClicked])

  return (
    <Container sx={{ marginTop: "4.5em", position: "relative" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "0.6em" }}
      >
        <img
          src={checkmark}
          alt="Checkmark"
          style={{ width: "1.6em", height: "1.6em", marginRight: "1em" }}
        />
        <Typography variant="h4">www.justbuyit.com</Typography>
      </div>
      <Typography variant="h6">
        Checking if the site connection is secure
      </Typography>
      <Card
        sx={{
          padding: "1em",
          width: "22em",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          margin: "1.6em 0",
        }}
      >
        <Checkbox
          ref={checkboxRef}
          onChange={() => {
            setIsClicked(true);
            setCompleted(true);
          }}
          sx={{
            position: "absolute",
            left: !isClicked ? `${position.left}px` : "30px",
            top: !isClicked ? `${position.top}px` : "125px",
            transition: "left 0.1s, top 0.1s",
          }}
        />
        <Typography variant="h6" sx={{ marginLeft: "1.6em" }}>
          Verify you are human
        </Typography>
        <img
          src={cloudflare_logo}
          alt="Logo"
          style={{ width: "6.2em", marginBottom: "0.8em" }}
        />
      </Card>
      <Typography variant="h6">
        www.justbuyit.com needs to review the security of your connection before
        proceeding.
      </Typography>
    </Container>
  )
}

export default MovingCheckbox;
