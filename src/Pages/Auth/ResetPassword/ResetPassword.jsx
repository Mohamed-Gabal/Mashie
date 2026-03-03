import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./resetPasswordStyle.css";

const ResetPassword = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    alert("رمز التحقق هو: " + code);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>تحقق من الكود</h2>

        <div className="verify-box">
          <div className="header_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x={2} y={4} width={20} height={16} rx={2} /></svg>
          </div>
          <p>
            أدخل رمز التحقق المرسل إلى: <b>a*****@gmail.com</b>
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          <button type="submit" className="login_button">
            تأكيد الرمز
          </button>
        </form>

        <div className="login-footer">
          <p>
            إعادة الإرسال خلال <span>00:60</span>
          </p>
          <Link to="/resetPassword">أعد إرسال الرمز</Link>
          <br />
          <a href="/contact">تواجه مشكلة؟ تواصل معنا</a>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;