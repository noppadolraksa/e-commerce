// @ts-nocheck
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh; // full screen
  display: flex;
  margin: auto;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px; //
  bottom: 0px; //
  margin: auto; // 3 values send arrow to center
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease; // to make flip animation
  transform: translateX(
    ${(props) => props.slideIndex * -100}vw
  ); // 1# to move Slide into x axis and pass props
`;

const Slide = styled.div`
  width: 100vw; //reduce image size "Parent"
  height: 100vh; //reduce image size "Parent"
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 80%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  padding: 10px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 0.9em;
  font-weight: 300;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1.25em;
  background-color: transparent;
  cursor: pointer;
  a {
    text-decoration: none;
    color: teal;
  }
`;

const Brand = styled.p`
  opacity: 0.6;
`;

const Price = styled.p`
  font-weight: 600;
`;

const Underline = styled.span`
  text-decoration: line-through;
`;

const Image = styled.img`
  height: 80%;
`;

const Br = styled.br``;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0); //flip the page
    }
  };
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowLeftOutlined />
      </Arrow>
      {/* 1# pass props */}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="slider img"></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Brand>{item.brand}</Brand>
              <Price>
                <Underline>{`฿ ${item.price.rawPrice}`}</Underline>
                <Br />
                {`฿ ${item.price.discountPrice}`} (
                {item.price.discountPercentPrice}% off)
              </Price>
              <Desc>{item.desc}</Desc>

              <Button>
                <Link to={`/products/${item.categories}`}>SHOP NOW</Link>
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
