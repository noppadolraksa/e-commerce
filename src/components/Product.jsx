import React from "react";
import {
  Favorite,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2); //black and opacity=0.2
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 5px;
  flex-basis: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  position: relative;
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  &:hover ${Info} {
    opacity: 1;
  }
`;

const TextTitle = styled.p`
  line-height: 0.8rem;
  height: 1.6rem;
  overflow: hidden;
  font-size: 0.65rem;
  margin: 0px 20px;
`;

const Text = styled.p`
  margin: 0px 20px;
  font-weight: 300;
  font-size: 0.65rem;
  overflow: hidden;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  z-index: 2;
  width: 190px;
  height: 190px;
  margin: 20px 20px 10px 20px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease; // all function keep 0.5sec

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <TextTitle>{item.title}</TextTitle>
      <Text>
        Price : <del>{item.priceBeforeDiscount}</del> {` ${item.price}`} $<br />
        Total Sold : {item.sold}
        <Likes>
          {item.likes}
          <Favorite style={{ color: "#e44d4dcc", height: "17px" }} />
        </Likes>
      </Text>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
