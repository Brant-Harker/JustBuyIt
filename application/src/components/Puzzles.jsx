import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Puzzle1 from "./Puzzle1";
import Puzzle2 from "./Puzzle2";
import Puzzle3 from "./Puzzle3";

const COMPONENTS = [Puzzle1, Puzzle2, Puzzle3];

const Puzzles = () => {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [completed, setCompleted] = useState(false);


  useEffect(() => {
    const updateIndex = () => {
      if (puzzleIndex < COMPONENTS.length - 1) {
        setPuzzleIndex(puzzleIndex + 1);
      } else {
        setPuzzleIndex(0);
      }
    };
    
    if (completed) {
      updateIndex();
      setCompleted(false);
    }

  }, [completed, puzzleIndex]);

  return (
    <Box sx={{ width: "100vw", height: "80vh" }}>
      {COMPONENTS.map(
        (Component, key) => {
          return key == puzzleIndex && (
            <span key={key}>
              <Component key={key} setCompleted={setCompleted} />
            </span>
          )

        }
      )}
    </Box>
  );
};

export default Puzzles;
