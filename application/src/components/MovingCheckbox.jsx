import { useState, useRef } from "react"
import { Container, Card, Typography, Checkbox } from "@mui/material"
import cloudflare_logo from "../assets/cloudflare_logo.png"

const MovingCheckbox = () => {
  const [position, setPosition] = useState()
  const [checked, setChecked] = useState(false)
  const checkboxRef = useRef(null)

  return (
    <Card
      sx={{
        padding: "1em",
        width: "22em",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Checkbox
        ref={checkboxRef}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <Typography variant="h6">Verify you are human</Typography>
      <img
        src={cloudflare_logo}
        alt="Logo"
        style={{ width: "100px", marginBottom: "0.8em" }}
      />
    </Card>
  )
}

export default MovingCheckbox
