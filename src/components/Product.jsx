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
`;

const Container = styled.div`
  margin: 5px;
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  ${mobile({ width: "42vw", height: "55vh" })}
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
  width: 80%;
  height: 60%;
  margin: 20px 20px 10px 20px;
  border: 1px solid #ddd;
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
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

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
      {item.priceBeforeDiscount && (
        <Text>
          Price : <del>{item.priceBeforeDiscount}</del> {` ${item.price}`} $
          <br />
        </Text>
      )}
      <Text>Total Sold : {item.sold}</Text>
      <Text>
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
            <SearchOutlined style={{ color: "none", textDecoration: "none" }} />
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
