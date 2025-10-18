import React, { useState } from "react";
import "./layoutProfile.css";
import HeaderDashboard from "../Components/HeaderDashboard/HeaderDashboard";
import SidebarDashboard from "../Components/SidebarDashboard/SidebarDashboard";
import { useLocation } from "react-router-dom";

const LayoutProfile = ({ children }) => {
  // لو الناف بار موجود داخل الرسايل يخفيه
  const location = useLocation();

  // الصفحات اللي مش عاوز يظهر فيها الناف بار
  const navNone = ["/messageUser"];

  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  return (
    <div className="layoutProfile">
      <div className="layoutProfile_main">
        {/* السايدبار الثابت */}
        <div className="layoutProfile_sidebar">
          <div className={`toggle_sidebar ${toggleSidebar ? "open" : "close"}`} onClick={()=> setToggleSidebar(!toggleSidebar)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-columns2-icon lucide-columns-2"><rect width={18} height={18} x={3} y={3} rx={2} /><path d="M12 3v18" /></svg>
          </div>
          <SidebarDashboard toggleSidebar={toggleSidebar}/>
        </div>

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
