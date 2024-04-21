import React from "react";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import AppFooter from "./components/Layout/AppFooter";
import AppHeader from "./components/Layout/AppHeader.js";
import Home from "./components/Layout/Home";
import UserProfile from "./components/User/UserProfile";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import ProductDetails from "./components/Product/ProductDetails";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import Search from "./components/Search.js";

import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages 
import FlashSales from "./Pages/FlashSales.js";
import NewArrivals from "./Pages/NewArrivals.js";
import Products from "./Pages/Products.js";
import TopSelling from "./Pages/TopSelling.js";
import Audio from "./Pages/Audio.js";
import SmartPhones from "./Pages/SmartPhones.js";
import ChargingPower from "./Pages/CharingPower.js";


// Added Shoelace ui 
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/productdetails" element={<ProductDetails />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/editproduct" element={<EditProduct />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Pages  */}
        <Route path="/flashsales" element={<FlashSales />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/products" element={<Products />} />
        <Route path="/topselling" element={<TopSelling />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/smartphones" element={<SmartPhones />} />
        <Route path="/chargingphones" element={<ChargingPower />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
