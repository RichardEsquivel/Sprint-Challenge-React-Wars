import React from 'react';
import { Header, Description, Image, ImageContainer, TextContainer, InfoCards } from './styles';

//all components can take props even if not used
function InfoCard(props) {
	return (
		<InfoCards>
			<Header>Name: {props.name}</Header>
			<div>Height: {props.height} </div>
			<div>Mass in kg: {props.mass}</div>
			<div>Birth Year: {props.birth_year}</div>
			<div>Hair Color: {props.hair_color}</div>
			<div>Skin Color: {props.skin_color}</div>
			<div>Eye Color: {props.eye_color}</div>
			<div>Gender: {props.gender}</div>
			<div>Homeworld Link: {props.homeworld}</div>
		</InfoCards>
	);
}


export default InfoCard;