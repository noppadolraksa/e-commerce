import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.h3`
  text-decoration: bold;
  font-size: 30px;
`;

const Maintenance = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Coming soon..</Text>
      </Wrapper>
    </Container>
  );
};

export default Maintenance;
