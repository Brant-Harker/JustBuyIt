import { Button, Container } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";

export default function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Puzzles />
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          right: "3rem",
          bottom: "3rem",
        }}
      >
        :(
      </Button>
    </Container>
  );
}
