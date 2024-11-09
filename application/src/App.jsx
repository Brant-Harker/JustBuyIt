import { useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";
import "./index.css";

export default function App() {
  const [displayPuzzles, setDisplayPuzzles] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const flashlight = useRef(null);

  const handleMousemove = ({ target }) => {
    const flashlightHalfWidth = flashlight.offsetWidth / 2;

    flashlight.style.left = target.pageX - flashlightHalfWidth + "px";
    flashlight.style.top = target.pageY - flashlightHalfWidth + "px";
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
      <Box id="flashlight" ref={flashlight} sx={{}}></Box>
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
