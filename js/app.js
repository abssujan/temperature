// API_KEY 
const API_KEY = '57bf6faa12b3d96d1734485e8fd4c6ba';

const loadApiKey = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
loadApiKey('dhaka')