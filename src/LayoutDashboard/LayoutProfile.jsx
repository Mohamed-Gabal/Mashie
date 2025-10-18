import React, { useEffect, useRef, useState } from "react";
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
  const sidebarRef = useRef(null);
  useEffect(() => {
    if (!toggleSidebar) return; // لو المينيو مش مفتوحة، متسمعش للحدث

    const handleClickOutside = (e) => {
      const target = e.target;

      // لو النقرة داخل المينيو نفسها، متقفلهاش
      if (sidebarRef.current && sidebarRef.current.contains(target)) {
        return;
      }

      // لو النقرة كانت على زر الفتح، متقفلهاش برضو
      if (sidebarRef.current && sidebarRef.current.contains(target)) {
        return;
      }

      // لو الضغط في أي مكان تاني -> اقفل المينيو
      setToggleSidebar(false);
    };

    // بنضيف مستمع للضغط على أي مكان في الصفحة
    document.addEventListener("mousedown", handleClickOutside);

    // بنشيله لما الكومبوننت يتفكك أو المينيو تتقفل
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);
  return (
    <div className="layoutProfile">
      <div className="layoutProfile_main">
        <div className="toggle_sidebar" ref={sidebarRef} onClick={() => setToggleSidebar(!toggleSidebar)}>
          {toggleSidebar ?
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-columns2-icon lucide-columns-2"><rect width={18} height={18} x={3} y={3} rx={2} /><path d="M12 3v18" /></svg>
          }
        </div>
        {/* السايدبار الثابت */}
        <div className="layoutProfile_sidebar">
          <SidebarDashboard toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} sidebarRef={sidebarRef}/>
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