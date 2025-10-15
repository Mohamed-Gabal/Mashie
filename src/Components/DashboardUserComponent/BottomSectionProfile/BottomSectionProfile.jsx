
import React, { useEffect, useState } from "react";
import "./bottomSectionProfile.css";
import { MdOutlineTimer } from "react-icons/md";
import { useCookies } from "react-cookie";

const BottomSectionProfile = () => {
  const [inputDate, setInputDate] = useState("");
  const [showUserAds, setShowUserAds] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [Cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchShowUser = async () => {
      try {
        setLoading(true);
        const token = Cookies?.token?.data?.token;

        const response = await fetch(
          "https://api.mashy.sand.alrmoz.com/api/profile/ealans",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dataAds = await response.json();
        console.log(dataAds);
        setShowUserAds(dataAds.data?.data || []);
      } catch {
        setError("فشل الاتصال بالسيرفر.");
      } finally {
        setLoading(false);
      }
    };

    fetchShowUser();
  }, []);

  // حدف الاعلان من الداتا
  const deleteAds = () => {};

    // تحويل التاريخ الي صيغه معينه
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    if (seconds < 60) return "مند لحظات";
    if (seconds < intervals.minute) return `منذ ${seconds} ثانية`;
    if (seconds < intervals.hour)
      return `منذ ${Math.floor(seconds / intervals.minute)} دقيقة`;
    if (seconds < intervals.day)
      return `منذ ${Math.floor(seconds / intervals.hour)} ساعة`;
    if (seconds < intervals.week)
      return `منذ ${Math.floor(seconds / intervals.day)} يوم`;
    if (seconds < intervals.month)
      return `منذ ${Math.floor(seconds / intervals.week)} أسبوع`;
    if (seconds < intervals.year)
      return `منذ ${Math.floor(seconds / intervals.month)} شهر`;
  
    return `منذ ${Math.floor(seconds / intervals.year)} سنة`;
  }
  return (
    <div className="bottom_section">
      <div className="section_header">
        <h4>أحدث العروض</h4>

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

      {loading ? (
        <p className="loading">جاري تحميل الإعلانات...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : showUserAds.length === 0 ? (
        <p className="no-data">لا توجد إعلانات حالياً.</p>
      ) : (
        <div className="ads_list">
          {showUserAds.map((ad, index) => (
            <div key={index} className="ad_card">
              {/* الصورة على اليمين */}
              <div className="ad_image_wrapper">
                <img
                  src={`https://api.mashy.sand.alrmoz.com${ad.images[0]}`}
                  alt={ad.user.user_name}
                  className="ad_image"
                />
              </div>

              {/* المحتوى على اليسار */}
              <div className="ad_content">
                <div>
                  <h5 className="ad_title">{ad.information.title}</h5>
                  <p>{ad.information.description}</p>

                  <div className="ad_meta">
                    <span className="ad_time">
                      <MdOutlineTimer /> {formatTime(ad.created_at)}
                    </span>
                  </div>
                </div>

                <div className="ad_actions">
                  <button className="edit_btn">تعديل</button>
                  <button className="delete_btn" onClick={deleteAds}>
                    حذف
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="show_more">
        <button>عرض المزيد...</button>
      </div>
    </div>
  );
};
export default BottomSectionProfile;

