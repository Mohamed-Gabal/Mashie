import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiAlignJustify } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { navLinks } from "../../Constants/NavLinks.js";

import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const userData = cookies?.token?.data?.user
  console.log(cookies?.token?.data?.user);

  const [toggleProfileCard, setToggleProfileCard] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => setMenuOpen(false);



  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src="/images/logo.svg" alt="logo" />
          </NavLink>
        </div>
        <div className="mobile-search">
          <input type="search" placeholder="ابحث هنا..." />
        </div>
        <div className="mobile-login">
          <NavLink to="/login" onClick={closeMenu}>
            <CiUser className="icons" />
          </NavLink>
        </div>
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FiAlignJustify />
        </div>
        <ul className={`nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                onClick={closeMenu}
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="header-button">
          {cookies?.token?.data?.token && cookies?.token?.data?.token !== "undefined" ?
            (<div className="">
              <button type="button" onClick={() => setToggleProfileCard(!toggleProfileCard)} className="btn_profile">
                <span>حسابي</span>
                <img src="./Icons/CaretDownWhite.svg" alt="CaretDownWhite" />
              </button>

              <div className="profile-card" style={{ display: toggleProfileCard ? "block" : "none" }}>
                <div className="user-info">
                  <img src="profile.jpg" alt="User Image" className="user-img" />
                  <div>
                    <p className="greeting">أهلا</p>
                    <p className="username">{userData?.name}</p>
                  </div>
                </div>
                <button className="profile-btn">عرض الملف الشخصي</button>
                <div className="settings">
                  <img src="./Icons/sitting.svg" alt="SignOut" className="gear" />
                  <span>إعدادات الحساب</span>
                </div>
                <button className="logout-btn" onClick={() => removeCookie("token")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
                  <span>تسجيل الخروج</span>
                </button>
              </div>
            </div>)
            :
            <NavLink to="/login" className="btn-delete">
              <span>تسجيل الدخول</span>
            </NavLink>
          }
          <NavLink to="/Advertisements" className="btn-add">
            <GoPlus /> <span>اضف عرضك</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;



