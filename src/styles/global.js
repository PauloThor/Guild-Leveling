import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Montserrat, serif;
    }

    :root {
        --black: rgba(5, 3, 3, 1);
        --navy: #0d2538;
        --white: #f0f0f0;
        --gray: #ccc;
        --darkgray: #333;
        --link: #385898;
        --blue: #007AFF;
	    --green: #2ade2a;
        --darkblue: rgba(9, 73, 121, 1);
        --brown: rgba(90, 64, 84, 1);
        --gradient-blue-dark: radial-gradient(circle,rgba(9, 73, 121, 1) 0%,rgba(5, 3, 3, 1) 74%);
        --gradient-brown-dark: radial-gradient(
            circle,
            rgba(90, 64, 84, 1) 10%,
            rgba(5, 3, 3, 1) 93%
        );
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
