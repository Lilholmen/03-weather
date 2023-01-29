import { useEffect, useState } from "react";
import AdditionItem from "./AdditionItem";

const WeatherInfo = ({ info, settings }) => {
  const [displayed, setDisplayed] = useState({
    city: info.label,
    country: info.sys.country,
    temp: {
      main: Math.trunc(Math.abs(info.main.temp)),
      fraction: Math.abs(info.main.temp % 1)
        .toString()
        .slice(1, 4),
      sign: Math.sign(info.main.temp) < 0 ? "-" : "+",
    },
    icon: info.weather[0].icon,
    weather: info.weather[0].main,
    additions: settings.map((setting) => {
      return { ...setting, value: info[setting.value[0]][setting.value[1]] };
    }),
  });

  useEffect(() => {
    setDisplayed({
      city: info.label,
      country: info.sys.country,
      temp: {
        main: Math.trunc(Math.abs(info.main.temp)),
        fraction: Math.abs(info.main.temp % 1)
          .toString()
          .slice(1, 4),
        sign: Math.sign(info.main.temp) < 0 ? "-" : "+",
      },
      icon: info.weather[0].icon,
      weather: info.weather[0].main,
      additions: settings.map((setting) => {
        return { ...setting, value: info[setting.value[0]][setting.value[1]] };
      }),
    });
  }, [info, settings]);

  return (
    <div className="flex w-2/3 flex-col gap-10 rounded-xl bg-stone-800 px-8 py-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-10">
          <div className="rounded-full bg-stone-100 p-3">
            <img
              className="h-20 w-20"
              alt={displayed.weather}
              src={"icons/" + displayed.icon + ".png"}
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-4xl font-semibold text-stone-50">
              {displayed.city},{" "}
              <span className="text-xl font-normal text-stone-300">
                {displayed.country}
              </span>
            </h3>
            <div className="text-2xl text-stone-400">
              <p>{displayed.weather}</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="text-7xl font-bold text-stone-50">
            {displayed.temp.sign}
            {displayed.temp.main}
          </div>
          <div className="flex flex-col justify-between text-xl font-normal text-stone-300">
            <div className="">°C</div>
            <div>{displayed.temp.fraction}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-2xl text-stone-200">Additional Information:</h4>

        <ul className="flex divide-x divide-stone-500">
          {displayed.additions.map((data) => (
            <AdditionItem
              key={data.id}
              data={data}
              timeDifference={info.timezone}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherInfo;
