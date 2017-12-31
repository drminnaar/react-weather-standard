// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel2';

// IMPORT PROJECT REFERENCES
import { HourlyWeatherForecastCard } from './HourlyWeatherForecastCard';


const options = {
    items: 3,
    nav: false,
    rewind: true,
    autoplay: false
};


class HourlyWeatherDisplay extends Component {
    render(){
        return (
            <div className="hourly-weather-display">
                <div className="text-center h5 pt-2">Hourly</div>
                <div className="carousel">
                    <OwlCarousel ref={el => this.carousel = el} options={options}>
                        {
                            !!this.props.hourlyForecasts && this.props.hourlyForecasts.map((fc, i) => (
                                <HourlyWeatherForecastCard key={i} forecast={fc} />
                            ))
                        }
                    </OwlCarousel>
                </div>
                <div className="carousel-nav" style={{left: 0}}>
                    <i className="fa fa-chevron-left fa-lg pl-2" onClick={() => this.carousel.prev()}></i>
                </div>
                <div className="carousel-nav" style={{right: 0}}>
                    <i className="fa fa-chevron-right fa-lg pr-2" onClick={() => this.carousel.next()}></i>
                </div>
            </div>
        );
    }
}

HourlyWeatherDisplay.propTypes = {
    hourlyForecasts: PropTypes.array.isRequired
};

export { HourlyWeatherDisplay };