import { Outlet } from "react-router-dom";

import "./App.css";
import { mauve, mauveDark } from "@radix-ui/colors";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./assets/background.png";

import { useTheme } from "./context/ThemeContext";
import styled from "styled-components";

function App() {
  const { theme } = useTheme();

  const StyledBody = styled.div`
    background-image: linear-gradient(
        to top,
        ${(props) =>
            props.themeValue === "light" ? mauve.mauve2 : mauveDark.mauve2}
          60%,
        transparent
      ),
      url(${(props) => props.backgroundImage});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center;
    height: fit-content;
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledBody theme={theme} backgroundImage={Background}>
      <Navbar />
      <Outlet />
      <Footer />
    </StyledBody>
  );
}

export default App;
