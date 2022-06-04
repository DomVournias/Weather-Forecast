import styled from "styled-components";

const ForecastCard = (props) => {
  return (
    <Column>
      <Icon src={props.icon} />
      <Time>{props.title}</Time>
      <Degrees>
        <span>{props.degrees}</span>
        <span>°</span>
      </Degrees>
    </Column>
  );
};

export default ForecastCard;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 5em;
  height: 5em;
  filter: contrast(0.9);
`;

const Time = styled.div`
  font-size: 13px;
  opacity: 0.7;
  margin-top: -6px;
  margin-bottom: 3px;
`;

const Degrees = styled.div`
  > span {
    display: inline-block;
  }

  > span:nth-of-type(1) {
    font-size: 30px;
  }

  > span:nth-of-type(2) {
    font-size: 15px;
    vertical-align: top;
    margin-block-start: 3px;
  }
`;
