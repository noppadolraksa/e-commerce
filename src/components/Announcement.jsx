import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Text = styled.p`
  font-size: 0.8em;
  color: white;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      <Text>11.11 Flash Sales! Free Shipping With Special Prices Today!</Text>
    </Container>
  );
};

export default Announcement;
