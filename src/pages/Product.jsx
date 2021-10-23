import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px, 50px;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-weight: 250;
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
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0px 3px;
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
  font-size: 10px;
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
  const [amount, setAmount] = useState(1);

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
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>
            Andongnywell Women's Stretchy Ripped Hole Skinny Jeans Butt Lifting
            Distressed Denim Pants with Pockets Trousers
          </Title>
          <Brand>Generic</Brand>
          <Price>
            <Underline>$45.99</Underline>
            <Br />
            $38.99 ( 15% off)
          </Price>
          <Desc>
            trousers for women cycling trousers women womens thermal trousers
            kids waterproof trousers work trousers rain trousers women motorbike
            trousers women mens lined trousers mens grey trousers boys elasti ed
            school trousers workman trousers black trousers men work waterproof
            trousers for men kickboxing trousers ski trousers men trousers mens
            fleece trousers mens hiking trousers waterproof floor layers
            trousers fleece lined waterproof trousers children lined work
            trousers
          </Desc>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
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
