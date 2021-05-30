import { GET_CURRENT_WEATHER_DATA, SET_LOADING } from "../actions/types";

const initialState = {
    loading: false,
    currentData: [],
    hourlyData: [],
    dailyData: [],
    location: [],
    dark: false,
    degreeType: 'celsius', // fahrenheit, kelvin
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        // eslint-disable-next-line no-undef
        case GET_CURRENT_WEATHER_DATA:
            return {
                ...state,
                currentData: action.payload.weather.current,
                hourlyData: action.payload.weather.hourly,
                dailyData: action.payload.weather.daily,
                location: action.payload.location,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default weatherReducer;
