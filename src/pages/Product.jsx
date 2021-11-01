import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import React, { Fragment, useState } from "react";
import { mobile } from "../responsive";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  min-width: 480px;
  ${mobile({ width: "350px", minWidth: "200px" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px, 50px;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-weight: 250;
  ${mobile({ fontSize: "1.25em" })}
  line-height: 1.5rem;
  height: 6rem;
  overflow: hidden;
  font-size: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 250;
`;

const Price = styled.p`
  font-weight: 300;
`;

const Brand = styled.p`
  font-weight: 200;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const FilterTitle = styled.span`
  font-size: 1.25em;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 32%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "97%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const StyledButton = styled.button`
  padding: 9px;
  border: 1.5px solid skyblue;
  border-radius: 10px;
  font-size: 0.64em;
  font-weight: 150;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Amount = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightskyblue;
  font-weight: 500;
  text-align: center;
`;

const Br = styled.br``;

const Underline = styled.span`
  text-decoration: line-through;
`;

const Product = () => {
  const location = useLocation();
  const _id = location.pathname.split("/")[2];
  const [amount, setAmount] = useState(1);
  //setProduct to use data
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${_id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [_id]);

  const handleClick = (e) => {
    if (e === "increment") {
      setAmount(amount + 1);
    } else {
      if (amount === 0) {
      } else {
        setAmount(amount - 1);
      }
    }
  };

  const handleInput = (e) => {
    if (isNaN(e.target.value)) {
      return;
    } else {
      setAmount(+e.target.value);
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Brand>{product.brand}</Brand>
          <Price>
            <Underline>$ {product.priceBeforeDiscount}</Underline>
            <Br />${product.price} ({" "}
            {((product.priceBeforeDiscount / product.price - 1) * 100).toFixed(
              0
            )}
            % off)
          </Price>
          <Desc>{product.desc}</Desc>
          <FilterContainer>
            <Filter>
              {product.filters?.map((e, id) => (
                <>
                  <FilterTitle key={id}>{e.filterTitle}</FilterTitle>
                  <FilterSize>
                    {e.filterProducts?.map((item, itemId) => (
                      <FilterSizeOption key={itemId}>{item}</FilterSizeOption>
                    ))}
                  </FilterSize>
                </>
              ))}
              {/* {product.filters?.map((e, id) => (
                <FilterTitle key={id}>{e.filterTitle}</FilterTitle>
              ))}
              {product.filters?.map((e) => (
                <FilterSize>
                  {e.filterProducts?.map((item, itemId) => (
                    <FilterSizeOption key={itemId}>{item}</FilterSizeOption>
                  ))}
                </FilterSize>
              ))} */}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("decrement")}
              />
              <Amount value={amount} onChange={(e) => handleInput(e)}></Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("increment")}
              />
            </AmountContainer>
            <StyledButton>ADD TO CART</StyledButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
