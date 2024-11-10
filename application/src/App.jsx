import { useRef, useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";
import "./index.css";
import heroImage from "./assets/hero1.png";

export default function App() {
  const [leftPos, setLeftPos] = useState("calc(50% - 3rem)");
  const [topPos, setTopPos] = useState("calc(50% - 3rem)");
  const [displayPuzzles, setDisplayPuzzles] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const flashlight = useRef(null);

  useEffect(() => {
    const handleMousemove = (e) => {
      setLeftPos(e.clientX);
      setTopPos(e.clientY);
    };

    document.addEventListener("mousemove", handleMousemove);
  }, []);

  return (
    <Grid
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
      container
    >
      <Grid
        item
        xs={12}
        sx={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          backgroundColor: isDarkMode && "black",
          mask: `radial-gradient(circle closest-side, transparent 96px, black 0)`,
          maskPosition: `${leftPos}px ${topPos}px`,
          transform: "-50%, -50%",
          zIndex: 0,
        }}
      />

      <Grid size={12} sx={{ minHeight: "3rem", maxHeight: "3rem" }}>
        <Header setIsDarkMode={setIsDarkMode} />
      </Grid>
      <Grid size={12} sx={{ height: "calc(100vh - 3rem)", zIndex: 1 }}>
        {displayPuzzles && <Puzzles />}
      </Grid>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
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
