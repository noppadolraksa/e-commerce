import React, { useCallback } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; //keep aspect ratio by crop
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;

  cursor: pointer;
  a {
    color: gray;
    text-decoration: none;
  }
`;

const CategoryItem = ({ item }) => {
  const history = useHistory();
  const handleClick = useCallback(
    (e) => history.push(`/products/${e}`),
    [history]
  );

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => handleClick(item.categories)}>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
