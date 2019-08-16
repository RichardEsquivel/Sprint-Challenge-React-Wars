import React from 'react';
import { Header, Description, Image, ImageContainer, TextContainer } from './styles';

//all components can take props even if not used
function InfoCard(props) {
	return (
		<InfoCard

			{props.name}
			{props.height}
			{props.mass}
			{props.birth_year}
			{props.hair_color}
			{props.skin_color}
			{props.eye_color}
			{props.gender}
			{props.homeworld} />


	);
}

export default InfoCard;
