import styled from "styled-components";
import { Row } from "../styles/GlobalStyles";

export const FirstInner = styled(Row)`
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const Place = styled.div`
  > svg {
    width: 1em;
    height: 1em;
  }

  > svg,
  h3 {
    vertical-align: middle;
    display: inline-block;
  }

  > h3 {
    font-size: 18px;
    margin-left: 5px;
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 1em;
  align-items: baseline;

  & button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    > svg {
      color: white;
    }
  }

  & button:nth-of-type(1) {
    > svg {
      width: 1.8em;
      height: 1.8em;
    }
  }

  & button:nth-of-type(2) {
    > svg {
      width: 2em;
      height: 2em;
    }
  }
`;
