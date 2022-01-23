import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close";

function Header(props) {
    const [getBurgerStatus, setBurgerStatus] = useState(false);
    return (
      <Container>
        <img src="/images/logo.svg" />
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model Y</a>
          <a href="#">Model X</a>
          <a href="#">Model Z</a>
        </Menu>
        <RightMenu>
          <a href="#">shop</a>
          <a href="#">tesla account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerMenu show={getBurgerStatus}>
          <CloseWrapper>
            <CustomeClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
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
  min-height:60px;
  position:fixed;
  display: flex;
  align-items:center;
  justify-content:space-between;
  top:0;
  left:0;
  right:0;
  padding:0 20px;
  z-index:1;
`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`;
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  a {
    font-weight:600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }
  @media(max-width:768px) {
    display:none;
  }
`;
const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a {
    font-weight:600;
    text-transform:uppercase;
    margin-right: 10px;
    flex-wrap:nowrap;
  }
`;
const BurgerMenu = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  padding:20px;
  display:flex;
  flex-direction:column;
  list-style:none;
  width:300px;
  text-align:start;
  transform: ${props=> props.show ? 'translateY(0)' : 'translateY(100%)'};
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
`;
const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`