import React from 'react';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
      <Wrap bgImg={backgroundImg}>
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ButtonGroup>
          </Fade>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>
      </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size:cover;
  background-position: center;
  background-repeat:no-repeat;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  background-image: ${props => `url("/images/${props.bgImg}")`};
`

const ItemText = styled.div `
    padding-top:15vh;
    text-aligin:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px) {
      flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.85);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    text-transform:uppercase;
    font-size:12px;
    opacity:0.80;
    cursor:pointer;
    margin:5px;
`;

const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`;

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`
