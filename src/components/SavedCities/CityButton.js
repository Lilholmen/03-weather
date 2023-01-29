const CityButton = ({ info, select, deleteCity }) => {
  return (
    <li className="flex divide-x ">
      <button
        className="rounded-l bg-stone-700 py-1.5 px-4 text-xl font-semibold  text-stone-100 transition-colors duration-300 hover:bg-emerald-600 hover:text-stone-700"
        onClick={() => {
          select(info);
        }}
      >
        {info.value.name || "Your location"}
      </button>
      <button
        className="rounded-r bg-red-800 px-2 text-2xl font-bold text-stone-50 transition-colors duration-500 hover:bg-red-600"
        onClick={() => {
          deleteCity(info.id);
        }}
      >
        X
      </button>
    </li>
  );
};

export default CityButton;
