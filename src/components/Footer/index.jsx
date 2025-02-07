import StyledFooter from "./style";

import { useTheme } from "../../context/ThemeContext";

export default function Footer() {

    const { theme } = useTheme();

    return (
      <StyledFooter themeValue={theme}>
        <p>2025 © Todos os direitos reservados a Cubos Movies</p>
      </StyledFooter>
    );
}