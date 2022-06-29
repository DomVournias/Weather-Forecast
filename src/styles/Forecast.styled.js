import styled from "styled-components";
import { device, media, StyledButton } from "./GlobalStyles";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3em;
  font-weight: 600;
`;

export const Hourly = styled(StyledButton)`
  opacity: ${(props) => props.hourly};
`;
export const Daily = styled(StyledButton)`
  opacity: ${(props) => props.daily};
`;

export const Bottom = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;
  padding: 1em 1em;
  background-color: white;
  color: black;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  ${media.xs} {
    padding: 1em 0em 0em 0em;
  }

  @media ${device.mobileM} {
    max-width: 640px;
  }

  @media ${device.laptopL} {
    max-width: 640px;
  }
`;
