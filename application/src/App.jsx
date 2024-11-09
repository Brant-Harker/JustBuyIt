import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Header from "./components/Header";
import Puzzle1 from "./components/Puzzle1";
import Puzzle2 from "./components/Puzzle2";

export default function App() {
  const [components, setComponents] = useState([Puzzle1, Puzzle2]);
  const [puzzleIndex, setPuzzleIndex] = useState(0);

  const updateIndex = () => {
    if (puzzleIndex < components.length - 1) {
      setPuzzleIndex(puzzleIndex + 1);
    } else {
      setPuzzleIndex(0);
    }
  };

  setInterval(() => {
    updateIndex();
  }, 10000);

  return (
    <Container maxWidth="md">
      <Header />
      {components.map(
        (Component, key) =>
          key == puzzleIndex && (
            <span key={key}>
              <Component key={key} />
            </span>
          )
      )}
    </Container>
  );
}
