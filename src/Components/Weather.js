import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { GoLocation } from "react-icons/go";
import { MdSpeed } from "react-icons/md";
import { GrDirections } from "react-icons/gr";
import "./weather.css";
import { fetchWeather } from "./actions/action";
import { connect } from "react-redux";

const Weather = ({ weather_data, fetchWeatherData }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    let apiUrl =
      "http://api.weatherstack.com/current?access_key=11e42dade7af105e7cf39db8b3458b51&query=" +
      input;
    fetchWeatherData(apiUrl);
  };
  return (
    <>
      <div className="main_container">
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter the city name"
            required
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="search_button" onClick={handleClick}>
            <AiOutlineSearch />
          </button>
        </div>

        {weather_data ? (
          <div className="weather_part">
            <div className="first_section">
              <div className="weather_image">
                <img
                  src={weather_data.current.weather_icons[0]}
                  alt="Weather Icon"
                />
              </div>
              <div className="temp">
                <span className="temp_number">
                  {weather_data.current.temperature}
                </span>
                <span className="degree">°</span>
                <span className="celcius">C</span>

                <div className="weather_description">
                  {weather_data.current.weather_descriptions[0]}
                </div>
              </div>
            </div>
            <div className="second_section">
              <div className="location">
                <p className="location_para">Location:</p>
                <GoLocation />
                <span>
                  {weather_data.location.name}, {weather_data.location.country}
                </span>
              </div>
              <div className="weather_humidity">
                <p>
                  Humidity <WiHumidity /> :
                </p>
                <span>{weather_data.current.humidity}%</span>
              </div>
            </div>
            <div className="third_section">
              <div className="weather_wind">
                <div className="wind_speed">
                  wind speed: {weather_data.current.wind_speed}
                </div>
                <div className="wind_degree">
                  wind degree <MdSpeed />: {weather_data.current.wind_degree}
                </div>
                <div className="wind_dir">
                  Direction
                  <GrDirections className="dir_svg" />:
                  {weather_data.current.wind_dir}
                </div>
              </div>
              <div className="more_details">
                <p className="pressure details">
                  pressure: {weather_data.current.pressure}
                </p>
                <p className="precipitation details">
                  precipitation: {weather_data.current.precip}
                </p>
                <p className="precipitation details">
                  Cloud Cover: {weather_data.current.cloudcover} %
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
const mapStateToProps = (state, ownProps) => ({
  loading: state.weather.loading,
  weather_data: state.weather.weather_data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeatherData: (url) => dispatch(fetchWeather(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
