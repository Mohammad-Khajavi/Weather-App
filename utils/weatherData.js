const request = require("request");

const openWeatherApp = {
  BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
  SECRET_KEY: "27936fe1f92513de660c3d171ae085cb",
};

const weatherData = (address, callback) => {
  const url =
    openWeatherApp.BASE_URL +
    encodeURIComponent(address) +
    "&APPID=" +
    openWeatherApp.SECRET_KEY;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback(true, "Unable to connect to weather service!" + error);
    }

    callback(false, data?.body);
  });
};

module.export = weatherData;
