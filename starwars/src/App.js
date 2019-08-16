import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCard from './components/InfoCard';
import './App.css';
import { CardContainer } from './components/styles';

function App() {
	const [ data, setData ] = useState({});
	useEffect(() => {
		axios.get('https://swapi.co/api/people/2/').then((response) => {
			setData(response.data);
		});
	}, []);
	return (
		<CardContainer className="App">
			<InfoCard className="infoCard" title={data.title} url={data.url} explanation={data.explanation} />
		</CardContainer>
	);
}
export default App;
