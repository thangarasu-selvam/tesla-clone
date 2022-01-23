import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header(props) {
  const [menuBurgerStatus, setMenuBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
    return (
      <Container>
        <img src="images/logo.svg" />
        <Menu>
          {cars &&
            cars.map((car, index) => (
              <a key={index} href="#">
                {car}
              </a>
            ))}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomeMenu onClick={() => setMenuBurgerStatus(true)} />
        </RightMenu>
        <BurgerMenu show={menuBurgerStatus}>
          <CLoseWrapper>
            <CustomeClose onClick={() => setMenuBurgerStatus(false)} />
          </CLoseWrapper>
          {cars &&
            cars.map((car, index) => (
              <li>
              <a key={index} href="#">
                {car}
              </a>
              </li>
            ))}
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
        </BurgerMenu>
      </Container>
    );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index:1;
`;

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a {
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }
    @media(max-width:768px) {
      display:none;
    }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomeMenu = styled(MenuIcon)`
  cursor:pointer;
`

const BurgerMenu = styled.div`
  position:fixed; 
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:10000;
  padding:20px;
  list-style:none;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in;
    li {
      padding:15px 0;
      border-bottom:1px solid rgba(0,0,0,.2);
    }
    a {
      font-weight:600;
    }

`;

const CustomeClose = styled(CloseIcon)`
    cursor:pointer;
`

const CLoseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`