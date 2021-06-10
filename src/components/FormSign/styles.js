import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  div.img {
    animation: ${appearFromLeft} 1.5s;

    h1 {
      margin-top: 340px;
    }
  }

  form,
  div.header,
  div.signup-header,
  .MuiFormControl-root,
  input.button,
  p {
    min-width: 256px;
  }

  form {
    animation: ${appearFromRight} 1.5s;
    display: flex;
    flex-direction: column;
    margin-top: 120px;

    div.header {
      div.signup-header {
        width: 87%;
        display: flex;
        margin: 0 auto 10px auto;

        img {
          width: 100px;
          height: 100px;
        }

        h1 {
          font-weight: 400;
          margin: 42px 0;
        }
      }
    }

    input {
      margin-top: 1.2px;
    }

    .MuiInputAdornment-positionEnd svg {
      cursor: pointer;
    }

    .MuiFormControl-root {
      margin-bottom: 20px;
      width: 400px;
    }

    .MuiInputAdornment-positionStart {
      margin-right: 0;
    }

    .MuiOutlinedInput-inputAdornedStart {
      padding-left: 14px;
    }

    .MuiFormHelperText-contained {
      text-align: start;
      margin-left: 3px;
      color: red;
      margin-right: 0px;
    }

    .MuiOutlinedInput-adornedStart {
      padding-left: 18px;
    }

    .MuiOutlinedInput-adornedEnd {
      padding-right: 18px;
    }

    p {
      z-index: -1;
      text-align: end;
      width: 400px;
      margin-bottom: 0;

      a {
        color: var(--link);
      }
    }

    p.MuiFormHelperText-contained {
      width: 256px;
    }

    .button {
      transition: 0.25s;
      border-radius: 3px;
      border: none;
      background: var(--blue);
      color: var(--white);
      cursor: pointer;
      width: 400px;
      height: 40px;
      font-size: 18px;
    }

    .button:before {
      z-index: -1;
    }

    .button:hover {
      filter: brightness(90%);
    }

    div.password {
      width: 400px;
      display: flex;
      justify-content: space-between;

      .MuiFormControl-root {
        min-width: 177px;
        width: 190px;
      }
    }
  }

  @media (max-width: 1100px) {
    div.img {
      display: none;
    }

    form {
      max-width: 80vw;
      align-items: center;
      margin-top: 3vh;

      div.header {
        div.signup-header {
          width: 100%;
        }
      }

      .MuiFormControl-root,
      .button,
      p {
        max-width: 80vw;
      }

      div.password {
        max-width: 100%;
        flex-direction: column;

        .MuiFormControl-root {
          width: 100%;
          max-width: 80vw;
          min-width: 256px;
        }
      }

      p.MuiFormHelperText-contained {
        width: 100%;
      }
    }
  }

  @media (max-width: 435px) {
    form {
      div.header {
        div.signup-header {
          h1 {
            margin: 20px 0;
          }
        }
      }
    }
  }
`;
