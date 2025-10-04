import React from "react";
import "./topSectionProfile.css";

const TopSectionProfile = () => {
  return (
    <div className="accountUserImage_up">
      <div className="Account_user_image">
        {/* صورة الكوفر */}
        <div className="Account_user_image_profile">
          <img src="/images/filter1.webp" alt="صوره الكوفر" />
        </div>

        {/* صورة البروفايل */}
        <div className="Account_user_image_profile_person">
          <img src="/images/filter2.webp" alt="صوره البروفايل" />
        </div>

        {/* بيانات المستخدم */}
        <div className="Account_user_info">
          <h3 className="user_name">احمد عمر ماهر</h3>
          <h6 className="user_status">
            اخر ظهور الان <span className="status_dot active"></span>
          </h6>
        </div>
      </div>
    </div>
  );
};
export default TopSectionProfile;
