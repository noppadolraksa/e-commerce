import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {
  Add,
  Favorite,
  FavoriteBorderOutlined,
  FavoriteRounded,
  Remove,
} from "@mui/icons-material";
import React, { useState } from "react";
import { mobile, notebook, tablet } from "../responsive";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { addWishlist, removeWishlist } from "../redux/wishlistRedux";

const Container = styled.div`
  height: 100vh;
  ${mobile({ maxWidth: "350px" })}
  ${tablet({ maxWidth: "780px" })}
  ${notebook({ maxWidth: "960px" })}
`;

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
  ${tablet({ width: "350px", minWidth: "200px" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px, 50px;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  ${mobile({ fontSize: "1.25em" })}
  line-height: 1.5rem;
  height: 6rem;
  overflow: hidden;
  font-size: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 250;
  font-size: 12px;
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f2f2f2",
  opacity: "0.95",
  border: "1px solid #808080",
  boxShadow: 24,
  p: 4,
};

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

const Condition = styled.p`
  font-size: 0.64rem;
  font-weight: 300;
`;

const Amount = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightskyblue;
  font-weight: 500;
  text-align: center;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  color: gray;
`;

const likeStyle = { color: "#e44d4dcc", height: "17px" };

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

const Product = () => {
  const location = useLocation();
  const _id = location.pathname.split("/")[2];
  const [amount, setAmount] = useState(1);
  //setProduct to use data
  const [product, setProduct] = useState({});
  //to let react know where is acion(wrap action)
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const [item, setItem] = useState([]);
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const [like, setLike] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${_id}`);
        setProduct(res.data);
        setLike(
          res.data.userLikes?.find((id) => id === user?._id) === user?._id
        );
        const data = [];
        if (res.data.filterTitleTwo) {
          data.push(
            [res.data.filterTitleOne, res.data.product[0].filterProductsOne],
            [res.data.filterTitleTwo, res.data.product[0].filterProductsTwo]
          );
        } else {
          data.push([
            res.data.filterTitleOne,
            res.data.product[0].filterProductsOne,
          ]);
        }
        const obj = Object.fromEntries(data);
        setFilters(obj);
        // filter both
        // const { filters } = res.data;
        // const data = [];
        // filters.forEach((e) => {
        //   data.push([e.filterTitle, e.filterProducts[0]]);
        // });
        // const obj = Object.fromEntries(data);
        // setFilters(obj);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [_id, user?._id]);

  useEffect(() => {
    const res = product.product?.filter((item) =>
      !product.hasOwnProperty("filterTitleTwo")
        ? Object.values(filters).includes(item.filterProductsOne)
        : Object.values(filters).includes(item.filterProductsOne) &&
          Object.values(filters).includes(item.filterProductsTwo)
    );
    setItem(res);
  }, [filters, _id, product]);

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

  //update cart
  const handleCart = (e) => {
    user
      ? dispatch(
          addProduct({
            ...product,
            quantity: amount,
            filters,
            item,
          })
        )
      : handleOpen();
  };

  const handleLike = async () => {
    try {
      if (user) {
        if (like) {
          await userRequest.post(
            "http://localhost:8080/product/unlikeproduct",
            { _id: product._id, user_id: user._id }
          );
          dispatch(removeWishlist(product));
        } else {
          await userRequest.post("http://localhost:8080/product/likeproduct", {
            _id: product._id,
            user_id: user._id,
          });
          dispatch(addWishlist(product));
        }
        await setLike(!like);
      } else {
        handleOpen();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(product);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} alt="one product" />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Brand>{product.brand}</Brand>
          <Price>$ {item?.[0]?.price}</Price>
          <Desc>{product.desc}</Desc>
          <Likes>
            {"("}
            {like ? product?.userLikes?.length + 1 : product?.userLikes?.length}
            )
            <Icon onClick={handleLike}>
              {like && user ? (
                <FavoriteRounded style={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </Icon>
            {`(${product.sold}) ขายแล้ว`}
          </Likes>
          {product.condition === "used" && <Condition>สินค้ามือสอง</Condition>}
          <FilterContainer>
            <Filter>
              <FilterTitle>{product.filterTitleOne}</FilterTitle>
              <FilterSize onChange={handleFilter} name={product.filterTitleOne}>
                {product.product
                  ?.map((item) => item.filterProductsOne)
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .map((item, index) => (
                    <FilterSizeOption key={index}>{item}</FilterSizeOption>
                  ))}
              </FilterSize>
            </Filter>
            {product.filterTitleTwo && (
              <Filter>
                <FilterTitle>{product.filterTitleTwo}</FilterTitle>
                <FilterSize
                  onChange={handleFilter}
                  name={product.filterTitleTwo}
                >
                  {product.product
                    ?.map((item) => item.filterProductsTwo)
                    .filter((v, i, a) => a.indexOf(v) === i)
                    .map((item, index) => (
                      <FilterSizeOption key={index}>{item}</FilterSizeOption>
                    ))}
                </FilterSize>
              </Filter>
            )}
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
            <StyledButton onClick={handleCart}>ADD TO CART</StyledButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Oops! You are not able to do that!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              please <Link to="/login">login</Link> first or{" "}
              <Link to="/register">create an account</Link> to continue
              shopping..
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  );
};

export default Product;
