import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: 500;
  ${mobile({ width: "100vw" })}
`;

const Announcement = () => {
  return (
    <Container>
      11.11 Flash Sales! Free Shipping With Special Prices Today!
    </Container>
  );
};

export default Announcement;
