//https://www.geojs.io/docs/v1/endpoints/geo/
// https://get.geojs.io/v1/ip/geo.json

//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true

// const loader = document.querySelector('#loader')
// let mask = document.querySelector('#mask')
const city = document.querySelector('#city')
const temperature = document.querySelector('#temperature')
const windSpeed = document.querySelector('#windspeed')
const windDirection = document.querySelector('#winddirection')
const weatherDescription = document.querySelector('#weatherdescription')


console.log(loader)
async function getWeather() {

        const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await res.json()
        const {latitude, longitude, city} = data
        console.log(latitude, longitude, city);

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        const weatherData = await weatherRes.json()

        loader.classList.add('hide')
        mask.classList.add('hide')
        const currentWeather = weatherData.current_weather;
        const {temperature, windspeed, winddirection, weathercode} = currentWeather

        const currentWeatherUnits = weatherData.current_weather_units;




        function decodeWeatherCode(code) {
                switch (code) {
                        case 0:
                                return 'Clear sky';
                        case 1:
                                return 'Mainly clear';
                        case 2:
                                return 'Partly cloudy';
                        case 3:
                                return 'Overcast';
                        case 45:
                                return "Overcast"
                        case 48:
                                return 'Fog and depositing rime fog';
                        case 51:
                                return 'Drizzle: Light intensity';
                        case 53:
                                return 'Drizzle: Moderate intensity';
                        case 55:
                                return 'Drizzle: Heavy intensity';
                        case 56:
                                return 'Freezing Drizzle: Light intensity';
                        case 57:
                                return 'Freezing Drizzle: Heavy intensity';
                        case 61:
                                return 'Rain: Slight intensity';
                        case 63:
                                return 'Rain: Moderate intensity';
                        case 65:
                                return 'Rain: Heavy intensity';
                        case 66:
                                return 'Freezing Rain: Light intensity';
                        case 67:
                                return 'Freezing Rain: Heavy intensity';
                        case 71:
                                return 'Snow fall: Slight intensity';
                        case 73:
                                return 'Snow fall: Moderate intensity';
                        case 75:
                                return 'Snow fall: Heavy intensity';
                        case 77:
                                return 'Snow grains';
                        case 80:
                                return 'Rain showers: Slight intensity';
                        case 81:
                                return 'Rain showers: Moderate intensity';
                        case 82:
                                return 'Rain showers: Violent intensity';
                        case 85:
                                return 'Snow showers: Slight intensity';
                        case 86:
                                return 'Snow showers: Heavy intensity';
                        case 95:
                                return 'Thunderstorm: Slight or moderate';
                        case 96:
                                return 'Thunderstorm with hail: Slight intensity';
                        case 99:
                                return 'Thunderstorm with hail: Heavy intensity';
                        default:
                                return 'No data';
                }
        }

const weatherDecode = decodeWeatherCode(weathercode);


document.getElementById('city').textContent = city;
document.getElementById('temperature').textContent = temperature + " " + currentWeatherUnits.temperature;
document.getElementById('windspeed').textContent = windspeed + " " +  currentWeatherUnits.windspeed;
document.getElementById('winddirection').textContent = winddirection + " " +  + currentWeatherUnits.winddirection;
document.getElementById('weatherdescription').textContent = weatherDecode;


        setTimeout(() => {
                loader.classList.add('hide');
        }, 1500);









}

    getWeather();
