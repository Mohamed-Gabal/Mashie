import React, { useState } from "react";
import "./login.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { MdOutlineMailOutline } from "react-icons/md";

const Login = () => {
  return (
    <div className="login-wrapper">
      {/* صورة جانبية */}
      <div className="login-image">
        <img src="/images/login.webp" alt="login" />
      </div>

      <div className="login-container">
        {/* عنوان ترحيبي */}
        <h2>مرحبًا بك مجددًا</h2>
        <p>
          مرحبًا بك من جديد! قم بتسجيل الدخول إلى حسابك على ماشي لتتابع إعلاناتك
          المنشورة، وتدير منتجاتك أو خدماتك بسهولة.
        </p>

        {/* نموذج تسجيل الدخول */}
        <LoginForm />

        {/* روابط تحت النموذج */}
        <p className="login-footer">
          ليس لديك حساب بعد؟ <Link to="/register">إنشاء حساب</Link>
        </p>
        <p className="login-footer">
          <Link to="/forgotPassword">نسيت كلمة المرور؟</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;

export function LoginForm() {
  const { details } = useParams();
  //  الحالة الخاصة بالبريد الإلكتروني
  const [email, setEmail] = useState("");
  //  الحالة الخاصة بكلمة المرور
  const [password, setPassword] = useState("");

  // حالة إظهار أو إخفاء كلمة المرور
  const [showPassword, setShowPassword] = useState(false);
  // دالة لتبديل حالة عرض كلمة المرور
  const togglePassword = () => setShowPassword(!showPassword);

  // مكتبة الكوكيز: نستخدم setCookie لتخزين التوكن بعد تسجيل الدخول
  const [Cookie, setCookie] = useCookies(["token"]);

  // useNavigate: لإعادة توجيه المستخدم لصفحة أخرى بعد تسجيل الدخول
  const navigate = useNavigate();

  // حالة لتخزين الأخطاء (لكل input + خطأ عام)
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  // دالة التحقق من صحة البيانات قبل إرسالها
  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "", general: "" };

    // تحقق من البريد الإلكتروني
    if (!email.trim()) {
      newErrors.email = "الرجاء إدخال البريد الإلكتروني";
      valid = false;
    }

    // تحقق من كلمة المرور
    if (!password.trim()) {
      newErrors.password = "الرجاء إدخال كلمة المرور";
      valid = false;
    }

    setErrors(newErrors); // تحديث الأخطاء
    return valid; // ترجع false لو فيه خطأ
  };

  const [loading, setLoading] = useState(false);
  //  دالة إرسال النموذج (التعامل مع API تسجيل الدخول)
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع تحديث الصفحة

    // تحقق من البيانات قبل استدعاء API
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.mashy.sand.alrmoz.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // تسجيل الدخول ناجح
        setCookie("token", data, {
          path: "/",
          maxAge: 60 * 60 * 24 * 30,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
        });
        if (
          details !== "vehicles" &&
          details !== "realestate" &&
          details !== "electronics" &&
          details !== "jobs" &&
          details !== "furniture" &&
          details !== "services" &&
          details !== "fashion" &&
          details !== "food" &&
          details !== "anecdotes" &&
          details !== "gardens" &&
          details !== "trips" &&
          details !== "pets"
        ) {
          navigate("/");
        }
      } else {
        //نقرأ الرسالة من
        const serverError =
          data?.errors?.email?.[0] ||
          data?.message ||
          "حدث خطأ أثناء تسجيل الدخول";
        // نحلل النص ونقرر نعرضه فين
        if (serverError.toLowerCase().includes("email")) {
          setErrors((prev) => ({
            ...prev,
            email: "البريد الإلكتروني أو كلمه المرور غير صحيحه",
          }));
        } else if (serverError.toLowerCase().includes("password")) {
          setErrors((prev) => ({
            ...prev,
            password: "كلمة المرور غير صحيحة",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            general: serverError,
          }));
        }
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        general: "تعذر الاتصال تحقق من الإنترنت",
      }));
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* حقل البريد الإلكتروني */}
      <div className="input-group">
        <MdOutlineMailOutline className="input-icon" />
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: "" })); // مسح رسالة الخطأ عند التعديل
          }}
        />
      </div>
      {/* رسالة خطأ البريد */}
      {errors.email && (
        <p className="error-message" style={{ color: "red", marginTop: "-42px"}}>
          {errors.email}
        </p>
      )}

      {/* حقل كلمة المرور */}
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"} // إظهار/إخفاء كلمة المرور
          placeholder="أدخل كلمة المرور"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: "" })); // مسح رسالة الخطأ عند التعديل
          }}
        />
        {/* أيقونة إظهار/إخفاء كلمة المرور */}
        <span className="input-icon eye" onClick={togglePassword}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </div>
      {/* رسالة خطأ كلمة المرور */}
      {errors.password && (
        <p className="error-message" style={{ color: "red" , marginTop: "-42px"}}>
          {errors.password}
        </p>
      )}

      {/* زر تسجيل الدخول */}
      <button type="submit" className="login_button" disabled={loading}>
        {loading ? "جاري تسجيل الدخول..." : "تسجيل دخول"}
      </button>

      {/* رسالة خطأ عامة (من السيرفر أو غيره) */}
      {errors.general && (
        <p
          className="error-message"
          style={{ color: "red", marginTop: "-42px" }}
        >
          {errors.general}
        </p>
      )}
    </form>
  );
}
