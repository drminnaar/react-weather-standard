// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel2';

// IMPORT PROJECT REFERENCES
import { DailyWeatherForecastCard } from './DailyWeatherForecastCard';


const options = {
    items: 3,
    nav: false,
    rewind: true,
    autoplay: false
};


class DailyWeatherDisplay extends Component {

    constructor(props){
        super(props);
    }

    
    render() {
        return (
            <div className="daily-weather-display">
                <div className="text-center h5 pt-2">Daily</div>                
                <div className="carousel">
                    <OwlCarousel ref={el => this.carousel = el} options={options}>
                        {
                            !!this.props.dailyForecasts && this.props.dailyForecasts.map((fc, i) => (
                                <DailyWeatherForecastCard forecast={fc} key={i} />
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


DailyWeatherDisplay.propTypes = {
    dailyForecasts: PropTypes.array.isRequired
};


export { DailyWeatherDisplay };