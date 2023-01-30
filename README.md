# [Weather App](https://lilholmen.github.io/03-weather/)

This project was created durning the course **React-academy** by **CDG** in 2023.

_App is available online via the link in the header._

## [OpenWeather API](https://openweathermap.org/)

This API is used to get weather by sending request with coords of the city or user location.

More about used services:

1. [Current weather](https://openweathermap.org/current) - return current weather from coords;
2. [Forecast for 5 days](https://openweathermap.org/forecast5) -return list of forecast weather for _5_ days with _3_ hours step;
3. [Geocoding](https://openweathermap.org/api/geocoding-api) - return coords from city name.

## Features

This project provide three ways to know weather forecast:

### **By current geoposition of the user**

Using `react-geolocated` package: https://www.npmjs.com/package/react-geolocated

**User must _enable geodetection_ on his device and _give a permition_ to his browser**

> May not detect your location in some regions for known reasons ;(

### **By finding city by the name**

Using `react-select-async-paginate` plugin for `react-select`: https://www.npmjs.com/package/react-select-async-paginate

### **By choose saved previously city**

- After app is detect user location or after user choose city by search bar, he can save this city.
- **All saved cities are also stored in localStorage _as well as settings_.**
- Thereafter user can **pick city** from the saved cities array shown under the **search bar**.
- User can **search among saved cities** by starting typing in the appropriate input.

### _User settings_

User can **enable** or **disable** information which he wants to see about _current city_.

> All settings saved in localStorage, _as already mentioned above_.

## Available Scripts (by create-react-app)

In the project directory, you can run:

### `npm deploy`

Runs standart react build script then build to github pages and push in gh-pages branch;
Thereafter app can be accessed online via the link: [Weather App](https://lilholmen.github.io/03-weather/).

Path can be changed in `package.json`, \_Homepage+ property.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
