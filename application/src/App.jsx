import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";
import "./index.css";

export default function App() {
  const [displayPuzzles, setDisplayPuzzles] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Grid
      sx={{
        height: "100vh !important",
        width: "100vw !important",
        backgroundColor: isDarkMode && "Black",
      }}
      container
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
