import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { navLinks } from "../../Constants/NavLinks.js";
import { useCookies } from "react-cookie";

const Header = () => {
  // بنستخدم useCookies عشان نقدر نقرأ ونمسح الكوكيز (زي التوكن)
  const [cookies, removeCookie] = useCookies(["token"]);

  // بنجيب بيانات المستخدم من التوكن اللي في الكوكيز
  const userData = cookies?.token?.data?.user;

  // حالة لإظهار أو إخفاء كارت البروفايل لما نضغط على الصورة
  const [toggleProfileCard, setToggleProfileCard] = useState(false);

  // حالة فتح أو غلق المينيو في الموبايل
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false); // دالة لغلق المينيو بسهولة

  // مراجع (refs) لعناصر معينة في الـ DOM عشان نتحكم فيها
  const menuRef = useRef(null);      // تمثل قائمة الروابط (ul)
  const toggleRef = useRef(null);    // تمثل زر فتح المينيو
  const profileRef = useRef(null);   // تمثل صورة أو زر البروفايل

    const inputRef = useRef(null);   // الضغط علي البحث يوجهك لل input

    const handleFocus = () => {
      inputRef.current.focus();
    }

  // 🧠 useEffect الأول: يقفل المينيو أو كارت البروفايل لما نضغط على زر Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setToggleProfileCard(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(profileRef.current && !profileRef.current.contains(e.target)) {
        setToggleProfileCard(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🧠 useEffect الثاني: يقفل المينيو لما نضغط براها
  useEffect(() => {
    if (!menuOpen) return; // لو المينيو مش مفتوحة، متسمعش للحدث

    const handleClickOutside = (e) => {
      const target = e.target;

      // لو النقرة داخل المينيو نفسها، متقفلهاش
      if (menuRef.current && menuRef.current.contains(target)) {
        return;
      }

      // لو النقرة كانت على زر الفتح، متقفلهاش برضو
      if (toggleRef.current && toggleRef.current.contains(target)) {
        return;
      }

      // لو النقرة داخل البروفايل أو كارت الحساب، متقفلهاش
      if (profileRef.current && profileRef.current.contains(target)) {
        return;
      }

      // لو الضغط في أي مكان تاني -> اقفل المينيو
      setMenuOpen(false);
    };

    // بنضيف مستمع للضغط على أي مكان في الصفحة
    document.addEventListener("mousedown", handleClickOutside);

    // بنشيله لما الكومبوننت يتفكك أو المينيو تتقفل
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">

        {/* اللوجو */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src="/images/logo.svg" alt="logo" />
          </NavLink>
        </div>

        {/* مربع البحث في الموبايل */}
        <div className="mobile-search">
          <CiSearch className="search_icon" onClick={handleFocus}/>
          <input type="search" placeholder="ابحث هنا..." ref={inputRef}/>
        </div>

        {/* الجزء الخاص بالموبايل (زر المينيو + صورة البروفايل أو تسجيل الدخول) */}
        <div className="menu-mobile-toggle">

          {/* لو المستخدم مسجل دخول */}
          <div className="mobile-login">
            {cookies?.token?.data?.token &&
            cookies?.token?.data?.token !== "undefined" ? (
              <div>
                {/* صورة أو أول حرفين من الاسم */}
                <Link
                  type="button"
                  onClick={() => setToggleProfileCard(!toggleProfileCard)}
                  className="header_profile_img"
                  ref={profileRef}
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
                      alt={userData?.name}
                      className="user_img"
                    />
                  )}
                </Link>

                {/* كارت البروفايل */}
                <ProfileCard
                  toggleProfileCard={toggleProfileCard}
                  userData={userData}
                  removeCookie={removeCookie}
                />
              </div>
            ) : (
              // لو المستخدم مش داخل -> زر تسجيل الدخول
              <NavLink to="/login" className="mobile_loginBTN">
                {/* أيقونة تسجيل الدخول */}
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
                  className="lucide lucide-log-in"
                >
                  <path d="m10 17 5-5-5-5" />
                  <path d="M15 12H3" />
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                </svg>
              </NavLink>
            )}
          </div>

          {/* زر فتح وغلق المينيو (الهامبرجر) */}
          <div
            ref={toggleRef}
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)} // قلب الحالة
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {/* أيقونة الهامبرجر */}
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
              className="lucide lucide-text-align-justify"
            >
              <path d="M3 5h18" />
              <path d="M3 12h18" />
              <path d="M3 19h18" />
            </svg>
          </div>
        </div>

        {/* قائمة الروابط الرئيسية */}
        <ul
          id="primary-navigation"
          ref={menuRef}
          className={`nav ${menuOpen ? "open" : ""}`}
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink to={link.path} onClick={closeMenu} end={link.path === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* أزرار الهيدر في الديسكتوب */}
        <div className="header-button">
          {cookies?.token?.data?.token &&
          cookies?.token?.data?.token !== "undefined" ? (
            <div>
              {/* زر البروفايل في الديسكتوب */}
              <Link
                type="button"
                onClick={() => setToggleProfileCard(!toggleProfileCard)}
                ref={profileRef}
                className="btn_profile"
              >
                <span>حسابي</span>
                {/* سهم للأسفل */}
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
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>

              {/* كارت البروفايل */}
              <ProfileCard
                toggleProfileCard={toggleProfileCard}
                userData={userData}
                removeCookie={removeCookie}
              />
            </div>
          ) : (
            // زر تسجيل الدخول لو مش داخل
            <NavLink to="/login" className="btn-delete">
              <span>تسجيل الدخول</span>
            </NavLink>
          )}

          {/* زر إضافة إعلان جديد */}
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
              className="lucide lucide-plus"
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

export function ProfileCard({ toggleProfileCard, userData, removeCookie }) {
  return (
    <div className="profile-card" style={{ height: toggleProfileCard ? "300px" : "0" }}>
      <div className="user-info">
        {userData?.image === null ? (
          <span className="two_char">{userData?.name?.split(" ").map((word) => word[0]).join("").toUpperCase()}</span>
        ) : (
          <img src={userData.image} alt={userData?.name?.split(" ").map((word) => word[0]).join("").toUpperCase()} className="user_img"/>
        )}
        <div>
          <p className="greeting">أهلا</p>
          <p className="username">{userData?.name}</p>
        </div>
      </div>
      <Link to="/accountUser" className="show_accountUser"><span>عرض الملف الشخصي</span></Link>
      <div className="settings">
        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings">
          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        <span>إعدادات الحساب</span>
      </div>
      <button
        className="logout-btn"
        onClick={() => removeCookie("token")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out">
          <path d="m16 17 5-5-5-5" /> <path d="M21 12H9" /> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        </svg>
        <span>تسجيل الخروج</span>
      </button>
    </div>
  )
};