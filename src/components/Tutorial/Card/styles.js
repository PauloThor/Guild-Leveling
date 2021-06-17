import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin: 10px;
	padding: 10px 0;
	/* background-image: linear-gradient(to bottom right, #2c296d 0%, #21222d 25%, var(--brown) 50%, var(--darkgray) 85%, var(--gray) 99%); */
	background-image: linear-gradient(to bottom right, #2c296d 0%, #21222d 25%, #1e1e20 85%, #b9bbcf1c 95%);
	border-radius: 8px;
	border: 1px solid var(--white);
`;

export const ImgDiv = styled.div`
	width: 100px;
	height: 150px;

	margin-left: 10px;

	img{
		width: 100%;
		display: block;
		margin: 0 auto;
		min-width: 70px;
		max-height: 150px;
	}
`;

export const TextDiv = styled.div`
	padding: 0 10px;
	text-align: justify;
`;