import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useGeolocated } from "react-geolocated";
import Weather from "./components/Weather/Weather";

function App() {
  const [currentCity, setCurrentCity] = useState({
    value: { lon: -0.12574, lat: 51.50853, name: "Your location" },
  });

  return (
    <main className="min-h-screen w-full bg-amber-100 pb-12">
      <div className="container mx-auto flex flex-col gap-12">
        <div className=" pt-6 text-center">
          <h1 className="text-6xl font-bold text-stone-700">Weather App</h1>
        </div>

        <Weather currentCity={currentCity} />
      </div>
    </main>
  );
}

export default App;
