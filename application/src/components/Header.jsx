import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeToggle from "./DarkModeToggle";

export default function Header({ setIsDarkMode }) {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Are you a robot?
          </Typography>
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
