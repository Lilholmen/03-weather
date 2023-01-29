import { useEffect, useState } from "react";

import { API_KEY, API_URL } from "../../utils/api";
import WeatherInfo from "./WeatherInfo";

const Weather = ({ currentCity }) => {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (currentCity === null) return;

    const currentWeatherFetch = fetch(
      `${API_URL}/weather?lat=${currentCity.value.lat}&lon=${currentCity.value.lon}&appid=${API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({
          label:
            currentCity.value.name === "Your location"
              ? weatherResponse.name
              : currentCity.value.name,
          ...weatherResponse,
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
          <WeatherInfo info={currentWeather} />
        </div>
      )}
    </>
  );
};

export default Weather;
