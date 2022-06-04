import { useRef } from "react";
import { BsMap } from "react-icons/bs";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { Controls, FirstInner, Place } from "../styles/TopBar.styled";

const TopBar = ({
  cityName,
  setCity,
  loading,
  isSearching,
  setIsSearching,
  setQuery,
}) => {
  const ref = useRef(null);

  const handleInputFocus = () => {
    setIsSearching(!isSearching);
    setCity("");
    ref.current.focus();
  };

  const handleLocationTrack = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <FirstInner>
      <Place>
        <BsMap />

        <h3>{loading ? "loading" : cityName}</h3>
      </Place>
      <Controls>
        <button type="button" onClick={handleLocationTrack}>
          <FiMapPin />
        </button>

        <button type="button" onClick={handleInputFocus}>
          <FiSearch />
        </button>
      </Controls>
    </FirstInner>
  );
};

export default TopBar;
