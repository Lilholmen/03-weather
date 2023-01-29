const defaultSettings = [
  {
    id: 0,
    label: "feels",
    active: true,
    value: ["main", "feels_like"],
    unit: "°C",
  },
  {
    id: 1,
    label: "pressure",
    active: true,
    value: ["main", "pressure"],
    unit: "hPa",
  },
  {
    id: 2,
    label: "humidity",
    active: true,
    value: ["main", "humidity"],
    unit: "%",
  },
  {
    id: 3,
    label: "wind",
    active: true,
    value: ["wind", "speed"],
    unit: "m/s",
  },
  {
    id: 4,
    label: "sunrise",
    active: true,
    value: ["sys", "sunrise"],
    unit: "time",
  },
  {
    id: 5,
    label: "sunset",
    active: true,
    value: ["sys", "sunset"],
    unit: "time",
  },
];

export default defaultSettings;
