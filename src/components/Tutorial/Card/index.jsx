import React from 'react';
import { StyledDiv, ImgDiv, TextDiv } from './styles';


const Card = ({ img_url, title, description })=>{
	return(
		<StyledDiv>
			<ImgDiv>
				<img src = { img_url } alt={title} />
			</ImgDiv>
			<TextDiv>
				<h3>{ title }</h3>
				<p>{ description }</p>
			</TextDiv>
		</StyledDiv>
	);
}

export default Card;