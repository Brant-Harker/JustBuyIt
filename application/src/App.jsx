import { Container } from "@mui/material";
import Header from "./components/Header";
import Puzzles from "./components/Puzzles";

export default function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Puzzles />
    </Container>
  );
}
