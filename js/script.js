async function getWeather(city) {
    const apiKey = '8774e80a55fa93cb1e32850aed9518e5';
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
    const resultDiv = document.getElementById('weatherResult');

    try {
        const response = await fetch(`${baseUrl}?q=${city}&units=metric&lang=pt&appid=${apiKey}`);


        if (!response.ok) {
            throw new Error('Erro ao buscar clima. Verifique o nome da cidade.');
        }

        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const resultDiv = document.getElementById('weatherResult');

    const tempIcon = 'https://img.icons8.com/emoji/48/000000/thermometer-emoji.png';
    const humidityIcon = 'https://img.icons8.com/color/48/000000/water.png';
    const weatherIcon = 'https://openweathermap.org/img/wn/' + weather[0].icon + '@2x.png';

    resultDiv.innerHTML = `
        <h2>${name}</h2>
        <p><img src="${tempIcon}" alt="Ícone Temperatura" style="width: 20px; height: 20px;"> <strong>Temperatura:</strong> ${main.temp}°C</p>
        <p><img src="${weatherIcon}" alt="Ícone Clima" style="width: 20px; height: 20px;"> <strong>Clima:</strong> ${weather[0].description}</p>
        <p><img src="${humidityIcon}" alt="Ícone Humidade" style="width: 20px; height: 20px;"> <strong>Humidade:</strong> ${main.humidity}%</p>
    `;
}

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});
