import React, { useEffect, useState } from "react";
import "./bottomSectionProfile.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { useCookies } from "react-cookie";

const BottomSectionProfile = () => {
  // لتخزين التاريخ اللي المستخدم هيختاره للفلاتر
  const [inputDate, setInputDate] = useState("");

  // لتخزين إعلانات المستخدم بعد جلبها من السيرفر
  const [showUserAds, setShowUserAds] = useState([]);

  // لتخزين أي رسالة خطأ تحصل (زي فشل الاتصال أو Unauthenticated)
  const [error, setError] = useState("");

  // لتحديد حالة التحميل (قبل وأثناء وبعد جلب البيانات)
  const [loading, setLoading] = useState(true);

  // جلب التوكن من الكوكيز (اللي اتسجل بعد عملية تسجيل الدخول)
  const [Cookies] = useCookies(["token"]);

  // useEffect بيشتغل أول ما الكومبوننت يتحمل
  useEffect(() => {
    const fetchShowUser = async () => {
      try {
        // بداية التحميل
        setLoading(true);
        
        // جلب التوكن من الكوكيز
        const token = Cookies?.token?.data?.token;

        // إرسال الطلب إلى API لجلب إعلانات المستخدم
        const response = await fetch(
          "https://api.mashy.sand.alrmoz.com/api/user/ealans",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // ← التوكن هنا ضروري للمصادقة
            },
          }
        );

        // تحويل الريسبونس إلى JSON
        const dataAds = await response.json();

        // تخزين البيانات داخل state (نتأكد إنها مصفوفة باستخدام ?.)
        setShowUserAds(dataAds.data?.data || []);
      } catch {
        // في حالة فشل الاتصال بالسيرفر
        setError("فشل الاتصال بالسيرفر.");
      } finally {
        // إيقاف التحميل بعد انتهاء العملية
        setLoading(false);
      }
    };

    // استدعاء الدالة عند تحميل الكومبوننت
    fetchShowUser();
  }, []); // ← فاضي عشان يشتغل مرة واحدة فقط

  return (
    <div className="bottom_section">
      {/* الهيدر */}
      <div className="section_header">
        <h4>أحدث العروض</h4>

        {/* فلترة الإعلانات حسب التاريخ */}
        <div className="date-search-box">
          <input
            id="dateInput"
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button>فلتر</button>
        </div>
      </div>

      {/* عرض الحالات المختلفة */}
      {loading ? (
        // حالة التحميل
        <p className="loading">جاري تحميل الإعلانات...</p>
      ) : error ? (
        //حالة وجود خطأ
        <p className="error">{error}</p>
      ) : showUserAds.length === 0 ? (
        // حالة عدم وجود بيانات
        <p className="no-data">لا توجد إعلانات حالياً.</p>
      ) : (
        // حالة النجاح - عرض الإعلانات
        <div className="ads_list">
          {showUserAds.map((ad, index) => (
            <div key={index} className="ad_card">
              {/* صورة الإعلان */}
              <img src={ad.image} alt={ad.title} className="ad_image" />

              <div className="ad_content">
                {/* عنوان الإعلان + أزرار التحكم */}
                <div className="ad_header_row">
                  <h5 className="ad_title">{ad.title}</h5>
                  <div className="ad_actions">
                    <button className="edit_btn">تعديل</button>
                    <button className="delete_btn">حذف</button>
                  </div>
                </div>

                {/* المكان والوقت */}
                <div className="ad_meta">
                  <span className="ad_location">
                    <IoLocationOutline /> {ad.location}
                  </span>
                  <span className="ad_time">
                    <MdOutlineTimer /> {ad.time}
                  </span>
                </div>

                {/* زر عرض الإعلان */}
                <button className="view_btn">عرض الإعلان</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* زر عرض المزيد */}
      <div className="show_more">
        <button>عرض المزيد...</button>
      </div>
    </div>
  );
};

export default BottomSectionProfile;
