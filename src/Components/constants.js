export const ACTION_TYPE = {
  FETCH_WEATHER_BEGIN: "FETCH_WEATHER_BEGIN",
  FETCH_WEATHER_SUCCESS: "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_FAILURE: "FETCH_WEATHER_FAILURE",
};

export const initial_state = {
  weather_data: null,
  loading: false,
  error: undefined,
};
