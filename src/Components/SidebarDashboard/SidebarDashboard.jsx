import React from "react";
import "./sidebarDashboard.css";
import { Link, Links } from "react-router-dom";
import { PiTagSimple } from "react-icons/pi";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { RiBloggerLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiSignOut } from "react-icons/pi";



const SidebarDashboard = () => {
  return (
    <div className="Sidebar_Dashboard">
      <div className="Sidebar_Dashboard_content">
        {/* البروفايل الصغير */}
        <div className="Sidebar_Dashboard_item">
          <div className="Sidebar_Dashboard_profile">
            <img src="/images/team1.webp" alt="صوره" className="profile_img" />
            <div className="profile_text">
              <h2>أهلاً</h2>
              <h3>أحمد عمر ماهر</h3>
            </div>
          </div>
          <Link to='/accountUser'><button className="profile_btn">عرض الملف الشخصي</button></Link>
        </div>

        <hr style={{marginTop: "10px", color: "#DBDBDB",}}/>

        {/* الروابط الرئيسية */}
        <div className="Sidebar_Dashboard_links">
          <ul className="Sidebar_Dashboard_link">
            <li><Link to="/offersUser"> <PiTagSimple />العروض</Link></li>
            <li><Link to="/messageUser"> <LuMessageCircleMore />الرسائل</Link></li>
            <li><Link to="/notifactionsUser"> <IoIosNotificationsOutline />الاشعارات</Link></li>
            <li><Link to="/dashboard/favorites"> <MdFavoriteBorder />المفضلة</Link></li>
          </ul>
        </div>

        <hr style={{marginTop: "10px", color: "#DBDBDB",}}/>

        {/* الروابط الثانوية */}
        <div className="Sidebar_Dashboard_links">
          <ul className="Sidebar_Dashboard_link">
            <li><Link to="/dashboard/settings"> <AiOutlineSetting />الإعدادات</Link></li>
            <li><Link to="/dashboard/blog"> <RiBloggerLine />المدونة</Link></li>
            <li><Link to="/dashboard/help"> <IoIosHelpCircleOutline />المساعدة</Link></li>
          </ul>
        </div>

        <hr style={{marginTop: "10px", color: "#DBDBDB",}}/>

        <button className="logout_btn"> <PiSignOut />تسجيل الخروج</button>
      </div>
    </div>
  );
};

export default SidebarDashboard;
