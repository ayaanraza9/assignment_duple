import axios from "axios";
import { ACTION_TYPE } from "../constants";

export const fetchWeather = (url) => (dispatch) => {
  dispatch(fetchWeatherBegin());
  axios
    .get(url)
    .then((response) => {
      dispatch(fetchWeatherSuccess(response.data));
    })
    .catch((err) => {
      dispatch(fetchWeatherFailure(err.message));
    });
};

const fetchWeatherBegin = () => {
  return {
    type: ACTION_TYPE.FETCH_WEATHER_BEGIN,
  };
};

const fetchWeatherSuccess = (payload) => {
  return {
    type: ACTION_TYPE.FETCH_WEATHER_SUCCESS,
    payload,
  };
};

const fetchWeatherFailure = (payload) => {
  return {
    type: ACTION_TYPE.FETCH_WEATHER_FAILURE,
    payload,
  };
};
