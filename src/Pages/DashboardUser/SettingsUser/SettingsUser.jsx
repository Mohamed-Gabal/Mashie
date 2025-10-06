


import React from "react";
import { FaCamera } from "react-icons/fa"; // أيقونة الكاميرا
import "./settingsUser.css";

const SettingsUser = () => {
  return (
    <div className="Settings_user">
      {/* الأزرار العلوية */}
      <div className="Settings_user_buttons">
        <button className="Settings_user_but active">حذف الحساب</button>
        <button className="Settings_user_but">الأسئلة الشائعة</button>
        <button className="Settings_user_but">الخصوصية</button>
        <button className="Settings_user_but">الشروط والأحكام</button>
        <button className="Settings_user_but">حسابي</button>
        <button className="Settings_user_but">تغيير البانر</button>
      </div>

      {/* صورة الغلاف + زر تغيير البانر */}
      <div className="Settings_user_image">
        <div className="Settings_user_image_cover">
          <img src="/images/filter1.webp" alt="صورة الغلاف" />
          <button className="change_banner_btn">
            <FaCamera /> تغيير البانر
          </button>
        </div>

        {/* صورة البروفايل + أيقونة الكاميرا */}
        <div className="Settings_user_image_profile">
          <img src="/images/filter2.webp" alt="صورة البروفايل" />
          <div className="profile_camera_icon">
            <FaCamera />
          </div>
        </div>
      </div>

      {/* نموذج تعديل البيانات */}
      <form className="Settings_user_form">
        <label>
          الاسم الكامل
          <input type="text" defaultValue="أحمد عمر ماهر" />
        </label>

        <label>
          بريدك الإلكتروني
          <input type="email" defaultValue="a******@gmail.com" />
        </label>

        <label>
          رقم الجوال
          <input type="tel" defaultValue="+966 4532 78952 457" />
        </label>

        <div className="password_row">
          <label>
            كلمة المرور الحالية
            <input type="password" defaultValue="***************" />
          </label>

          <label>
            كلمة المرور الجديدة
            <input type="password" />
          </label>

          <label>
            تأكيد كلمة المرور الجديدة
            <input type="password" />
          </label>
        </div>

        <button type="submit" className="Settings_user_save_btn">
          تعديل الملف الشخصي
        </button>
      </form>
    </div>
  );
};

export default SettingsUser;

