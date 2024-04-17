import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <>
      <Footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white bg-black mt-2">
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">SHOP GO TROLLY</li>
          <li>CHARGERS</li>
          <li>WIRE</li>
          <li>CABLES</li>
          <li>Accessories</li>
          <li>Parts</li>
          <li>Terms of Service</li>
          <li>Refund policy</li>
        </ul>
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">Check This Out</li>
          <li>Customer Pics</li>
          <li>REVIEWS</li>
          <li>Testimonials</li>
          <li>Partnerships</li>
          <li>About Us</li>
        </ul>
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">Customer Service</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Warranty</li>
          <li>Shipping</li>
          <li>Returns & Exchanges</li>
          <li>FAQ's</li>
        </ul>
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">Contact us</li>
          <li>CALL 000-987-433-668</li>
          <li>Email: GOTROLLY@GMAIL.com</li>
        </ul>
      </Footer>

      <Footer className="text-center py-1 text-white bg-black">
        <p>Ant Design ©{new Date().getFullYear()} Created by Ant UED</p>
      </Footer>
    </>
  );
};
export default AppFooter;
