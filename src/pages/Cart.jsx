import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

import { useSelector } from "react-redux";
import { mobile, tablet, notebook } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px; // got a ขอบกระดาษ
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const FooterButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
`;

const FooterTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const FooterText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Info = styled.div`
  flex: 3;
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
  flex: 2;
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
    padding: "0px",
  })}
`;

const ProductId = styled.span`
  flex: 1;
  font-size: 11px;
  margin-right: 10px;
  padding: 5px;
  ${mobile({ fontSize: "8px" })}
`;

const ProductPriceOneUnit = styled.span`
  flex: 1;
  font-size: 11px;
  margin-right: 10px;
  padding: 5px;
  ${mobile({ fontSize: "8px" })}
`;

const ProductSize = styled.span`
  flex: 0.5;
  font-size: 11px;
  margin-right: 5px;
  padding: 2px;
  ${mobile({ fontSize: "8px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  flex: 8;
  ${mobile({ flexDirection: "column", padding: "0px" })}
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

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 1em;
  font-weight: 300;
  ${mobile({ fontSize: "12px" })}
`;

const ProductAmount = styled.div`
  font-size: 1em;
  margin: 5px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5em"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Bottom>
          <Info>
            {console.log(cart)}
            {cart.products?.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Product ID:</b> {product._id}
                      {console.log(product.filters)}
                    </ProductId>
                    <ProductPriceOneUnit>
                      <b>Price :</b> {`$ ${product.price}`}
                    </ProductPriceOneUnit>
                    {Object.entries(product.filters).map(([key, value]) => (
                      <ProductSize>
                        <b>{`${key} :`}</b> {`${value}`}
                      </ProductSize>
                    ))}
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add style={{ fontSize: "10px" }} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove style={{ fontSize: "10px" }} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.quantity * product.price}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>

          {/* <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary> */}
        </Bottom>
      </Wrapper>
      <Footer>
        <FooterTexts>
          <FooterText>Shopping Bag(2)</FooterText>
          <FooterText>Your Wishlist (0)</FooterText>
        </FooterTexts>
        <FooterButton type="filled">CHECKOUT NOW</FooterButton>
      </Footer>
    </Container>
  );
};

export default Cart;
