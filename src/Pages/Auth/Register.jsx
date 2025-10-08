import React, { useState } from "react";
import "./register.css";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const registerPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  // الأخطاء
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    general: "",
  });

  // البيانات اللي المستخدم بيكتبها
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  // التحقق من البيانات
  const dataValidation = () => {
    let formIsValid = true;
    let newDataErrors = {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      general: "",
    };

    if (!formData.name.trim()) {
      newDataErrors.name = "الرجاء إدخال الاسم الكامل";
      formIsValid = false;
    }
    if (!formData.email.trim()) {
      newDataErrors.email = "الرجاء إدخال البريد الإلكتروني";
      formIsValid = false;
    }
    if (!formData.phone.trim()) {
      newDataErrors.phone = "الرجاء إدخال رقم الجوال";
      formIsValid = false;
    }
    if (!formData.password.trim()) {
      newDataErrors.password = "الرجاء إدخال كلمة المرور";
      formIsValid = false;
    }
    if (!formData.password_confirmation.trim()) {
      newDataErrors.password_confirmation = "الرجاء تأكيد كلمة المرور";
      formIsValid = false;
    }

    setErrors(newDataErrors);
    return formIsValid;
  };

  // إرسال الفورم
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ تحقق من صحة البيانات قبل الإرسال
    if (!dataValidation()) return;

    // ✅ تحقق من تطابق كلمة المرور
    if (formData.password !== formData.password_confirmation) {
      setErrors((prev) => ({
        ...prev,
        password_confirmation: "كلمات المرور غير متطابقة",
      }));
      return;
    }

    try {
      const response = await fetch(
        "https://api.mashy.sand.alrmoz.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/login");
      } else {
        setErrors((prev) => ({
          ...prev,
          general: data.data.message
            ? "هذا الحساب موجود بالفعل"
            : "حدث خطأ أثناء التسجيل",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        general: "خطأ في الاتصال   ",
      }));
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-image">
          <img src="/images/login.webp" alt="Register" />
        </div>

        <div className="register-content">
          <h2>إنشاء حساب جديد</h2>
          <p>
            سجّل حسابك الآن على ماشي لتتصفح الإعلانات بسهولة وتعرض منتجاتك أو
            خدماتك في المكان المناسب، بسرعة وأمان.
          </p>

          {/* ✅ خطأ عام */}
          {errors.general && (
            <p className="error-message" style={{ color: "red" }}>
              {errors.general}
            </p>
          )}

          <form className="register-form" onSubmit={handleSubmit}>
            {/* الاسم الكامل */}
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrors((prev) => ({ ...prev, name: "" }));
                }}
              />
            </div>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            {/* البريد الإلكتروني */}
            <div className="input-group">
              <BiMessageRounded className="icon" />
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
              />
            </div>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            {/* رقم الجوال */}
            <div className="input-group">
              <IoCallOutline className="icon" />
              <input
                type="number"
                placeholder="رقم الجوال"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }}
              />
            </div>
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

            {/* كلمة المرور */}
            <div className="input-group">
              <AiOutlineEye className="icon" onClick={registerPassword} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
              />
            </div>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}

            {/* تأكيد كلمة المرور */}
            <div className="input-group">
              <AiOutlineEye className="icon" onClick={registerPassword} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="تأكيد كلمة المرور"
                value={formData.password_confirmation}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password_confirmation: e.target.value,
                  });
                  setErrors((prev) => ({ ...prev, password_confirmation: "" }));
                }}
              />
            </div>
            {errors.password_confirmation && (
              <p style={{ color: "red" }}>{errors.password_confirmation}</p>
            )}

            <button type="submit" className="regis_button">
              إنشاء حساب
            </button>
          </form>

          <p className="register-footer">
            هل لديك حساب بالفعل؟ <Link to="/login">تسجيل دخول</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
