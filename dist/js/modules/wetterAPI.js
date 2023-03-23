   // Wetter API


   function wetterAPI() {
    // Функция для получения данных о погоде через API
    function getWeatherData(city, apiKey) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            };
            return weatherData;
        });
    }
    
    // Вызов функции для получения данных о погоде и отображения их на странице
    const apiKey = 'dc479f74e2f408ade12574d3477d6a6c';
    const city = 'Bochum';
    
    getWeatherData(city, apiKey)
        .then(weatherData => {
        const temperatureElement = document.querySelector('#temperature');
        const descriptionElement = document.querySelector('#description');
        const iconElement = document.querySelector('#icon');

        temperatureElement.innerHTML = `${Math.floor(weatherData.temperature)} &deg;C`;
        descriptionElement.innerHTML = weatherData.description;
        iconElement.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.icon}.png`);
        })
        .catch(error => console.error(error));

    const wetterButton = document.querySelector('.Intero__weatherBtn');
    const wetterButtonColor = document.querySelector('.Intero__weatherBtn__knopf');
    const wetterCity = document.querySelector('.Intero__weather__city');
    const wetterTemp = document.querySelector('.Intero__weather__temperatur');
    const wetterDescr = document.querySelector('.Intero__weather__description');
    const wetterIcon = document.querySelector('.Intero__weather__icon');

    function showWether() {
        wetterCity.style.display = 'block';
        wetterTemp.style.display = 'block';
        wetterDescr.style.display = 'block';
        wetterIcon.style.display = 'inline-block';
        wetterButtonColor.style.backgroundColor = '#367848';
    }

    function closeWeather() {
        wetterCity.style.display = 'none';
        wetterTemp.style.display = 'none';
        wetterDescr.style.display = 'none';
        wetterIcon.style.display = 'none';
        wetterButtonColor.style.backgroundColor = '';
    }

    wetterButton.addEventListener('click', function() {
        if (wetterCity.style.display === 'block') {
          closeWeather();
        } else {
          showWether();
        }
      });
   }

   export default wetterAPI;
