import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCard from './components/InfoCard';
import './App.css';
import { CardContainer } from './components/styles';

function App() {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		axios.get('https://swapi.co/api/people/?format=json').then((response) => {
			const goodData = response.data.results;
			setPeople(goodData);
		});
	}, []);

	return (
		<div className="App">
			<h1 className="Header">React Wars!!!</h1>
			<div>
				{people.map((data, index) => {
					return
					<InfoCard
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
		</div>
	);
}
export default App;
