import ForecastItem from "./ForecastItem";

const ForecastInfo = ({ info }) => {
  return (
    <ul className="flex w-2/3 gap-5">
      {info.list.map((forecast, index) =>
        index % 8 === 0 ? (
          <ForecastItem
            key={forecast.dt}
            info={forecast}
          />
        ) : null
      )}
    </ul>
  );
};

export default ForecastInfo;
