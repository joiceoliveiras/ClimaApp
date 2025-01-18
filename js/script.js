async function getWeather(city){
    const apiKey = '8774e80a55fa93cb1e32850aed9518e5';
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
    const resultDiv = document.getElementById('weatherResult');

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8774e80a55fa93cb1e32850aed9518e5`);

        if (!response.ok){
            throw new Error('Erro ao buscar clima. Verifique o nome da cidade.');

        }

        const data = await response.json();

        displayWeather(data);
    } catch(error){
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data{
    const {name, main, weather}
})


