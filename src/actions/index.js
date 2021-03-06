import axios from 'axios';
const API_KEY = "564fe6ce35de71d399d2a0ea6925eeb9";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request is', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
