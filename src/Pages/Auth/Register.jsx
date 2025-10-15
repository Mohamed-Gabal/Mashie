import React, { useState } from "react";
import "./register.css";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const registerPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  // حالة الموديل (بعد التسجيل)
  const [showModdel, setShowModdel] = useState(false);

  // حالات الأخطاء
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    general: "",
  });

  // بيانات المستخدم
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  //دالة التحقق من رقم سعودي (05xxxxxxxx أو +9665xxxxxxxx)
  const validateSaudiPhone = (phone) => {
    const saRegex = /^(\+9665\d{8}|05\d{8})$/;
    return saRegex.test(phone);
  };

  // دالة التحقق من البيانات قبل الإرسال
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

    // الاسم
    if (!formData.name.trim()) {
      newDataErrors.name = "الرجاء إدخال الاسم الكامل";
      formIsValid = false;
    }

    // البريد الإلكتروني
    if (!formData.email.trim()) {
      newDataErrors.email = "الرجاء إدخال البريد الإلكتروني";
      formIsValid = false;
    }

    // رقم الجوال — لازم يكون مطلوب وسعودي
    if (!formData.phone.trim()) {
      newDataErrors.phone = "رقم الجوال مطلوب";
      formIsValid = false;
    } else if (!validateSaudiPhone(formData.phone)) {
      newDataErrors.phone =
        "يرجى إدخال رقم جوال سعودي صالح يبدأ بـ 05 أو +9665";
      formIsValid = false;
    }

    // كلمة المرور
    if (!formData.password.trim()) {
      newDataErrors.password = "الرجاء إدخال كلمة المرور";
      formIsValid = false;
    }

    // تأكيد كلمة المرور
    if (!formData.password_confirmation.trim()) {
      newDataErrors.password_confirmation = "الرجاء تأكيد كلمة المرور";
      formIsValid = false;
    }

    setErrors(newDataErrors);
    return formIsValid;
  };

  // إرسال البيانات إلى الـ API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataValidation()) return;

    // تأكيد تطابق كلمتي المرور
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
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setShowModdel(true);
      } else {
        let message = "حدث خطأ أثناء التسجيل";

        if (data?.errors?.email && data.errors.email[0]) {
          message = "هذا الحساب موجود بالفعل";
        } else if (data?.message) {
          message = data.message;
        }

        setErrors((prev) => ({
          ...prev,
          general: message,
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        general: "خطأ في الاتصال، تأكد من اتصالك بالإنترنت",
      }));
    }
  };

  // عند غلق الموديل بعد التسجيل
  const closeModel = () => {
    setShowModdel(false);
    navigate("/settingsUser");
  };

  // عند التركيز على حقل رقم الجوال
  const handlePhoneFocus = (e) => {
    if (
      !e.target.value.startsWith("05") &&
      !e.target.value.startsWith("+966")
    ) {
      setFormData({ ...formData, phone: "05" });
    }
  };

  // أثناء كتابة رقم الجوال
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\s+/g, ""); // إزالة المسافات

    // معالجة كل الصيغ الممكنة وتحويلها إلى شكل سعودي صحيح
    if (value.startsWith("009665")) {
      value = "+966" + value.slice(5);
    } else if (value.startsWith("9665")) {
      value = "+966" + value.slice(3);
    } else if (value.startsWith("05")) {
      value = "+966" + value.slice(1);
    } else if (value.startsWith("+9665")) {
      value = "+9665" + value.slice(5);
    } else if (value.startsWith("5")) {
      value = "+966" + value;
    } else if (value.includes("+966") && value.includes("05")) {
      //لو كتب 05+966 أو العكس — نخليها صحيحة
      value = "+966" + value.replace(/[^0-9]/g, "").slice(-9);
    } else {
      // أي حالة تانية ترجع للبداية الصحيحة
      value = "+9665";
    }

    // تنظيف الرموز غير الرقمية
    value = value.replace(/[^+\d]/g, "");

    // تحديد الطول المسموح (13 رقم)
    if (value.startsWith("+9665") && value.length > 13) {
      value = value.slice(0, 13);
    }

    setFormData({ ...formData, phone: value });
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  return (
    <div className="register-container">
      <div className="register-box">
        {/*صورة جانبية */}
        <div className="register-image">
          <img src="/images/login.webp" alt="Register" />
        </div>

        {/* المحتوى */}
        <div className="register-content">
          <h2>إنشاء حساب جديد</h2>
          <p>
            سجّل حسابك الآن على ماشي لتتصفح الإعلانات بسهولة وتعرض منتجاتك أو
            خدماتك في المكان المناسب، بسرعة وأمان.
          </p>

          {/*رسالة خطأ عامة */}
          {errors.general && (
            <p className="error-message" style={{ color: "red", margin: "0" }}>
              {errors.general}
            </p>
          )}

          <form className="register-form" onSubmit={handleSubmit}>
            {/* الاسم الكامل */}
            <div className="input-group">
              <FaRegUser className="icon" />
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
            {errors.name && (
              <p style={{ color: "red", margin: "0" }}>{errors.name}</p>
            )}

            {/*البريد الإلكتروني */}
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
            {errors.email && (
              <p style={{ color: "red", margin: "0" }}>{errors.email}</p>
            )}

            {/* رقم الجوال */}
            <div className="input-group">
              <IoCallOutline className="icon" />
              <input
                type="tel"
                placeholder="05xxxxxxxx أو +9665xxxxxxxx"
                value={formData.phone}
                onChange={handlePhoneChange}
                onFocus={handlePhoneFocus}
              />
            </div>
            {errors.phone && (
              <p style={{ color: "red", margin: "0" }}>{errors.phone}</p>
            )}

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
              <p style={{ color: "red", margin: "0" }}>{errors.password}</p>
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
                  setErrors((prev) => ({
                    ...prev,
                    password_confirmation: "",
                  }));
                }}
              />
            </div>
            {errors.password_confirmation && (
              <p style={{ color: "red", margin: "0" }}>
                {errors.password_confirmation}
              </p>
            )}

            {/* زر إنشاء الحساب */}
            <button type="submit" className="regis_button">
              إنشاء حساب
            </button>
          </form>

          {/* تذييل التسجيل */}
          <p className="register-footer">
            هل لديك حساب بالفعل؟ <Link to="/login">تسجيل دخول</Link>
          </p>
        </div>
      </div>

      {/*الموديل بعد نجاح التسجيل */}
      {showModdel && (
        <div className="success_model">
          <div className="success_content">
            <h3>تم إنشاء الحساب بنجاح!</h3>
            <p>يمكنك الآن تسجيل الدخول إلى حسابك.</p>
            <button onClick={closeModel}>متابعة</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Register;
