import styled from "styled-components";
import { mauve, mauveDark, purple, purpleDark } from "@radix-ui/colors";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
`;

const StyledPosterFilm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 80%;
  }
`;

const StyledInfoFilm = styled.div`
  background-image: linear-gradient(
      to top,
      ${(props) =>
          props.themeValue === "light" ? mauve.mauve2 : mauveDark.mauve2}
        1%,
      transparent
    ),
    url(${(props) => props.backgroundImage});
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  padding: 16px 16px 16px 16px;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
`;

const StyledSubtitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
`;

const StyledTagline = styled.span`
  margin-top: 2rem;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  font-weight: 400;
  font-style: italic;
`;

const StyledContainerSynopsis = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  background-color: ${(props) =>
    props.theme === "light" ? mauve.mauve3 : mauveDark.mauve3};
  padding: 5px 10px;
  border-radius: 4px;

  > span:first-child {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) =>
      props.theme === "light" ? mauveDark.mauve11 : mauveDark.mauve11};
  }

  > span:last-child {
    font-weight: 400;
    color: white;
  }
`;

const StyledContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "light" ? mauve.mauve3 : mauveDark.mauve3};
  padding: 16px;
  opacity: 0.9;
  border-radius: 4px;
  width: fit-content;
  height: fit-content;

  > span:first-child {
    font-size: 12px;
    font-weight: 600;
    color: ${(props) =>
      props.theme === "light" ? mauveDark.mauve11 : mauveDark.mauve11};
  }

  > span:last-child {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
`;


const StyledContainerInfoDad = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  gap: 1rem;
  width: 100%;
  height: fit-content;
`;

const StyledContainerInfoFilm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "light" ? mauve.mauve3 : mauveDark.mauve3};
  padding: 16px;
  opacity: 0.9;
  border-radius: 4px;
  width: 100%;

  > span:first-child {
    font-size: 12px;
    font-weight: 600;
    color: ${(props) =>
      props.theme === "light" ? mauveDark.mauve11 : mauveDark.mauve11};
  }

  > span:last-child {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
`;

const StyledBoxGenres = styled.div`
  display: flex;
  margin-top: 1rem;

  span {
    background-color: ${(props) =>
      props.theme === "light" ? purple.purple4 : purpleDark.purple4}80;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;
  }
`;

const StyledIframeContainer = styled.div`
  width: 80%;

  iframe {
    width: 100%;
    height: 100vh;
  }
`;

const StyledComponents = {
  StyledBody,
  StyledContainerInfo,
  StyledTitle,
  StyledSubtitle,
  StyledTagline,
  StyledPosterFilm,
  StyledInfoFilm,
  StyledContainerInfoFilm,
  StyledContainerInfoDad,
  StyledContainerSynopsis,
  StyledBoxGenres,
  StyledIframeContainer
};

export default StyledComponents;
