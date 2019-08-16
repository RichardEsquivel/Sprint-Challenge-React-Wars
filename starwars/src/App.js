import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCard from './components/InfoCard';
import './App.css';
import { CardContainer } from './components/styles';

function App() {
	//Declaring the state to be use for app
	const [people, setPeople] = useState([]);

	useEffect(() => {
		axios.get('https://swapi.co/api/people/?format=json')
			.then(response => {
				setPeople(response.data.results);
			});
	}, []);


	return (
		<div>
			<h1 className="Header">React Wars!!!</h1>
			{people.map((data, index) => {

				return <InfoCard
					key={index}
					name={data.name}
					height={data.height}
					mass={data.mass}
					birth_year={data.birth_year}
					hair_color={data.hair_color}
					skin_color={data.skin_color}
					eye_color={data.eye_color}
					gender={data.gender}
					homeworld={data.homeworld}
				/>
			})}
		</div>
	);
}
export default App;
