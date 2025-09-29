
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./LayoutDashboard/LayoutProfile";
import MainLayout from "./Layouts/MainLayout";

// Pages
import Home from "./Pages/Home/Home";
import Cars from "./Pages/Cars/Cars";
import Jobs from './Pages/Jobs/Jobs';
import Electronics from './Pages/Electronics/Electronics';
import Antiques from './Pages/Antiques/Antiques';
import Fashion from './Pages/Fashion/Fashion';
import FileServices from './Pages/FileServices/FileServices';
import Food from './Pages/Food/Food';
import Furniture from './Pages/Furniture/Furniture';
import Gardens from './Pages/Gardens/Gardens';
import Pets from './Pages/Pets/Pets';
import RealEstate from './Pages/RealEstate/RealEstate';
import Trips from './Pages/Trips/Trips';
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
      <Route path="/cars" element={<MainLayout><Cars /></MainLayout>} />
      <Route path="/jobs" element={<MainLayout><Jobs /></MainLayout>} />
      <Route path="/electronics" element={<MainLayout><Electronics /></MainLayout>} />
      <Route path="/antiques" element={<MainLayout><Antiques /></MainLayout>} />
      <Route path="/fashion" element={<MainLayout><Fashion /></MainLayout>} />
      <Route path="/fileServices" element={<MainLayout><FileServices /></MainLayout>} />
      <Route path="/food" element={<MainLayout><Food /></MainLayout>} />
      <Route path="/furniture" element={<MainLayout><Furniture /></MainLayout>} />
      <Route path="/gardens" element={<MainLayout><Gardens /></MainLayout>} />
      <Route path="/pets" element={<MainLayout><Pets /></MainLayout>} />
      <Route path="/realEstate" element={<MainLayout><RealEstate /></MainLayout>} />
      <Route path="/trips" element={<MainLayout><Trips /></MainLayout>} />
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

