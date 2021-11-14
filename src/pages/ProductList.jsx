import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "90vw" })}
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.div`
  font-size: 1.25em;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  color: #616161;
  ${mobile({ margin: "10px 0px 0px 0px" })}
`;
const Option = styled.option``;

const Title = styled.p`
  margin: 20px 20px 0px 20px;
  font-weight: 500;
  padding: 10px;
  font-size: 20px;
  border: 0.25px solid black;
  background-color: #fafafa;
  width: 150px;
`;

const ClearFilter = styled.button`
  padding: 5px;
  border: none;
  color: #5c0000;
  margin-left: 10px;
  cursor: pointer;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest Arrival");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{`Category : ${cat}`}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="condition" onChange={handleFilter}>
            <Option disabled>condition</Option>
            <Option>new</Option>
            <Option>used</Option>
          </Select>
          <Select name="promotion" onChange={handleFilter}>
            <Option disabled>promotion</Option>
            <Option>ร้านค้าแนะนำ</Option>
            <Option>exclusive price</Option>
            <Option>only9.9$</Option>
            <Option>10%cashback</Option>
            <Option>9.9$free shipping</Option>
          </Select>
          {filters !== {} && (
            <ClearFilter onClick={() => setFilters({})}>Clear</ClearFilter>
          )}
        
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest Arrival</Option>
            <Option value="lowToHigh">Price:low to high</Option>
            <Option value="highToLow">Price:high to low</Option>
            <Option value="highestLikes">Highest Likes</Option>
            <Option value="highestSold">Highest sold</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
