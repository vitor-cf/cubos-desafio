import logoCubos from "../../assets/logo-cubos.svg";
import { useTheme } from "../../context/ThemeContext";
import StyledHeader from "./style";

import { Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";

import { purple, purpleDark } from "@radix-ui/colors";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const colorSchemePurple = theme === "light" ? purpleDark : purple;

  return (
    <StyledHeader themeValue={theme}>
      <div>
        <img src={logoCubos} />
        <span>Movies</span>
      </div>
      <div>
        <Button
          variant="contained"
          type="button"
          onClick={() => toggleTheme()}
          style={{
            height: "3.5rem",
            backgroundColor: `${colorSchemePurple.purple5}60`,
            border: "none",
            color: "whitesmoke",
          }}
        >
          <LightModeIcon />
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
