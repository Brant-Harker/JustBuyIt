import { useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";
import "./index.css";

export default function App() {
  const [leftPos, setLeftPos] = useState("calc(50% - 2rem)");
  const [topPos, setTopPos] = useState("calc(50% - 2rem)");
  const [displayPuzzles, setDisplayPuzzles] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const flashlight = useRef(null);

  const HALF_WIDTH = 32;
  const handleMousemove = (e) => {
    setLeftPos(e.clientX - HALF_WIDTH);
    setTopPos(e.clientY - HALF_WIDTH);
  };

  return (
    <Grid
      sx={{
        height: "100vh !important",
        width: "100vw !important",
        backgroundColor: isDarkMode && "Black",
        position: "relative",
      }}
      container
      onMouseMove={handleMousemove}
    >
      <Grid size={12} sx={{ minHeight: "3rem", maxHeight: "3rem" }}>
        <Header setIsDarkMode={setIsDarkMode} />
      </Grid>
      <Grid
        size={12}
        sx={{ height: "calc(100vh - 3rem)", width: "100vw", padding: "1rem" }}
      >
        {displayPuzzles && <Puzzles />}
      </Grid>
      <Box
        id="flashlight"
        ref={flashlight}
        sx={{
          left: `${leftPos}px`,
          top: `${topPos}px`,
        }}
      ></Box>
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
    </Grid>
  );
}
