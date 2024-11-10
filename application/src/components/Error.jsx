import { Box, Typography } from "@mui/material";

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
      <Typography variant="h4" component="h2" sx={{ paddingTop: "2rem" }}>
        Something went wrong, please refresh the website and redo the puzzles to
        fix the problem.
      </Typography>
      <Typography variant="h3" component="p">

      </Typography>
    </Box>
  );
};

export default Error;
