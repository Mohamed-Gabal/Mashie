
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import LayoutDashboard from "./LayoutDashboard/LayoutProfile";
import MainLayout from "./Layouts/MainLayout";

// Pages
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from './Pages/Auth/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import DetailsLayout from "./Pages/DetailsLayout/DetailsLayout";


// pages dashboard
import AccountUser from "./Pages/DashboardUser/AccountUser/AccountUser";
import OffersUser from "./Pages/DashboardUser/OffersUser/OffersUser";
import NotifactionsUser from "./Pages/DashboardUser/NotifactionsUser/NotifactionsUser";
import FavoritesUser from "./Pages/DashboardUser/FavoritesUser/FavoritesUser";
import SettingsUser from "./Pages/DashboardUser/SettingsUser/SettingsUser";
import BlogUser from "./Pages/DashboardUser/BlogUser/BlogUser";
import HelpUser from "./Pages/DashboardUser/HelpUser/HelpUser";


// import Advertisement from "./Pages/Advertisements/Advertisements";
import Advertisements from "./Pages/Advertisements/Advertisements";
import Category from "./Pages/SpecificCategory/SpecificCategory";

const App = () => {
  return (
    <Routes>
      {/* صفحات عامة داخل MainLayout */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/aboutUs" element={<MainLayout><AboutUs /></MainLayout>} />
      <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
      <Route path="/contactUs" element={<MainLayout><ContactUs /></MainLayout>} />
      <Route path="/:details/:id" element={<MainLayout><DetailsLayout /></MainLayout>} />
      <Route path="/:category" element={<MainLayout><Category /></MainLayout>} />
      

     {/* صفحات عامة داخل LayoutDashboard */}
     <Route path="/accountUser" element={<LayoutDashboard><AccountUser /></LayoutDashboard>} />
     <Route path="/offersUser" element={<LayoutDashboard><OffersUser /></LayoutDashboard>} />
     <Route path="/notifactionsUser" element={<LayoutDashboard><NotifactionsUser /></LayoutDashboard>} />
     <Route path="/favoritesUser" element={<LayoutDashboard><FavoritesUser /></LayoutDashboard>} />
     <Route path="/settingsUser" element={<LayoutDashboard><SettingsUser /></LayoutDashboard>} />
     <Route path="/blogUser" element={<LayoutDashboard><BlogUser /></LayoutDashboard>} />
      <Route path="/helpUser" element={<LayoutDashboard><HelpUser /></LayoutDashboard>} />
      
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

