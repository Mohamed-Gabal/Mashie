import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import "./carCard.css";

const CarCard = () => {
  const [adsCard, setAdsCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(
          "https://api.mashy.sand.alrmoz.com/api/ealans?category=cars&page_num=10"
        );

        if (!res.ok) {
          // بدلاً من throw new Error
          setError("حدث خطأ في الاتصال، حاول مرة أخرى.");
          setLoading(false);
          return; // نوقف هنا بدون رمي خطأ
        }

        const data = await res.json();
        const carsData = data?.data?.data?.ads || [];

        if (data?.success && Array.isArray(carsData)) {
          setAdsCard(carsData);
        } else {
          setError("لم يتم العثور على إعلانات سيارات حالياً.");
        }
      } catch {
        setError("حدث خطأ أثناء تحميل البيانات، حاول لاحقًا.");
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>جارِ تحميل الإعلانات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

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
  };
  return (
    <section className="car-card">
      <div className="container">
        <h2 className="section-title">اكتشف الجديد أولًا</h2>
        <p className="section-subtitle">
          تصفح أحدث إعلانات السيارات المضافة الآن، واعثر على ما يناسبك بسرعة
          وسهولة
        </p>

        <div className="car-card-grid">
          {adsCard.length > 0 ? (
            adsCard.map((ad) => (
              <div key={ad.id_ads} className="car-card-card">
                <img
                  src={
                    ad.images?.[0]
                      ? `https://api.mashy.sand.alrmoz.com/storage${ad.images[0]}`
                      : "/images/default.jpg"
                  }
                  alt={ad.information?.title || "سيارة"}
                  className="car-card-main-img"
                />

                <div className="car-card-content">
                  <div className="car-card-user">
                    <img
                      src={ad.user?.user_image || "/images/logo.svg"}
                      alt={ad.user?.user_name || "مستخدم"}
                      className="car-card-user-img"
                    />
                    <span>{ad.user?.user_name || "مستخدم"}</span>
                  </div>

                  <h3 className="car-card-title">
                    {ad.information?.title || "بدون عنوان"}
                  </h3>

                  <div className="car-card-meta">
                    <span className="car-card-item">
                      <CiLocationOn className="car-card-icon" />
                      {ad.location?.city || "غير محدد"}
                    </span>
                    <span className="car-card-item">
                      <CiStopwatch className="car-card-icon" />
                      {formatTime(ad.created_at )|| "حديثًا"}
                    </span>
                  </div>

                  <p className="car-card-price">
                    {ad.information?.price
                      ? `${ad.information.price} ريال`
                      : ad.information?.isNegotiable
                      ? "قابل للتفاوض"
                      : "السعر غير محدد"}
                  </p>

                  <div className="car-card-actions">
                    <Link to={`/cars/${ad.id_ads}`} className="car-card-btn">
                      عرض التفاصيل
                    </Link>
                    <Link to="/favoritesUser" className="car-card-fav">
                      <MdFavoriteBorder className="car-card-ico" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-ads">لا توجد إعلانات حالياً</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default CarCard;
