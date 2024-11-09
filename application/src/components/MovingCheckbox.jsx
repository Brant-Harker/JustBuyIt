import { useState, useRef } from "react"
import { Container, Card, Typography, Checkbox } from "@mui/material"
import cloudflare_logo from "../assets/cloudflare_logo.png"
import checkmark from "../assets/checkmark.png"

const MovingCheckbox = () => {
  const [position, setPosition] = useState()
  const [checked, setChecked] = useState(false)
  const checkboxRef = useRef(null)

  return (
    <Container sx={{ marginTop: "4.5em" }}>
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
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <Typography variant="h6">Verify you are human</Typography>
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

export default MovingCheckbox
