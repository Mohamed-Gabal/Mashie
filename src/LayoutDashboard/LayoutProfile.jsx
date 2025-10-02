import React from "react";
import './layoutProfile.css';
import HeaderDashboard from "../Components/HeaderDashboard/HeaderDashboard";
import SidebarDashboard from "../Components/SidebarDashboard/SidebarDashboard";

const LayoutProfile = ({ children }) => {
  return (
    <div className="layoutProfile">
      {/* الهيدر الثابت */}
      <HeaderDashboard />

      <div className="layoutProfile_main">
        {/* السايدبار الثابت */}
        <SidebarDashboard />

        {/* المحتوى المتغير */}
        <div className="layoutProfile_content">
          {children}
        </div>
      </div>
    </div>
  );
};
export default LayoutProfile;
