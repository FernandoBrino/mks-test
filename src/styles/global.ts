import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        background-color: ${props => props.theme.white};
        font: 400 1.6rem Montserrat, sans-serif;
    }

`