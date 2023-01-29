const ForecastItem = ({ info }) => {
  const days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

  const getDayHaeder = (day) => {
    const forecastDay = new Date(day * 1000);
    const isToday = forecastDay.getDay() - new Date().getDay() === 0;

    const headerInfo = {
      date: forecastDay.getDate(),
      month: forecastDay.getMonth() + 1,
      name: isToday ? "Today" : days[forecastDay.getDay()],
    };

    return (
      <>
        <div className="text-lg font-semibold">{headerInfo.name}</div>
        <div className="text-xs font-bold text-stone-600">
          {headerInfo.date}.{headerInfo.month}
        </div>
      </>
    );
  };

  return (
    <li className="flex w-1/5 flex-col gap-2 rounded-lg bg-slate-300  px-4 py-2 shadow-lg">
      <div className="flex justify-between">
        <div className=" ">{getDayHaeder(info.dt)}</div>
        <img
          className="h-10 w-10 "
          alt={info.weather[0].main}
          src={"icons/" + info.weather[0].icon + ".png"}
        />
      </div>

      <div>
        <div className="text-xs font-semibold text-stone-600">
          {info.weather[0].main}
        </div>
        <div className="text-right text-2xl text-stone-800">
          {Math.trunc(info.main.temp)}°C
        </div>
      </div>
    </li>
  );
};

export default ForecastItem;
