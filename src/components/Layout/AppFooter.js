import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <>
      <Footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white bg-black mt-2 pb-20">
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">SHOP GO TROLLY</li>
          <li>CHARGERS</li>
          <li>WIRE</li>
          <li>CABLES</li>
          <li>ACCESSORIES</li>
          <li>PARTS</li>
          <li>TERMS OF SERVICE</li>
          <li>REFUND POLICY</li>
        </ul>
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">CHECK THIS OUT</li>
          <li>CUSTOMER PICS </li>
          <li>REVIEWS</li>
          <li>TESTIMONIALS</li>
          <li>PARTNERSHIPS</li>
          <li>ABOUT US</li>
        </ul>
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">CUSTOMER SERVICE</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>WARRANTY</li>
          <li>SHIPPING</li>
          <li>RETURNS & EXCHANGES</li>
          <li>FAQ's</li>
        </ul>
        <ul className="text-lg text-center font-semibold">
          <li className="text-2xl mb-2">CONTACT US</li>
          <li>CALL 000-987-433-668</li>
          <li>EMAIL: GOTROLLY@GMAIL.com</li>
        </ul>
      </Footer>

      <Footer className="text-center py-1  text-white bg-black">
        <p>Ant Design ©{new Date().getFullYear()} Created by Ant UED</p>
      </Footer>
    </>
  );
};
export default AppFooter;
