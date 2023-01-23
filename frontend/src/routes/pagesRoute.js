import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import ShopPage from "../pages/shopPage";
import { AdminPage } from "../pages/adminPage";
import { SearchPage } from "../pages/searchPage/searchPage";
import { ProductDetailsPage } from "../pages/productDetails";
import { CheckoutPage } from "../pages/checkoutPage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { EnterNewPassword } from "../pages/enterNewPasswordPage";
import { ProfilePage } from "../pages/profilePage/index";
import { AccountInformation } from "../pages/profilePage/accountInformation";
import { Adresses } from "../pages/profilePage/Adresses";
import { AccountSettings } from "../pages/profilePage/AccountSettings";
import { Orders } from "../pages/profilePage/Orders";
import { Navigate } from "react-router-dom";

const PagesRoute = ({ setIsCartSectionActive }) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage {...{ setIsCartSectionActive }} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/changeMyPassword" element={<EnterNewPassword />} />
      <Route path="profilePage" element={<ProfilePage />}>
        <Route index element={<Navigate to="accountInformation" />} />
        <Route path="accountInformation" element={<AccountInformation />} />
        <Route path="address" element={<Adresses />} />
        <Route path="myOrders" element={<Orders />} />
        <Route path="accountSettings" element={<AccountSettings />} />
      </Route>
      <Route path="*" element={<h2>path doesnt exist</h2>} />
    </Routes>
  );
};

export default PagesRoute;
