import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

export const QuestsContainer = styled.div`
  background: var(--gradient-brown-dark);
  width: 320px;
  min-height: 500px;
  border-radius: 15px;
  padding: 10px;
  margin: 0.5rem;
  position: relative;
  animation: vanish 1s;

  span {
    font-family: var(--font);
    font-size: 1.2rem;
  }

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const QuestsDisplay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 15px;
  background: var(--gradient-blue-dark);
  display: ${(props) => (props.show === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation: vanish 1s;

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DisplayButton = styled(Button)`
  background: var(--gradient-brown-dark);
  color: white !important;
  border: 1px solid var(--brown);
  border-radius: 15px !important;
  animation: ${(props) => (props.jump ? "1s jump infinite" : "none")};
  width: 250px;
  font-family: var(--font);
  margin: 5px !important;

  @keyframes jump {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20%);
    }
  }
`;

export const BlueDisplayButton = styled(DisplayButton)`
  background: var(--gradient-blue-dark);
  margin-top: auto;
`;

export const StyledInput = styled.input`
  color: white;
  background: var(--gradient-brown-dark);
  border: 1px solid transparent;
  border-radius: 15px;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-family: var(--font);
  outline: none;
  width: 100%;
  margin: 10px;
  text-align: center;

  &:focus {
    border-color: var(--brown);
  }

  &:hover {
    border-color: #9e8e8e;
  }

  ::placeholder {
    text-align: center;
  }
`;
