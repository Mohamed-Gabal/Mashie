import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiAlignJustify } from "react-icons/fi";
import { navLinks } from "../../Constants/NavLinks.js";

import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const userData = cookies?.token?.data?.user;
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
          {cookies?.token?.data?.token &&
          cookies?.token?.data?.token !== "undefined" ? (
            <div className="">
              <Link
                type="button"
                onClick={() => setToggleProfileCard(!toggleProfileCard)}
                className="profile_img"
              >
                {userData?.image === null ? (
                  <span className="two_char">
                    {userData?.name
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                ) : (
                  <img
                    src={userData.image}
                    alt={userData?.name
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                    className="user_img"
                  />
                )}
              </Link>

              <div
                className="profile-card"
                style={{ height: toggleProfileCard ? "280px" : "0" }}
              >
                <div className="user-info">
                  {userData?.image === null ? (
                    <span className="two_char">
                      {userData?.name
                        ?.split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  ) : (
                    <img
                      src={userData.image}
                      alt={userData?.name
                        ?.split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                      className="user_img"
                    />
                  )}
                  <div>
                    <p className="greeting">أهلا</p>
                    <p className="username">{userData?.name}</p>
                  </div>
                </div>
               <Link to="/accountUser" className="profile-btn"><button>عرض الملف الشخصي</button></Link>
                <div className="settings">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings-icon lucide-settings"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <span>إعدادات الحساب</span>
                </div>
                <button
                  className="logout-btn"
                  onClick={() => removeCookie("token")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out-icon lucide-log-out"
                  >
                    <path d="m16 17 5-5-5-5" />
                    <path d="M21 12H9" />
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  </svg>
                  <span>تسجيل الخروج</span>
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="mobile_loginBTN">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-in-icon lucide-log-in"
              >
                <path d="m10 17 5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              </svg>
            </NavLink>
          )}
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
          {cookies?.token?.data?.token &&
          cookies?.token?.data?.token !== "undefined" ? (
            <div className="">
              <Link
                type="button"
                onClick={() => setToggleProfileCard(!toggleProfileCard)}
                className="btn_profile"
              >
                <span>حسابي</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>

              <div
                className="profile-card"
                style={{ height: toggleProfileCard ? "300px" : "0" }}
              >
                <div className="user-info">
                  <img
                    src={userData.image}
                    alt={userData?.name
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                    className="user_img"
                  />
                  <div>
                    <p className="greeting">أهلا</p>
                    <p className="username">{userData?.name}</p>
                  </div>
                </div>
                <Link to="/accountUser" className="profile-btn">
                  عرض الملف الشخصي
                </Link>
                <div className="settings">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings-icon lucide-settings"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <Link to="/settingsUser">إعدادات الحساب</Link>
                </div>
                <button
                  className="logout-btn"
                  onClick={() => removeCookie("token")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out-icon lucide-log-out"
                  >
                    <path d="m16 17 5-5-5-5" />
                    <path d="M21 12H9" />
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  </svg>
                  <span>تسجيل الخروج</span>
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="btn-delete">
              <span>تسجيل الدخول</span>
            </NavLink>
          )}
          <NavLink to="/Advertisements" className="btn-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus-icon lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span>اضف عرضك</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
