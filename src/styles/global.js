import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Montserrat, serif;
    }

    :root {
        --black: #050303;
        --navy: #0d2538;
        --white: #f0f0f0;
        --gray: #ccc;
        --darkgray: #333;
        --link: #385898;
        --blue: #007AFF;
	    --green: #2ade2a;
        --darkblue: #094979;
        --brown: #5a4054;
        --gradient-blue-dark: radial-gradient(circle, var(--darkblue) 0%, var(--black) 74%);
        --gradient-brown-dark: radial-gradient(circle, var(--brown) 10%, var(--black) 93%);
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
