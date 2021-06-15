
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { StyledUl } from './styles';

const NavMenu = ({ isOpen })=>{

  return(
    <StyledUl isOpen = { isOpen }>
      <li>
        <span><FaHome/></span> HOME
      </li>
      <li>
        LINK 2
      </li>
      <li>
        LINK3
      </li>
      <li>
        LINK 4
      </li>
    </StyledUl>
  );
}

export default NavMenu;