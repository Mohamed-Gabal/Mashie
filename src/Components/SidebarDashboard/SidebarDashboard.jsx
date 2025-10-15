import React, { useState } from "react";
import "./sidebarDashboard.css";
import { NavLink, useNavigate } from "react-router-dom";
import { PiTagSimple, PiSignOut } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";

import {
  IoIosNotificationsOutline,
  IoIosHelpCircleOutline,
} from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { RiBloggerLine } from "react-icons/ri";
import { useCookies } from "react-cookie";

const SidebarDashboard = () => {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  // تحكم في الموديل قبل تسجيل الخروج
  const [showConfirm, setShowConfirm] = useState(false);

  // handle Errors
  const [error, setErrors] = useState();

  // handle Logout
  const handleLogout = async () => {
    try {
      const token = cookie?.token?.data?.token;

      // إرسال طلب logout للسيرفر
      const response = await fetch(
        "https://api.mashy.sand.alrmoz.com/api/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // حذف التوكن من الكوكيز
        removeCookie("token", { path: "/" });

        // توجيه المستخدم لصفحة تسجيل الدخول
        navigate("/");
      }
    } catch {
      setErrors("حدث خطأ أثناء تسجيل الخروج:");
    }
  };

  return (
    <div className="Sidebar_Dashboard">
      <div className="Sidebar_Dashboard_content">
        <div className="Sidebar_Dashboard_item">
          <div className="Sidebar_Dashboard_profile">
            <img src="/images/team1.webp" alt="صوره" className="profile_img" />
            <div className="profile_text">
              <h2>أهلاً</h2>
              <h3>أحمد عمر ماهر</h3>
            </div>
          </div>
          <NavLink to="/accountUser">
            <button className="profile_btn">عرض الملف الشخصي</button>
          </NavLink>
        </div>

        <hr style={{ marginTop: "10px", color: "#DBDBDB" }} />

        <div className="Sidebar_Dashboard_links">
          <ul className="Sidebar_Dashboard_link">
            <li>
              <NavLink to="/">  <IoHomeOutline />العوده الي الرئيسيه</NavLink>
            </li>
            <li>
              <NavLink
                to="/offersUser"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <PiTagSimple />
                العروض
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notifactionsUser"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <IoIosNotificationsOutline />
                الإشعارات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favoritesUser"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <MdFavoriteBorder />
                المفضلة
              </NavLink>
            </li>
          </ul>
        </div>

        <hr style={{ marginTop: "10px", color: "#DBDBDB" }} />

        <div className="Sidebar_Dashboard_links">
          <ul className="Sidebar_Dashboard_link">
            <li>
              <NavLink
                to="/settingsUser"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <AiOutlineSetting />
                الإعدادات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogUser"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <RiBloggerLine />
                المدونة
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/helpUser"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <IoIosHelpCircleOutline />
                المساعدة
              </NavLink>
            </li>
          </ul>
        </div>

        <hr style={{ marginTop: "10px", color: "#DBDBDB" }} />

        {/* زر تسجيل الخروج */}
        <button className="logout_btn" onClick={() => setShowConfirm(true)}>
          <PiSignOut />
          تسجيل الخروج
        </button>
      </div>
      {/* عند الضغط علي تسجيل الخروج */}
      {showConfirm && (
        <div className="confirm_overlay">
          <div className="confirm_box">
            <PiSignOut className="icon_confirm" />
            <h3 className="confirm_box_title">
              هل أنت متأكد أنك تريد تسجيل الخروج من حسابك؟
            </h3>
            <p className="confirm_box_par">
              يمكنك دائمًا تسجيل الدخول مرة أخرى لمتابعة نشاطك.
            </p>
            <div className="confirm_actions">
              <button
                className="cancel_btn"
                onClick={() => setShowConfirm(false)}
              >
                إلغاء
              </button>
              <button
                className="confirm_btn"
                onClick={() => {
                  setShowConfirm(false);
                  handleLogout();
                }}
              >
                تسجيل الخروج
              </button>
              {error && <p className="error_message">{error}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarDashboard;
