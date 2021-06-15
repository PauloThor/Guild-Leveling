import React from 'react';
import { StyledDiv, StyledHeader } from './styles';
import logo from '../../assets/logo-gray.png';

const Header = ({ children })=>{
	const imgStyle = {
		width: '100px'
	}

	return(
		<>
		<StyledHeader>
			<StyledDiv>
				<h1>
					<img src = { logo } style = { imgStyle }/>
				</h1>
			</StyledDiv>
		</StyledHeader>
		{ children }
		</>
	);
}

export default Header;