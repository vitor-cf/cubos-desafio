import styled from "styled-components";
import { mauve, mauveDark } from "@radix-ui/colors";

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) => props.themeValue === 'light' ? mauve.mauve1 : mauveDark.mauve1}80%;
    border-top: 1px solid ${mauve.mauve3}50;
    color: ${(props) => props.themeValue === 'light' ? 'black' : 'white'};
`;

export default StyledFooter;