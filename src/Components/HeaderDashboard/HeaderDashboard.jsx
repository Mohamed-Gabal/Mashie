import React from "react";
import "./headerDashboard.css";

const HeaderDashboard = () => {
  return (
    <div className="Header_dashboard">
      <h2 className="Header_dashboard_title">
        متجرك من <span>ماشي</span>
      </h2>
      <p className="Header_dashboard_desc">
        عرّف بنفسك واجعل متجرك أكثر وضوحًا
      </p>
    </div>
  );
};

export default HeaderDashboard;
