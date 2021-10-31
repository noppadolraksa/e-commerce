import React from "react";
import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Agreement from "./pages/Agreement";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/agreement">
          <Agreement />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          <Signin />
        </Route>
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Signin />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
