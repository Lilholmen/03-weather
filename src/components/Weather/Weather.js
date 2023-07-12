import { useEffect, useState } from 'react'

import WeatherInfo from './WeatherInfo'
import ForecastInfo from './ForecastInfo'

const Weather = ({ settings, currentCity }) => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)

  useEffect(() => {
    if (currentCity === null) return

    const currentWeatherFetch = fetch(
      `${process.env.REACT_APP_API_URL}/weather?lat=${currentCity.value.lat}&lon=${currentCity.value.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    )
    const forecastWeatherFetch = fetch(
      `${process.env.REACT_APP_API_URL}/forecast?lat=${currentCity.value.lat}&lon=${currentCity.value.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    )

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({
          label: currentCity.value.name === 'Your location' ? weatherResponse.name : currentCity.value.name,
          ...weatherResponse,
        })
        setForecastWeather({
          ...forecastResponse,
        })
      })
      .catch((err) => console.log(err))
  }, [currentCity])

  return (
    <>
      {currentWeather === null || currentWeather === undefined ? (
        <div className="text-center text-3xl font-semibold text-stone-600">Loading...</div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <WeatherInfo info={currentWeather} settings={settings} />
          <ForecastInfo info={forecastWeather} />
        </div>
      )}
    </>
  )
}

export default Weather
