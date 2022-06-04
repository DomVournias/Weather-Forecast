import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Forecast from "./components/Forecast";
import MainTemp from "./components/MainTemp";
import SearchModal from "./components/SearchModal";
import TopBar from "./components/TopBar";
import useBackgroundPicker from "./Hooks/backgroundPicker";
import { GlobalStyle } from "./styles/GlobalStyles";
import getFormattedWeatherData from "./WeatherService";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState({ q: "drama" });
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    if (weather === null || undefined) {
      setLoading(true);
    }
    setLoading(false);
  }, [weather]);

  const { name, temp, details, daily, hourly } = weather || {};

  return (
    <>
      <GlobalStyle />
      <Container bg={useBackgroundPicker(weather)}>
        <AnimatePresence>
          {isSearching && (
            <SearchModal
              city={city}
              setCity={setCity}
              setQuery={setQuery}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
            />
          )}
        </AnimatePresence>

        <Top>
          <TopBar
            cityName={name}
            setCity={setCity}
            loading={loading}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            setQuery={setQuery}
          />
          <MainTemp
            units={units}
            setUnits={setUnits}
            temp={temp}
            details={details}
          />
        </Top>
        <Forecast daily={daily} hourly={hourly} />
      </Container>
    </>
  );
}

export default App;

const Top = styled.div`
  padding: 1em;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background: ${(props) => `url(${props.bg})`};
  background-size: contain;
  color: white;
`;
