import {
  Favorite,
  FavoriteBorderOutlined,
  FavoriteRounded,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { userRequest } from "../requestMethods";
import { useEffect, useState } from "react";

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
  height: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  position: relative;
  ${mobile({
    width: "297px",
    height: "318px",
    margin: "auto",
    marginBottom: "5px",
  })}
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
  width: 180px;
  height: 200px;
  margin: 20px 20px 10px 20px;
  border: 1px solid #ddd;
  ${mobile({
    width: "210px",
    height: "225px",
    margin: "auto",
    marginBottom: "5px",
  })}
`;

const Icon = styled.button`
  width: 40px;
  height: 40px;
  border: none;
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

const likeStyle = { color: "#e44d4dcc", height: "17px" };

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [like, setLike] = useState(
    item.userLikes.find((id) => id === user?._id) === user?._id
  );

  const handleClick = async (e) => {
    try {
      if (user) {
        await userRequest.post(
          like
            ? "http://localhost:8080/product/unlikeproduct"
            : "http://localhost:8080/product/likeproduct",
          { _id: e._id, user_id: user._id }
        );
        await setLike(!like);
      } else {
        window.location.replace("http://localhost:3000/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {}, [like, item]);

  return (
    <Container>
      <Image src={item.img} />
      <TextTitle>{item.title}</TextTitle>
      <Text>
        Price : {`${item.floorPrice} - ${item.ceilPrice} ฿`}
        <br />
      </Text>

      <Text>Total Sold : {item.sold}</Text>
      <Text>
        <Likes>
          {like ? item.userLikes.length + 1 : item.userLikes.length}
          <Favorite style={likeStyle} />
        </Likes>
      </Text>
      <Info>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined style={{ color: "none", textDecoration: "none" }} />
          </Link>
        </Icon>

        <Icon onClick={() => handleClick({ _id: item._id })}>
          {like && user ? (
            <FavoriteRounded style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
