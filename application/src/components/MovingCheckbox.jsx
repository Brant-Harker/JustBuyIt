import { useState, useRef } from "react"
import { Container, Card, Typography, Checkbox } from "@mui/material"
import cloudflare_logo from "../assets/cloudflare_logo.png"

const MovingCheckbox = () => {
  const [position, setPosition] = useState({ left: "50%", top: "50%" })
  const [checked, setChecked] = useState(false)
  const containerRef = useRef(null)

  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <Typography variant="h6">Verify you are human</Typography>
      <img
        src={cloudflare_logo}
        alt="Logo"
        style={{ width: "100px", marginBottom: "15px" }}
      />
    </Container>
  )
}

export default MovingCheckbox
