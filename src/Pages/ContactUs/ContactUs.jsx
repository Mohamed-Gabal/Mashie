import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2 className="contact_title">اتصل بنا</h2>
      <p className="contact_description">
        نرحب بتواصلك معنا لأي استفسار أو ملاحظة، فريقنا جاهز لمساعدتك.{" "}
      </p>
      <div className="contact_us_container">
        {/* القسم الأيمن - نموذج التواصل */}
        <div className="contact_us_container_right">
          <div className="contact_us_container_right_content">
            <div className="contact_us_container_right_icon"><img src="/Icons/ChatTeardrop.svg" alt="chat" /></div>

            <h3 className="contact_us_container_right_title">
              ارسل لنا رسالة:
            </h3>
          </div>

          {/* نموذج التواصل */}
          <form className="contact_us_form">
            {/* الاسم الكامل */}
            <label className="contact_us_label">الاسم الكامل</label>
            <div className="input-group">
              <img src="/Icons/Auth/user.svg" alt="user" className="input-icon" />
              <input
                type="text"
                className="contact_us_input"
                placeholder="ادخل اسمك الكامل"
              />
            </div>

            {/* البريد الإلكتروني */}
            <label className="contact_us_label">البريد الإلكتروني</label>
            <div className="input-group">
              <img src="/Icons/Auth/email.svg" alt="email" className="input-icon" />
              <input
                type="text"
                className="contact_us_input"
                placeholder="ادخل بريدك الالكتروني"
              />
            </div>

            {/* رقم الجوال */}
            <label className="contact_us_label">رقم الجوال (اختياري)</label>
            <div className="input-group">
              <img src="/Icons/Auth/phone.svg" alt="phone" className="input-icon" />
              <input
                type="text"
                className="contact_us_input"
                placeholder="ادخل رقم جوالك"
              />
            </div>

            {/* الرسالة */}
            <label className="contact_us_label">رسالتك</label>
            <div className="input-group textarea-group">
              <textarea
                className="contact_us_textarea"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            {/* زر إرسال */}
            <button type="submit" className="contact_us_btn">
              <img src="/Icons/PaperPlaneRight.svg" alt="PaperPlaneRight" className="btn-icon" />
              إرسال رسالتك
            </button>
          </form>
        </div>

        {/* القسم الأيسر - بيانات التواصل */}
        <div className="contact_us_container_left">
          <div className="contact_us_container_left_content">
            {/* بيانات التواصل المباشر */}
            <div className="contact_us_container_left_top">
              <h1>تواصل معنا مباشرة:</h1>
              <div>
                <p> البريد الإلكتروني</p>
                <span>
                  <img src="/Icons/greenEmail.svg" alt="email" className="contact_us_container_left_icon" />
                  <a href="mailto:support@mashee.com">support@mashee.com</a>
                </span>
              </div>
              <div>
                <p>خدمة العملاء</p>
                <span>
                  <img src="/Icons/greenPhone.svg" alt="phone" className="contact_us_container_left_icon" />
                  <a href="#">متاح من 9 صباحًا إلى 6 مساءً</a>
                </span>
              </div>
            </div>

            {/* روابط السوشيال ميديا */}
            <div className="contact_us_container_left_bottom">
              <h1>تابعنا على:</h1>
              <div className="contact_us_container_left_bottom_icons">
                <div>
                  <img src="/Icons/facebook.svg" alt="facebook" className="contact_us_container_left_icon" />
                </div>
                <div>
                  <img src="/Icons/instegram.svg" alt="instegram" className="contact_us_container_left_icon" />
                </div>
                <div>
                  <img src="/Icons/linkedIn.svg" alt="linkedIn" className="contact_us_container_left_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;