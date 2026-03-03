import React from "react";
import Footer from "../Components/Footer/Footer";
import "./layoutStyle.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function Layout() {
  return (
    <main className="main-layout">
      <Navbar/>
      <div className="main-content">
        <Outlet/>
      </div>
      <Footer />
    </main>
  );
};