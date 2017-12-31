// IMPORT PACKAGE REFERENCES
import React from 'react';
import PropTypes from 'prop-types';


const getTime = (date) => {
    return `${date.getHours()}:00`;
};


const HourlyWeatherForecastCard = ({ forecast }) => (
    <div className="hourly-weather-card">
        <small>{getTime(forecast.date)}</small>
        <img className="icon mx-auto" src={forecast.icon} />
        <div className="font-weight-bold">
            {parseInt(forecast.temperature.current)}&deg;
        </div>
        <div className="text-capitalize">
            <small>{forecast.condition}</small>
        </div>
    </div>
);


HourlyWeatherForecastCard.propTypes = {
    forecast: PropTypes.object.isRequired
};


export { HourlyWeatherForecastCard };