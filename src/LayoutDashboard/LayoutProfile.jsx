import React from "react";
import "./layoutProfile.css";
import HeaderDashboard from "../Components/HeaderDashboard/HeaderDashboard";
import SidebarDashboard from "../Components/SidebarDashboard/SidebarDashboard";
import { useLocation } from "react-router-dom";

const LayoutProfile = ({ children }) => {
  // لو الناف بار موجود داخل الرسايل يخفيه
  const location = useLocation();

  // الصفحات اللي مش عاوز يظهر فيها الناف بار
  const navNone = ["/messageUser"];
  return (
    <div className="layoutProfile">
      <div className="layoutProfile_main">
        {/* السايدبار الثابت */}
        <SidebarDashboard />

        {/* باقي الصفحة (الهيدر + المحتوى) */}
        <div className="layoutProfile_body">
          {!navNone.includes(location.pathname) && <HeaderDashboard />}
          <div className="layoutProfile_content">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default LayoutProfile;
