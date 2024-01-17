// API_KEY 
const API_KEY = '57bf6faa12b3d96d1734485e8fd4c6ba';

const loadApiKey = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadApiKey(data))
}

const displayLoadApiKey = wheather_information => {
    console.log(wheather_information)
    const tempeture = document.getElementById('tempeture');
    const condition = document.getElementById('condition');
    tempeture.innerText = `${wheather_information.main.temp}`;
    condition.innerText = `${wheather_information.weather[0].main}`
}
document.getElementById('search-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-filed');
    const cityName = document.getElementById('cityName');
    const city = inputField.value;
    cityName.innerText = city;
    loadApiKey(city)
})
loadApiKey('dhaka')