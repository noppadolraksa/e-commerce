import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const FixNavBar = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
`;

const Homepage = (cat, filters, sort) => {
  return (
    <div style={{ marginTop: 100 }}>
      <FixNavBar>
        <Announcement />
        <Navbar />
      </FixNavBar>
      <Slider />
      <Categories />
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
