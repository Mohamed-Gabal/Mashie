
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./LayoutDashboard/LayoutProfile";
import MainLayout from "./Layouts/MainLayout";

// Pages
import Home from "./Pages/Home/Home";
import FileServices from './Pages/FileServices/FileServices';
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from './Pages/Auth/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import DetailsLayout from "./Pages/DetailsLayout/DetailsLayout";

// categoriesData
import CategoriesData from "./Pages/CategoriesData/CategoriesData";


// import Advertisement from "./Pages/Advertisements/Advertisements";
import Advertisements from "./Pages/Advertisements/Advertisements";

const App = () => {
  return (
    <Routes>
      {/* صفحات عامة داخل MainLayout */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/fileServices" element={<MainLayout><FileServices /></MainLayout>} />
      <Route path="/aboutUs" element={<MainLayout><AboutUs /></MainLayout>} />
      <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
      <Route path="/contactUs" element={<MainLayout><ContactUs /></MainLayout>} />
      <Route path="/details/:id" element={<MainLayout><DetailsLayout /></MainLayout>} />
      <Route path="/category/:slug" element={<MainLayout><CategoriesData /></MainLayout>} />

      
       {/* صفحات أضف إعلانك  */}
      <Route path="/Advertisements" element={<Advertisements/>}/>

      {/* صفحات تسجيل الدخول والتسجيل */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
    </Routes>
  );
};
export default App;

