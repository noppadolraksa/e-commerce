import Product from "./Product";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ width: "90vw" })}
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //to give
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          Object.keys(cat).length
            ? `https://my-shop-ecommerces.herokuapp.com/product?category=${cat}`
            : "https://my-shop-ecommerces.herokuapp.com/product"
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    Object.keys(cat).length
      ? setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        )
      : setFilteredProducts(
          products
            .slice(0, 16)
            .filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
        );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "lowToHigh") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.floorPrice - b.floorPrice)
      );
    } else if (sort === "highToLow") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.floorPrice - a.floorPrice)
      );
    } else if (sort === "highestLikes") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.userLikes.length - a.userLikes.length)
      );
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.sold - a.sold));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 16)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
