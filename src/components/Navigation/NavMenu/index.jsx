import React from "react";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useInfoUser } from "../../../provider/user";
import { StyledUl } from "./styles";

const NavMenu = ({ isOpen }) => {
  const { logout } = useInfoUser();

  const history = useHistory();

  const handlePath = (path) => {
    history.push(path);
  };

  return (
    <StyledUl isOpen={isOpen}>
      <li onClick={() => handlePath("/dashboard")}>
        <span>
          <FaHome />
        </span>{" "}
        HOME
      </li>
      <li onClick={() => handlePath("/tutorial")}>Tutorial</li>
      <li onClick={() => handlePath("/guildboard")}>Guilds</li>
      <li onClick={() => handlePath("/shop")}>Shop</li>
      <li onClick={() => handlePath("/settings")}>Settings</li>
      <li onClick={logout}>Logout</li>
    </StyledUl>
  );
};

export default NavMenu;
