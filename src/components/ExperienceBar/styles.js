import styled from "styled-components";

export const ExperienceContainer = styled.div`
  font-size: 16px;
  width: 200px;
  margin-top: 20px;

  span {
    z-index: -1;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 25px;
    background: var(--darkgray);
    border-radius: 50px;
    color: var(--white);
    text-align: center;
  }

  span:before {
    position: absolute;
    content: "${({ experience }) => `${experience}%`}";
    top: 4.3px;
    left: 4px;
    max-width: 95.5%;
    width: ${({ experience }) => `${experience}%`};
    height: 65%;
    background: var(--green);
    border-radius: 50px;
    animation: bar 2s ease;
  }

  @keyframes bar {
    from {
      width: 0;
    }
  }
`;
