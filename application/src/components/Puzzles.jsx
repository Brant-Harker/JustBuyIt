import { useState, useEffect } from "react";
import { Box, LinearProgress } from "@mui/material";
import Puzzle1 from "./Puzzle1";
import Puzzle2 from "./Puzzle2";
import Puzzle3 from "./Puzzle3";

const COMPONENTS = [Puzzle1, Puzzle2, Puzzle3];

const Puzzles = () => {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const updateIndex = () => {
      if (puzzleIndex < COMPONENTS.length - 1) {
        setPuzzleIndex(puzzleIndex + 1);
      } else {
        setPuzzleIndex(0);
      }
    };

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          updateIndex();
          return 0;
        }
        const diff = 0.5;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    if (completed || (progress >= 100)) {
      updateIndex();
      setCompleted(false);
      setProgress(0);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Box sx={{ width: "100vw", height: "80vh" }}>
      <LinearProgress variant="determinate" value={progress} />
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
