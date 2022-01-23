import React from 'react';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";

function Section({ title, description, leftButton, rightButton, backgroundImg}) {
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
          <ButtonsGroup>
            <LeftButton>{leftButton}</LeftButton>
            <RightButton>{rightButton}</RightButton>
          </ButtonsGroup>
          </Fade>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>
      </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props=> `url("/images/${props.bgImg}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const ItemText = styled.div`
    margin-top:15vh;
    text-align:center;
`
const ButtonsGroup = styled.div`
    display:flex;
    margin-bottom:30px;
`;
const LeftButton = styled.div`
    background-color: rgba(23,20,31,0.85);
    height:40px;
    width:256px;
    margin:5px;
    border-radius:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:12px;
    text-transform:uppercase;
    opacity:0.8;
    cursor:pointer;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.7;
`;
const DownArrow = styled.img`
    height:40px;
    margin-top:30px;
    animation:animateDown infinite 1.5s;
`;
const Buttons = styled.div``;