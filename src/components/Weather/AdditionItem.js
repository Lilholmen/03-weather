const AdditionItem = ({ data, timeDifference }) => {
  const getTime = (timestamp) => {
    const date = new Date((timestamp + timeDifference) * 1000);

    const hours = "0" + date.getUTCHours();
    const minutes = "0" + date.getUTCMinutes();
    const seconds = "0" + date.getUTCSeconds();

    return hours.slice(-2) + ":" + minutes.slice(-2) + ":" + seconds.slice(-2);
  };

  return (
    <>
      {data.active ? (
        <li className="flex w-1/6 flex-col px-2 text-stone-50">
          <h6 className="w-1/6 text-stone-300 first-letter:capitalize">
            {data.label}
          </h6>
          <div className="flex font-semibold">
            <div>{data.unit === "time" ? getTime(data.value) : data.value}</div>
            <div>{data.unit === "time" ? null : data.unit}</div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default AdditionItem;
