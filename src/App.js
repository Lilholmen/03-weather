import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useGeolocated } from "react-geolocated";

import defaultSettings from "./utils/settings";

import Weather from "./components/Weather/Weather";
import UserSettings from "./components/UserSettings/UserSettings";
import SearchBar from "./components/SearchBar/SearchBar";
import SavedCities from "./components/SavedCities/SavedCities";

function App() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const [savedCities, setSavedSities] = useState(
    JSON.parse(window.localStorage.getItem("savedCities")) || []
  );
  const [settings, setSettings] = useState(
    JSON.parse(window.localStorage.getItem("settings")) || defaultSettings
  );

  const [currentCity, setCurrentCity] = useState(null);

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

    window.localStorage.setItem("settings", JSON.stringify(changedSettings));
  };

  const handleCitySave = (city) => {
    if (city) {
      const isNew = !savedCities.find(
        (saved) =>
          saved.value.lat === city.value.lat &&
          saved.value.lon === city.value.lon
      );

      if (isNew) {
        const changedCities = [...savedCities, { ...city, id: uuid() }];

        setSavedSities(changedCities);

        window.localStorage.setItem(
          "savedCities",
          JSON.stringify(changedCities)
        );
      }
    }
  };

  const handleCityDelete = (id) => {
    const changedCities = savedCities.filter((city) => city.id !== id);

    setSavedSities(changedCities);

    window.localStorage.setItem("savedCities", JSON.stringify(changedCities));
  };

  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      setCurrentCity({
        value: {
          lat: coords.latitude,
          lon: coords.longitude,
          name: "Your location",
        },
      });
    }
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

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

          <SavedCities
            cities={savedCities}
            selectCurrent={handleOnCurrentChange}
            deleteCity={handleCityDelete}
          />

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
