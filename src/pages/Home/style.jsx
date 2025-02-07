import styled from "styled-components";
import { mauve, mauveDark, purple, purpleDark } from "@radix-ui/colors";

import TextField from "@mui/material/TextField";

const StyledBody = styled.div`
  background-image: linear-gradient(
      to top,
      ${(props) =>
        props.themeValue === "light" ? mauve.mauve1 : mauveDark.mauve1}80%,
      transparent
    ),
    url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px)
    padding: 0.5rem; 
    gap: 1rem; 
  }
`;

const StyledTextField = styled(TextField)`
  background-color: ${(props) =>
    props.themeValue === "light" ? mauve.mauve2 : mauveDark.mauve2};
  border: none;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSearchMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const StyledFilter = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledList = styled.ul`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: ${(props) =>
    props.themeValue === "light" ? mauve.mauve1 : mauveDark.mauve4}80;

  @media (max-width: 768px) {
    width: 80%;
    padding: 1rem;
    gap: 1rem;
  }
`;

const StyledListItem = styled.li`
  background-color: white;
  background-image: linear-gradient(to top, ${mauveDark.mauve2} 1%, transparent),
    url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;
  border-radius: 4px;
  display: flex;
  align-items: end;
  width: 18%;

  @media (max-width: 768px) {
    width: 80%;
    height: 30rem;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PaginationButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) =>
    props.themeValue === "light" ? purple.purple9 : purpleDark.purple9};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    background-color: ${(props) =>
      props.themeValue === "light" ? mauve.mauve2 : mauveDark.mauve2};
    color: ${(props) =>
      props.themeValue === "light" ? mauve.mauve8 : mauveDark.mauve8};
    cursor: default;
  }

  &.active {
    background-color: ${(props) =>
      props.themeValue === "light" ? mauve.mauve2 : mauveDark.mauve2};
    color: ${(props) =>
      props.themeValue === "light" ? mauve.mauve8 : mauveDark.mauve8};
    font-weight: bold;
    background-image: none;
  }
`;

const StyledComponents = {
  StyledBody,
  StyledSearchMovies,
  StyledList,
  StyledListItem,
  PaginationContainer,
  PaginationButton,
  StyledFilter,
  StyledTextField,
};

export default StyledComponents;
