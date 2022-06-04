import { useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { inputVariants, overlayVariants } from "../Animations/SearchMotions";
import useClickOutside from "../Hooks/clickOutside";
import {
  CloseSearchBtn,
  Input,
  InputContainer,
  InputOverlay,
  SearchButton,
} from "../styles/SearchModal.styled";

const SearchModal = ({
  city,
  setCity,
  setQuery,
  isSearching,
  setIsSearching,
}) => {
  const ref = useRef(null);
  useClickOutside(ref, () => setIsSearching(false));

  const handleSearchCity = (e) => {
    if (e.key === "Enter") {
      if (city !== "") {
        setQuery({ q: city });
        setIsSearching(false);
      }
    }
  };

  const handleButtonSearch = () => {
    setQuery({ q: city });
    setIsSearching(false);
  };

  return (
    <InputOverlay
      initial="enter"
      animate="animate"
      exit="exit"
      variants={overlayVariants}
      show={isSearching ? "flex" : "none"}
    >
      <CloseSearchBtn type="button" onClick={() => setIsSearching(false)}>
        <VscChromeClose />
      </CloseSearchBtn>

      <InputContainer>
        <Input
          initial="enter"
          animate="animate"
          exit="exit"
          variants={inputVariants}
          value={city}
          ref={ref}
          placeholder="Enter Location"
          onChange={(e) => setCity(e.target.value)}
          autoFocus
          type="text"
          onKeyPress={handleSearchCity}
        />
        <SearchButton type="button" onClick={handleButtonSearch}>
          <AiOutlineRight />
        </SearchButton>
      </InputContainer>
    </InputOverlay>
  );
};

export default SearchModal;
