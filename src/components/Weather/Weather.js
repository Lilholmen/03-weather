import { useEffect, useState } from "react";

import { API_KEY, API_URL } from "../../utils/api";

import WeatherInfo from "./WeatherInfo";
import ForecastInfo from "./ForecastInfo";

const Weather = ({ settings, currentCity }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  useEffect(() => {
    if (currentCity === null) return;

    const currentWeatherFetch = fetch(
      `${API_URL}/weather?lat=${currentCity.value.lat}&lon=${currentCity.value.lon}&appid=${API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${API_URL}/forecast?lat=${currentCity.value.lat}&lon=${currentCity.value.lon}&appid=${API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({
          label:
            currentCity.value.name === "Your location"
              ? weatherResponse.name
              : currentCity.value.name,
          ...weatherResponse,
        });
        setForecastWeather({
          ...forecastResponse,
        });
      })
      .catch((err) => console.log(err));
  }, [currentCity]);

  return (
    <>
      {currentWeather === null || currentWeather === undefined ? (
        <div className="text-center text-3xl font-semibold text-stone-600">
          Loading...
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <WeatherInfo
            info={currentWeather}
            settings={settings}
          />
          <ForecastInfo info={forecastWeather} />
        </div>
      )}
    </>
  );
};

export default Weather;
