import styled from "styled-components";
import { media, StyledButton } from "./GlobalStyles";

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
  text-align: center;
  padding: 1em 1em;
  background-color: white;
  color: black;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  ${media.xs} {
    padding: 1em 0em 0em 0em;
  }
`;
