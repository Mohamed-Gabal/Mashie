import React from "react";
import { FaCamera } from "react-icons/fa"; // أيقونة الكاميرا
import "./settingsUser.css";
import LocationForm from "../../../Components/LocationForm/LocationForm";
import { useCookies } from "react-cookie";

const SettingsUser = () => {
  const [cookies] = useCookies(["token"]);
  const userData = cookies?.token?.data?.user;
  console.log(userData);
  return (
    <div className="Settings_user">
      {/* الأزرار العلوية */}
      <div className="Settings_user_buttons">
        <button className="Settings_user_but active">حسابي</button>
        <button className="Settings_user_but">الشروط والأحكام</button>
        <button className="Settings_user_but">الخصوصية</button>
        <button className="Settings_user_but">الأسئلة الشائعة</button>
        <button className="Settings_user_but">تغيير البانر</button>
        <button className="Settings_user_but">حذف الحساب</button>
      </div>

      {/* صورة الغلاف + زر تغيير البانر */}
      <div className="Settings_user_image">
        <div className="image_container">
          <div className="Settings_user_image_cover">
            <img src="/images/filter1.webp" alt="صورة الغلاف" />
            <button className="change_banner_btn">
              <FaCamera /> تغيير البانر
            </button>
          </div>

          {/* صورة البروفايل + أيقونة الكاميرا */}
          <div className="Settings_user_image_profile">
            <div className="user_img_container">
              <img src={userData?.image} alt="صورة البروفايل" />
              <div className="profile_camera_icon">
                <FaCamera />
              </div>
            </div>
          </div>
        </div>

        <div className="user_name">
          <h3>{userData?.name}</h3>
        </div>
      </div>

      {/* نموذج تعديل البيانات */}
      <form className="Settings_user_form">
        <label>
          الاسم الكامل
          <input type="text" defaultValue={userData?.name} />
        </label>

        <label>
          بريدك الإلكتروني
          <input type="email" defaultValue={userData?.email} />
        </label>

        <label>
          رقم الجوال
          <input type="tel" defaultValue={userData?.phone} />
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

      <LocationForm />
    </div>
  );
};

export default SettingsUser;