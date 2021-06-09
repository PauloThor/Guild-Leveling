import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        --black: #000;
        --navy: #0d2538;
        --white: #f0f0f0;
        --gray: #ccc;
        --darkgray: #333;
    }

    body, div, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    button {
        cursor: pointer;
    }

`;
