import React, { useState } from "react";
import { FaCamera } from "react-icons/fa"; // أيقونة الكاميرا
import "./settingsUser.css";
import LocationForm from "../../../Components/LocationForm/LocationForm";
import { useCookies } from "react-cookie";

const SettingsUser = () => {
  const [cookies] = useCookies(["token"]);
  const userData = cookies?.token?.data?.user;
  console.log(userData);
  const token = cookies?.token?.data?.token;

  const [isUploading, setIsUploading] = useState(false);
  const [profileImage, setProfileImage] = useState(userData?.profile_image);
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profile_image", file);

    try {
      setIsUploading(true);

      const res = await fetch("https://api.mashy.sand.alrmoz.com/api/profile-image", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok && data?.success) {
        // نحدّث الصورة الجديدة في الواجهة
        setProfileImage(data?.data?.image || URL.createObjectURL(file));
      } else {
        console.error("Upload failed:", data);
        alert(data?.message || "حدث خطأ أثناء رفع الصورة");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("حدث خطأ في الاتصال بالسيرفر");
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <div className="Settings_user">
      {/* الأزرار العلوية */}
      <ul className="Settings_user_buttons">
        <li className="Settings_user_but">حسابي</li>
        <li className="Settings_user_but">الشروط والأحكام</li>
        <li className="Settings_user_but">الخصوصية</li>
        <li className="Settings_user_but">الأسئلة الشائعة</li>
        <li className="Settings_user_but">تغيير البانر</li>
        <li className="Settings_user_but">حذف الحساب</li>
      </ul>
      <div className="settings_user_container">
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
                <img
                  src={profileImage || "/images/default-profile.png"}
                  alt="صورة البروفايل"
                  className={isUploading ? "blurred" : ""}
                />

                {/* غطاء أيقونة الكاميرا */}
                <label className="profile_camera_icon">
                  <FaCamera className="camera_icon" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                  />
                </label>

                {isUploading && <div className="upload_overlay">جارٍ الرفع...</div>}
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
    </div>
  );
};

export default SettingsUser;