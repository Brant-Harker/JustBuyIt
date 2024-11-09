import { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";

export default function App() {
  const [components, setComponents] = useState([]);

  return (
    <Container maxWidth="md">
      <Header />
    </Container>
  );
}
