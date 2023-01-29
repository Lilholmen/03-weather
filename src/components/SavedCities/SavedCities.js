import { useEffect, useState } from "react";

import CityButton from "./CityButton";

const SavedCities = ({ cities, selectCurrent, deleteCity }) => {
  const [input, setInput] = useState("");
  const [displayed, setDisplayed] = useState(cities);

  useEffect(() => {
    if (input)
      setDisplayed(
        cities.filter((city) =>
          city.value.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    else setDisplayed(cities);
  }, [input, cities]);

  return (
    <ul className="flex flex-wrap gap-4">
      <li className="w-1/6">
        <form>
          <input
            className="w-full rounded border border-stone-300 bg-stone-100 py-1.5 px-4  text-xl font-semibold text-stone-700 transition-colors duration-300 hover:bg-stone-50 hover:text-stone-800"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Search..."
          />
        </form>
      </li>
      {displayed.map((city) => (
        <CityButton
          key={city.id}
          info={city}
          select={selectCurrent}
          deleteCity={deleteCity}
        />
      ))}
    </ul>
  );
};

export default SavedCities;
