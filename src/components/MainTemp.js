import styled from "styled-components";
import { Row } from "../styles/GlobalStyles";

const MainTemp = ({ units, setUnits, temp, details }) => {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <SecondInner>
      <Units>
        <Metric
          name="metric"
          type="button"
          onClick={handleUnitsChange}
          op={units === "metric" ? "1" : "0.7"}
        >
          <span>°C</span>
        </Metric>

        <span>|</span>

        <Imperial
          name="imperial"
          type="button"
          onClick={handleUnitsChange}
          op={units === "imperial" ? "1" : "0.7"}
        >
          <span>°F</span>
        </Imperial>
      </Units>
      <Degrees>
        <span>{temp?.toFixed()}</span>
        <span>°</span>
      </Degrees>

      <Mood>
        <h4>{details}</h4>
      </Mood>
    </SecondInner>
  );
};

export default MainTemp;

const SecondInner = styled(Row)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Degrees = styled.div`
  > span {
    display: inline-block;
  }

  > span:nth-of-type(1) {
    font-size: 120px;
  }

  > span:nth-of-type(2) {
    font-size: 50px;
    vertical-align: top;
    top: 30px;
    margin-block-start: 10px;
    margin-inline-end: 10px;
  }
`;

const Mood = styled.div`
  align-self: center;

  & svg {
    width: 1.3em;
    height: 1.3em;
    margin-bottom: 4px;
  }

  > svg,
  h4 {
    vertical-align: middle;
    display: inline-block;
  }

  > h4 {
    font-size: 23px;

    /* white-space: nowrap;
    writing-mode: vertical-lr;
    transform: rotate(180deg); */
  }
`;

const Units = styled.div`
  display: flex;
  gap: 0.5em;

  & button {
    border: none;
    background: none;
    padding: 0em 1em;
    margin: 0;
    cursor: pointer;
    color: white;

    :focus {
      border: none;
      outline: none;
    }
  }
`;
const Metric = styled.button`
  opacity: ${(props) => props.op};
`;
const Imperial = styled.button`
  opacity: ${(props) => props.op};
`;
