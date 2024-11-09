import { useState } from "react";
import { Button, Container } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";

export default function App() {
  const [displayPuzzles, setDisplayPuzzles] = useState(true);

  return (
    <Container maxWidth="md">
      <Header />
      {displayPuzzles && <Puzzles />}
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          right: "3rem",
          bottom: "3rem",
        }}
        onClick={() => setDisplayPuzzles(!displayPuzzles)}
      >
        :(
      </Button>
    </Container>
  );
}
