import { ACTION_TYPE, initial_state } from "../constants";
export default function (state = initial_state, action) {
  switch (action.type) {
    case ACTION_TYPE.FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPE.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ACTION_TYPE.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather_data: action.payload,
      };

    default:
      return state;
  }
}
