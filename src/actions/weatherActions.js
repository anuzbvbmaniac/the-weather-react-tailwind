// Get Weather Data from Latitude and Longitude
import axios from "axios";
import { GET_CURRENT_WEATHER_DATA, SET_ALERT, SET_ERRORS, SET_LOADING, SET_METRIC } from "./types";
import { OPEN_WEATHER_API } from "../apiKeys";

const weatherURL = 'https://api.openweathermap.org/data/2.5/onecall';
// const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast';

const openWeatherApiKeys = OPEN_WEATHER_API;

export const getWeatherFromLatLong = () => {
    return async (dispatch) => {
        try {
            let options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            };

            const success = async (pos) => {
                let crd = pos.coords;

                const weather_response = await axios.get(`${weatherURL}?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=${openWeatherApiKeys}`);
                const weather_data = await weather_response.data;

                const location_response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${crd.latitude}&longitude=${crd.longitude}&localityLanguage=en`);
                const location_data = await location_response.data;
                dispatch({
                    type: GET_CURRENT_WEATHER_DATA,
                    payload: {
                        weather: weather_data,
                        location: location_data,
                    },
                });
            };

            const errors = (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            };

            if (navigator.geolocation) {
                navigator.permissions
                    .query({ name: "geolocation" })
                    .then(function (result) {
                        if (result.state === "granted") {
                            navigator.geolocation.getCurrentPosition(success);
                        } else if (result.state === "prompt") {
                            navigator.geolocation.getCurrentPosition(success, errors, options);
                        } else if (result.state === "denied") {
                            dispatch({
                                type: SET_ALERT,
                                payload: 'Please enable location service to enhance your browsing.'
                            });
                        }
                        result.onchange = function () {
                            console.log(result.state);
                        };
                    });
            } else {
                dispatch({
                    type: SET_ALERT,
                    payload: 'Geo Location Service not available.'
                });
            }
        } catch (err) {
            console.log(err.message);
            dispatch({
                type: SET_ERRORS,
                payload: err.response.statusText
            });
        }

    };
};

export const getHourlyData = () => {
    return async dispatch => {
        try {

        } catch (err) {
            console.log(err.message);
            dispatch({
                type: SET_ERRORS,
                payload: err.response.statusText
            });
        }
    };
};

export const setMetric = (metric) => {
    return async (dispatch) => {
        try {
            setLoading();

            dispatch({
                type: SET_METRIC,
                payload: metric,
            });
        } catch (err) {
            console.log(err.message);
            dispatch({
                type: SET_ERRORS,
                payload: err.response.statusText
            });
        }
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
