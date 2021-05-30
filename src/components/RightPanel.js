import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const RightPanel = ({ weather }) => {

    const morning_temp_celsius = Math.round(weather.hourlyData[8].temp);
    const morning_temp_fahrenheit = Math.round(morning_temp_celsius * 9 / 5) + 32;

    const morning_temp = weather.degreeType === 'celsius' ? morning_temp_celsius + 'º' : morning_temp_fahrenheit + 'º';

    const afternoon_temp_celsius = Math.round(weather.hourlyData[14].temp);
    const afternoon_temp_fahrenheit = Math.round(afternoon_temp_celsius * 9 / 5) + 32;

    const afternoon_temp = weather.degreeType === 'celsius' ? afternoon_temp_celsius + 'º' : afternoon_temp_fahrenheit + 'º';

    const evening_temp_celsius = Math.round(weather.hourlyData[18].temp);
    const evening_temp_fahrenheit = Math.round(evening_temp_celsius * 9 / 5) + 32;

    const evening_temp = weather.degreeType === 'celsius' ? evening_temp_celsius + 'º' : evening_temp_fahrenheit + 'º';

    const night_temp_celsius = Math.round(weather.hourlyData[22].temp);
    const night_temp_fahrenheit = Math.round(night_temp_celsius * 9 / 5) + 32;

    const night_temp = weather.degreeType === 'celsius' ? night_temp_celsius + 'º' : night_temp_fahrenheit + 'º';


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative pl-36">
                {/*<img src={`${process.env.PUBLIC_URL}/assets/img/icons/${weather.currentData.weather[0].icon}.png`} alt="" className="w-3/4 absolute filter blur-md top-0"/>*/}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/img/icons/${weather.currentData.weather[0].icon}.png`}
                    alt={`${weather.currentData.weather[0].main}`}
                    title={`${weather.currentData.weather[0].main}`}
                    className="w-3/4 relative"
                />
            </div>

            {/*  Today's Forecast  */}
            <div className="rounded-lg overflow-hidden w-full pl-12">
                <h2 className="sr-only" id="profile-overview-title">
                    Extra Information
                </h2>
                <div className="px-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-md font-semibold text-gray-600">Today’s Forecast for Kathmandu, Nepal</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">

                        <div className="pt-2">
                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-600">Morning</p>
                                <p className="text-xs font-medium text-gray-400">8:00 am</p>
                                <p className="mt-2 text-5xl font-semibold text-gray-600">{morning_temp}</p>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/icons/${weather.hourlyData[8].weather[0].icon}.png`}
                                    alt={`${weather.hourlyData[8].weather[0].description}`}
                                    title={`${weather.hourlyData[8].weather[0].description}`}
                                    className="w-3/5"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-600">Afternoon</p>
                                <p className="text-xs font-medium text-gray-400">2:00 pm</p>
                                <p className="mt-2 text-5xl font-semibold text-gray-600">{afternoon_temp}</p>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/icons/${weather.hourlyData[14].weather[0].icon}.png`}
                                    alt={`${weather.hourlyData[14].weather[0].description}`}
                                    title={`${weather.hourlyData[14].weather[0].description}`}
                                    className="w-3/5"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-600">Evening</p>
                                <p className="text-xs font-medium text-gray-400">6:00 pm</p>
                                <p className="mt-2 text-5xl font-semibold text-gray-600">{evening_temp}</p>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/icons/${weather.hourlyData[18].weather[0].icon}.png`}
                                    alt={`${weather.hourlyData[18].weather[0].description}`}
                                    title={`${weather.hourlyData[18].weather[0].description}`}
                                    className="w-3/5"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-600">Night</p>
                                <p className="text-xs font-medium text-gray-400">10:00 pm</p>
                                <p className="mt-2 text-5xl font-semibold text-gray-600">{night_temp}</p>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/icons/${weather.hourlyData[22].weather[0].icon}.png`}
                                    alt={`${weather.hourlyData[22].weather[0].description}`}
                                    title={`${weather.hourlyData[22].weather[0].description}`}
                                    className="w-3/5"
                                />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

RightPanel.propTypes = {
    weather: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    weather: state.weather,
});

export default connect(
    mapStateToProps,
    {}
)(RightPanel);
