# React Weather

A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation.

Go **[here](http://react-weather-standard.drminnaar.me/)** for live demo.

The weather application is composed of the following components:

* Header - A heading that displays application title

* WeatherDashboard - The primary (root) component that manages state for all underlying components. It is also responsibly for connecting to and retrieving data from a weather and geolocation service.

* CurrentWeatherDisplay - Displays weather information for the current point in time based on current location.

* DailyWeatherDisplay - Displays a 7 day weather forecast in the form of a scrollable carousel.

* DailyWeatherForecastCard  - Displays weather summary for a given day

* HourlyWeatherDisplay - Displays a 24 hour weather forecast in the form of a scrollable carousel.

* HourlyWeatherForecastCard  - Displays weather summary for a given hour

Component Diagram
![Component Diagram](https://user-images.githubusercontent.com/33935506/34460164-e4ecc5a4-ee0f-11e7-8813-574737aab026.png)

The following services are used to obtain weather and location data:

* WeatherService - A wrapper that is responsible for integrating with the [OpenWeather Api]. It provides an interface that allows one to obtain current weather, daily forecast, and hourly forecast information.

* GeolocationService - A wrapper that is responsible for integrating with the [Google Geolocation API]. It provide an interface that allows one to obtain the current GPS coordinates. These coordinates are used by the _WeatherService_ to obtain weather information.

Service Diagram
![Service Diagram](https://user-images.githubusercontent.com/33935506/34460198-b860e23a-ee10-11e7-9a34-d2158e43fb10.png)

Features:

* Display current weather
* Display 7 day weather forecast
* Display 24 hour weather forecast

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
  * dotenv setup included
* Third party React component integration using _'[React Owl Carousel 2]'_
* eslint setup and configuration
* SCSS setup and configuration
* [OpenWeather API] integration
* [Google Geolocation API] integration

**Screenshots:**

![React Weather](https://user-images.githubusercontent.com/33935506/34460233-590c5d68-ee11-11e7-9b77-f1c3d8d7536b.png)

---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [OpenWeather API] - Provides weather information
* [Google Geolocation API] - Provides geolocation information
* [React Owl Carousel 2] - A third party react carousel component
* [Surge] - Static web publishing for Front-End Developers

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-weather-standard'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-weather-standard.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-weather-standard.git
  ```

* Install node modules

   ```bash
   cd react-weather-standard
   npm install
   ```

Before continuing, the following steps are required:

1. Get API keys

   * OpenWeather API

     Have a look at [OpenWeather API](http://openweathermap.org/api)

     Get an API key [here](http://openweathermap.org/appid)

   * Google Geolocation API

     Have a look at [Google Geolocation API]

     Get an API key [here](https://developers.google.com/maps/documentation/geolocation/get-api-key)

1. Setup envrionment variables

   One is required to setup a few envrionment variables that are used by the _WeatherService_ and _GeolocationService_ to authenticate against external API's.

   Please follow the following steps:

   * Add _'.env'_ file

     Create a file called _'.env'_ at the root of the application

   * Add environment variables to _'.env'_ file

     GOOGLE_GEOLOCATION_API_KEY=YOUR_API_KEY_GOES_HERE
     OPEN_WEATHER_API_KEY=YOUR_API_KEY_GOES_HERE

   For more information about _'.env'_, please visit [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-weather-standard/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[OpenWeather API]: http://openweathermap.org
[Google Geolocation API]: https://developers.google.com/maps/documentation/geolocation/intro
[Surge]: https://surge.sh/
[React Owl Carousel 2]: https://github.com/florinn/react-owl-carousel2
[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard