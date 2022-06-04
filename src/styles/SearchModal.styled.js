import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "./GlobalStyles";

export const InputOverlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  z-index: 10;
`;

export const CloseSearchBtn = styled.button`
  position: absolute;
  display: inherit;
  top: 0.5em;
  right: 0.5em;
  padding: 0.5em;
  background-color: none;
  border: none;
  background: none;
  color: white;
  cursor: pointer;

  > svg {
    width: 2.5em;
    height: 2.5em;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 50px;
  margin-top: -2em;
  /* width: 50%; */
  overflow: hidden;
  background-color: white;

  ${media.xs} {
    margin: 1.2em;
  }
`;

export const Input = styled(motion.input)`
  padding: 20px 0px 20px 30px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 3px;

  ${media.xs} {
    font-size: 16px;
    padding: 10px 0px 10px 25px;
  }

  :focus {
    border: none;
    outline: none;
  }

  ::placeholder {
    font-weight: 500;
    opacity: 0.5;
  }
`;

export const SearchButton = styled.button`
  padding: 1.2em;
  margin: 0.5em 0.8em;
  border-radius: 100%;
  border: none;
  width: fit-content;
  height: fit-content;
  display: inherit;
  cursor: pointer;
  opacity: 0.9;
  background-color: black;

  > svg {
    width: 1.5em;
    height: 1.5em;
    color: white;

    ${media.xs} {
      width: 1.3em;
      height: 1.3em;
    }
  }
`;
