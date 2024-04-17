import React from "react";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import AppFooter from "./components/Layout/AppFooter";
import AppHeader from "./components/Layout/AppHeader.js";
import Home from "./components/Layout/Home";
import UserProfile from "./components/User/UserProfile";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Products from "./components/Product/Products";
import ProductDetails from "./components/Product/ProductDetails";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/productdetails" element={<ProductDetails />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/editproduct" element={<EditProduct />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
