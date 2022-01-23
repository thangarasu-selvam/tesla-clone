import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home(props) {
    return (
      <Container>
        <Section
          title="Model S"
          description="Order Online"
          leftButton="Custom Order"
          rightButton="Inventory Order"
          backgroundImg="model-s.jpg"
        />
        <Section
          title="Model S"
          description="Order Online"
          leftButton="Custom Order"
          rightButton="Inventory Order"
          backgroundImg="model-s.jpg"
        />
        <Section
          title="Model S"
          description="Order Online"
          leftButton="Custom Order"
          rightButton="Inventory Order"
          backgroundImg="model-s.jpg"
        />
      </Container>
    );
}

export default Home;

const Container = styled.div`
height: 100vh;
`