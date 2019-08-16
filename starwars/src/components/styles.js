import styled from 'styled-components';

export const InfoCards = styled.div`
	display:flex;
	flex-direction:column;
	text-align:center;
	width: 50%;
	margin: 0% auto 3% auto;
	padding: 2%;
	background-color: rgba(255, 0, 0, 0.6);
	color:white;
	text-shadow: 3px 3px #FF0000;
	border-radius: 14px;
	border-bottom:3px solid black;

`;

export const ImageContainer = styled.div`width: 100%;`;

export const Image = styled.img`max-width: 100%;`;

export const Description = styled.div`
	background-color: lightpurple;
	color: white;
	font-size: 1.5rem;
	padding: 2% 3%;
	margin-bottom: 10%;
`;

export const Header = styled.h1`
	font-size: 1rem;
	font-weight: bolder;
	color: #B8E2F2;
	text-align: center;
	text-shadow: 3px 3px #FF0000;

`;
