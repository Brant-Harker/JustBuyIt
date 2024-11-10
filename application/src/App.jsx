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

  const OFFSET_Y = 96;
  const OFFSET_X = 56;
  useEffect(() => {
    const handleMousemove = (e) => {
      const newLeftPos = e.clientX - OFFSET_X;
      const newTopPos = e.clientY - OFFSET_Y;

      setLeftPos(newLeftPos);
      setTopPos(newTopPos);
    };

    document.addEventListener("mousemove", handleMousemove);
  }, []);

  return (
    <Grid
      sx={{
        height: "100vh",
        width: "100vw",
      }}
      container
    >
      <Grid size={12} sx={{ minHeight: "3rem", maxHeight: "3rem" }}>
        <Header setIsDarkMode={setIsDarkMode} />
      </Grid>
      <Grid size={12}>
        {isDarkMode && (
          <Box
            sx={{
              height: "calc(100vh - 3rem)",
              width: "100vw",
              padding: "1rem",
              backgroundImage: `linear-gradient(#000, #000), url(${heroImage})`,
              backgroundRepeat: isDarkMode && "no-repeat",
              backgroundSize: isDarkMode && "100% 100%",
              backgroundAttachment: isDarkMode && "fixed",
              backgroundPosition: isDarkMode && "center",
              position: "relative",
              cursor: "none",
            }}
          >
            <Box
              id="flashlight"
              ref={flashlight}
              sx={{
                left: `${leftPos}px`,
                top: `${topPos}px`,
                position: "absolute",
                width: "6rem",
                height: "6rem",
                zIndex: 1,
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                borderRadius: "50%",
                boxShadow: "0 0 5rem 1rem rgb(215, 195, 9)",
              }}
            />
          </Box>
        )}
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
        I am a robot :(
      </Button>
    </Grid>
  );
}