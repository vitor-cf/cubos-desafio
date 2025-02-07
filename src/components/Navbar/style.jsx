import styled from "styled-components";
import { mauve, mauveDark } from "@radix-ui/colors";

const StyledHeader = styled.header`
    background-color: ${(props) =>
      props.themeValue === "light" ? mauve.mauve1 : mauveDark.mauve1};
    padding: 1rem;
    border-bottom: 1px solid ${(props) =>
      props.themeValue === "light" ? mauveDark.mauve1 : mauve.mauve1};
    display: flex;
    justify-content: space-between;
    opacity: 0.9;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    img {
      width: 30%;
    }
    span {
      font-size: 1.2rem;
      color: ${(props) =>
        props.themeValue === "light" ? mauveDark.mauve1 : 'white'};
  `;

export default StyledHeader;
