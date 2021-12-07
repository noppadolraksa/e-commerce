import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { FavoriteOutlined } from "@mui/icons-material";

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 400;
  color: teal;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Info = styled.div`
  flex: 3;
  min-height: 500px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  flex: 8;
  ${mobile({ flex: "1" })}
`;

const ProductName = styled.span`
  flex: 1;
  font-size: 11px;
  height: 45px;
  line-height: 16px;
  overflow: hidden;
  margin-right: 10px;
  padding: 5px;
  ${mobile({
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "65vw",
    fontSize: "8px",
    padding: "5px",
  })}
`;

const ProductId = styled.span`
  flex: 1;
  font-size: 11px;
  height: 45px;
  line-height: 16px;
  overflow: hidden;
  margin-right: 10px;
  padding: 5px;
  ${mobile({ fontSize: "8px" })}
`;

const ProductPriceOneUnit = styled.span`
  flex: 1;
  font-size: 11px;
  height: 45px;
  line-height: 16px;
  overflow: hidden;
  margin-right: 10px;
  padding: 5px;
  ${mobile({ fontSize: "8px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  flex: 8;
  ${mobile({
    flexDirection: "column",
    padding: "0px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100px;
  flex: 1;
  ${mobile({ width: "50px" })}
`;

const WishList = () => {
  const wishlist = useSelector((state) => state?.wishlist);
  console.log(wishlist);
  return (
    <Container>
      <Navbar />
      <Header>
        <FavoriteOutlined style={{ color: "red" }} />
        <Title>Wish list</Title>
      </Header>
      <Wrapper>
        <Info>
          {wishlist.wishlist?.map((product) => (
            <Product key={product._id}>
              <ProductDetail>
                <Link to={`/product/${product._id}`}>
                  <Image src={product.img} alt="cart" />
                </Link>
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> {product._id}
                  </ProductId>
                  <ProductPriceOneUnit>
                    {`price : ${product.floorPrice} - ${product.ceilPrice} ฿`}
                  </ProductPriceOneUnit>
                </Details>
              </ProductDetail>
            </Product>
          ))}
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default WishList;
