import { Button, makeStyles, Modal } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

import SwordIcon from "../../assets/sword.png";
import CircleIcon from "../../assets/circle.png";

const Container = styled.div`
  max-width: 300px;
  /* border: 1px solid rgba(9, 73, 121, 1); */
  border-radius: 15px;
  text-align: center;
  background: var(--gradient-blue-dark);
  color: white;
  margin: 10px;
  padding: 10px;

  h4 {
    background: var(--gradient-brown-dark);
    padding: 5px;
    font-size: 18px;
  }

  p {
    margin: 5px;
  }
`;

const useStyles = makeStyles({
  E: {
    color: "green",
  },
  D: {
    color: "green",
  },
  C: {
    color: "orange",
  },
  B: {
    color: "red",
  },
  A: {
    color: "red",
  },
  S: {
    color: "red",
  },
  modal: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
  },
  container: {
    border: "2px solid green",
  },
  btn: {
    marginRight: "10px",
  },
});

const Quest = ({ name, rank }) => {
  const [isShowing, setIsShowing] = useState(false);

  const classes = useStyles();

  const handleShow = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Container>
      <h4>{name}</h4>
      <p>
        Rank <label className={classes[rank]}>{rank}</label>
      </p>

      <Button onClick={handleShow}>
        <img
          src={CircleIcon}
          alt="circle"
          style={{
            backgroundColor: "transparent",
            width: "50px",
            marginTop: "-5px",
          }}
        />
      </Button>
      <Button>
        <img
          src={SwordIcon}
          alt="sword"
          style={{ backgroundColor: "transparent", width: "50px" }}
        />
        {/* <CheckCircle /> */}
      </Button>
      <Modal open={isShowing} onClose={handleShow}>
        <div className={classes.modal}>
          <p>Do you really want do abandon this quest?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleShow}
              className={classes.btn}
            >
              No
            </Button>
            <Button variant="outlined">Yes</Button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default Quest;
