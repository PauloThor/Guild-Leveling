import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  height: 500px;
  background: var(--gradient-brown-dark);
  border-radius: 20px;
  justify-content: center;

  div.user-profile {
    display: flex;
    flex-direction: column;
    width: 420px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--brown);
    border-radius: 15px;
    background: var(--gradient-blue-dark);
    color: white;
    margin: 10px;
    font-family: var(--font);
    animation: 1s fromLeft;

    div.info {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      span {
        margin: 5px 0;
      }
    }

    .MuiSvgIcon-root {
      margin: 10px auto;
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 100%;
      color: darkgray;
    }
  }

  div.quests-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 259px;

    ul {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      div.quest {
        width: 200px;
        height: 95px;
        display: flex;
        justify-content: center;

        display: flex;
        flex-direction: column;
        max-width: 300px;
        border: 1px solid var(--brown);
        border-radius: 15px;
        text-align: center;
        background: var(--gradient-blue-dark);
        color: white;
        margin: 10px;
        padding: 10px;
        font-family: var(--font);
        animation: 1s fromLeft;

        h3 {
          background: var(--gradient-brown-dark);
          padding: 5px;
          font-size: 1.2rem;
          font-family: var(--font);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 5px;
        }

        span {
          font-family: var(--font);
        }
      }
    }
  }
`;
