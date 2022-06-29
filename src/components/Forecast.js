import React, { useState } from "react";
import { Bottom, Daily, Hourly, Title } from "../styles/Forecast.styled";
import { Row } from "../styles/GlobalStyles";
import { iconUrlFromCode } from "../WeatherService";
import ForecastCard from "./ForecastCard";

const Forecast = ({ daily, hourly }) => {
  const [forecastType, setForecastType] = useState("hourly");
  return (
    <Bottom>
      <Title>
        <Hourly
          hourly={forecastType === "hourly" ? "1" : "0.3"}
          type="button"
          onClick={() => setForecastType("hourly")}
        >
          Hourly Forecast
        </Hourly>
        <Daily
          daily={forecastType === "daily" ? "1" : "0.3"}
          type="button"
          onClick={() => setForecastType("daily")}
        >
          Daily Forecast
        </Daily>
      </Title>

      <Row p="1em 0em 0em 0em" j="space-evenly">
        {forecastType === "hourly" ? (
          <>
            {hourly?.map((hour, index) => (
              <ForecastCard
                key={index}
                title={hour.title}
                icon={iconUrlFromCode(hour.icon)}
                degrees={hour.temp.toFixed()}
              />
            ))}
          </>
        ) : (
          <>
            {daily?.map((day, index) => (
              <ForecastCard
                key={index}
                title={day.title}
                icon={iconUrlFromCode(day.icon)}
                degrees={day.temp.toFixed()}
              />
            ))}
          </>
        )}
      </Row>
    </Bottom>
  );
};

export default Forecast;
