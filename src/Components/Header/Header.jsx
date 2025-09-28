import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiAlignJustify } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { navLinks } from "../../Constants/NavLinks.js";

const Header = () => {
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
          <NavLink to="/login" className="btn-delete">
            <span>تسجيل الدخول</span>
          </NavLink>
          <NavLink to="/Advertisements" className="btn-add">
            <GoPlus /> <span>اضف عرضك</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;



