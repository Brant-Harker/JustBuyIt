import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";
import CancelScreen from "./components/CancelScreen";
import Error from "./components/Error/Error";
import "./index.css";

export default function App() {
  const [leftPos, setLeftPos] = useState("0");
  const [topPos, setTopPos] = useState("0");
  const [displayPuzzles, setDisplayPuzzles] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMousemove = (e) => {
    if (isDarkMode) {
      setLeftPos(e.clientX);
      setTopPos(e.clientY);
    }
  };

  return (
    <Grid
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
      container
      onMouseMove={handleMousemove}
    >
      {isDarkMode && (
        <Grid
          item
          xs={12}
          sx={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            backgroundColor: isDarkMode && "black",
            mask: `radial-gradient(circle closest-side, transparent 80px, black 0)`,
            maskPosition: `${leftPos}px ${topPos}px`,
            cursor: "none",
            zIndex: 0,
          }}
        />
      )}

      <Grid size={12} sx={{ minHeight: "3rem", maxHeight: "3rem" }}>
        <Header setIsDarkMode={setIsDarkMode} />
      </Grid>
      <Grid size={12} sx={{ height: "calc(100vh - 3rem)" }}>
        {displayPuzzles ? <Puzzles /> : <Error />}
      </Grid>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          right: "3rem",
          bottom: "3rem",
        }}
        onClick={() => setDisplayPuzzles(false)}
      >
        I am a robot :(
      </Button>
    </Grid>
  );
}
