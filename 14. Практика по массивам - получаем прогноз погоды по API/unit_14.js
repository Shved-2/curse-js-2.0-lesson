let keyToken = 'e0c33d50f06241584f10fb4115753fa5';
let httpicon = 'http://openweathermap.org/img/w/';

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&limit={limit}&appid={API key}
let sitys = [
  'London',
  'Perm',
  'Moscow',
  'Kyiv',
  'Paris',
  'Beijing',
  'Tokio',
  'Los Angeles',
  'Madrid',
  'Roma',
];
let num = Math.round(Math.random() * (sitys.length - 1));
let sity = sitys[num];

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=${keyToken}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.querySelector('.sity').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273, 15) + '&deg';
    document
      .querySelector('.img-icon')
      // .setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      .setAttribute('src', `image/${data.weather[0].icon}.svg`);

    document.querySelector('.number1').innerHTML = Math.round(data.wind.speed);
    document.querySelector('.number2').innerHTML = data.main.humidity;
    let napr = document.querySelector('.napr');
    if (
      (data.wind.deg > 0 && data.wind.deg <= 23) ||
      (data.wind.deg > 340 && data.wind.deg <= 360)
    ) {
      napr.innerHTML = 'Северный';
    } else if (data.wind.deg > 23 && data.wind.deg <= 70) {
      napr.innerHTML = 'СевероВосточный';
    } else if (data.wind.deg > 70 && data.wind.deg <= 114) {
      napr.innerHTML = 'Восточный';
    } else if (data.wind.deg > 114 && data.wind.deg <= 160) {
      napr.innerHTML = 'ЮгоВосточный';
    } else if (data.wind.deg > 160 && data.wind.deg <= 204) {
      napr.innerHTML = 'Южный';
    } else if (data.wind.deg > 204 && data.wind.deg <= 250) {
      napr.innerHTML = 'ЮгоЗападный';
    } else if (data.wind.deg > 250 && data.wind.deg <= 295) {
      napr.innerHTML = 'Западный';
    } else if (data.wind.deg > 295 && data.wind.deg <= 340) {
      napr.innerHTML = 'СевероЗападный ';
    }
  });
