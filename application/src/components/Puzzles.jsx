import { useState } from "react";
import Puzzle1 from "./Puzzle1";
import Puzzle2 from "./Puzzle2";

const COMPONENTS = [Puzzle1, Puzzle2];

const Puzzles = () => {
  const [puzzleIndex, setPuzzleIndex] = useState(0);

  const updateIndex = () => {
    if (puzzleIndex < COMPONENTS.length - 1) {
      setPuzzleIndex(puzzleIndex + 1);
    } else {
      setPuzzleIndex(0);
    }
  };

  setInterval(() => {
    updateIndex();
  }, 10000);

  return (
    <>
      {COMPONENTS.map(
        (Component, key) =>
          key == puzzleIndex && (
            <span key={key}>
              <Component key={key} />
            </span>
          )
      )}
    </>
  );
};

export default Puzzles;
