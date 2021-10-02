const request = require("postman-request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fea46459257b300e0b4b589b00e22fe4&query=37.8267,-122.4233&units=f" +
    latitude +
    "," +
    longtitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to conncet to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. There is a " +
          body.current.precip +
          "% chance of rain"
      );
    }
  });
};

module.exports = forecast;
