import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home(props) {
    return (
      <Container>
        <Section
          title="Model S"
          description="order online for touchless deliver"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Order"
        />
        <Section
          title="Model Y"
          description="order online for touchless deliver"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Order"
        />
        <Section
          title="Model 3"
          description="order online for touchless deliver"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Order"
        />
        <Section
          title="Model x"
          description="order online for touchless deliver"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Order"
        />
        <Section
          title="Lowest cost Solor Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Solor for New Roofs"
          description="Solar Roof Costs Less Than a new Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
        />
      </Container>
    );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;