import { UlContainer } from "./styles";

const RightNav = ({ open }) => {
  return (
    <UlContainer open={open}>
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
      <li>Link 4</li>
    </UlContainer>
  );
};

export default RightNav;
