import React from "react";
import "./sidebarDashboard.css";
import { NavLink, useNavigate } from "react-router-dom";
import { PiTagSimple, PiSignOut } from "react-icons/pi";
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

  // handle Logout
  const handleLogout = async () => {
    try {
      const token = cookie?.token?.data?.token;
      console.log("Token being sent:", token);

      // تأكد أن التوكن موجود
      if (!token) {
        console.log("المستخدم غير مسجل الدخول");
        navigate("/login");
        return;
      }

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
        removeCookie("token");

        // توجيه المستخدم لصفحة تسجيل الدخول
        navigate("/");
      }
    } catch (error) {
      console.error("حدث خطأ أثناء تسجيل الخروج:", error);
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
        <button className="logout_btn" onClick={handleLogout}>
          <PiSignOut />
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default SidebarDashboard;
