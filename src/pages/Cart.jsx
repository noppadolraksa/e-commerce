import { Add, DeleteOutline, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { mobile } from "../responsive";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteProduct } from "../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  padding: 20px; // got a ขอบกระดาษ
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  height: 110px;
  width: 100%;
  border-top: 1px solid gray;
`;

const FooterButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
  margin-right: 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize: "12px" })}
`;

const ProductAmount = styled.div`
  font-size: 1em;
  margin: 5px;
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

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/stripe/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch (err) {
        console.error(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history, cart]);

  const handleClick = (e) => {
    if (e.name === "inc") {
      dispatch(changeQuantity({ ...e }));
    } else {
      if (e.quantity !== 0) {
        dispatch(changeQuantity({ ...e }));
      }
    }
  };

  const handleDelete = (e) => {
    dispatch(deleteProduct({ ...e }));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Bottom>
          <Info>
            {cart.products?.map((product) => (
              <Product key={product.item._id}>
                <ProductDetail>
                  <Link to={`/product/${product._id}`}>
                    <Image src={product.img} />
                  </Link>
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID :</b> {product.item[0]._id}
                    </ProductId>
                    <ProductPriceOneUnit>
                      <b>Price : </b>$ {product.item[0].price}
                    </ProductPriceOneUnit>
                    {Object.entries(product.filters).map(
                      ([key, value], index) => (
                        <ProductSize key={index}>
                          <b>{`${key} :`}</b> {`${value}`}
                        </ProductSize>
                      )
                    )}
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      onClick={() =>
                        handleClick({
                          name: "dec",
                          value: product.item[0],
                          quantity: product.quantity,
                        })
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add
                      onClick={() =>
                        handleClick({
                          name: "inc",
                          value: product.item[0],
                          quantity: product.quantity,
                        })
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </ProductAmountContainer>

                  <ProductPrice>
                    $ {product.quantity * product.item[0].price}
                    {product.quantity === 0 && (
                      <DeleteOutline
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() =>
                          handleDelete({
                            value: product.item[0],
                          })
                        }
                      />
                    )}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
      <Footer>
        <FooterWrapper>
          <FooterTexts>
            <a href="#top">
              <FooterText>Shopping Bag({cart.quantity})</FooterText>
            </a>
          </FooterTexts>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>{`$  ${cart.total}`}</SummaryItemPrice>
          </SummaryItem>
          <StripeCheckout
            name="My-Shop"
            image="https://image1.jdomni.in/storeLogo/02122020/E2/D3/AD/80828A41663079A080691C50EE_1606915864349.png?output-format=webp"
            billingAddress
            shippingAddress
            description={`your total is $ ${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <FooterButton>CHECKOUT NOW</FooterButton>
          </StripeCheckout>
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default Cart;
