import { Box, Typography } from "@mui/material";
import "./Error.css";

const Error = () => {
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        height: "100%",
        padding: "3rem",
        color: "white",
      }}
    >
      <Typography variant="h1" component="p">
        ;)
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        sx={{ paddingY: "2rem", fontFamily: "SourGummyThin" }}
      >
        Something went wrong, please redo the puzzles to fix the problem.
      </Typography>
      <Typography variant="h5" component="p" sx={{ fontFamily: "SourGummy" }}>
        Enjoy your purchase!
      </Typography>
    </Box>
  );
};

export default Error;
