import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function DarkModeToggle({ setIsDarkMode }) {
  const [clicked, setClicked] = useState();

  const handleChange = (e) => {
    if (e.target.checked) {
      setClicked(true);
      setIsDarkMode(true);
    } else {
      setClicked(false);
      setIsDarkMode(false);
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={clicked} onChange={handleChange} />}
        label={clicked ? "Dark Mode" : "Light Mode"}
      />
    </FormGroup>
  );
}
