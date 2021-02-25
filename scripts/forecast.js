// This script handles all the code required for making api requests.

const apiKey = 'sD7OoqRUgWiw8rA35GuqTs9youWyGpEm';

// Locations API --> Text Search --> City Search
const getCity = async function(city) {
    const url = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const queryString = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(url + queryString);
    const data = await response.json();

    // Closest match
    return data[0];
};

// Current Conditions API --> Current Conditions --> Current Conditions
const getWeather = async function(cityKey) {
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
    const queryString = `?apikey=${apiKey}`;

    const response = await fetch(url + queryString);
    const data = await response.json();

    return data[0];
};