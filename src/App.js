import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useGeolocated } from "react-geolocated";
import Weather from "./components/Weather/Weather";
import defaultSettings from "./utils/settings";
import UserSettings from "./components/UserSettings/UserSettings";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [currentCity, setCurrentCity] = useState({
    value: { lon: -0.12574, lat: 51.50853, name: "Your location" },
  });
  const [settings, setSettings] = useState(defaultSettings);

  const handleOnCurrentChange = (cityData) => {
    setCurrentCity(cityData);
  };

  const handleSettingsToggle = (settingId) => {
    const changedSettings = settings.map((setting) =>
      setting.id === settingId
        ? { ...setting, active: !setting.active }
        : setting
    );

    setSettings(changedSettings);
  };

  const handleCitySave = (city) => {};

  return (
    <main className="min-h-screen w-full bg-amber-100 pb-12">
      <div className="container mx-auto flex flex-col gap-12">
        <div className=" pt-6 text-center">
          <h1 className="text-6xl font-bold text-stone-700">Weather App</h1>
        </div>

        <div className="flex flex-col gap-5 rounded-xl border border-stone-200 bg-stone-50 py-9 px-5">
          <div className="flex w-full gap-9">
            <div className="w-3/4">
              <SearchBar onSearchChange={handleOnCurrentChange} />
            </div>

            <button
              className="w-1/4 rounded bg-emerald-700 text-2xl font-semibold text-stone-100 transition-colors duration-500 hover:bg-emerald-600 hover:text-stone-50"
              onClick={() => handleCitySave(currentCity)}
            >
              Pin the city
            </button>
          </div>

          <UserSettings
            settings={settings}
            settingsToggle={handleSettingsToggle}
          />
        </div>

        <Weather
          currentCity={currentCity}
          settings={settings}
        />
      </div>
    </main>
  );
}

export default App;
