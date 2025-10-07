import React from "react";
import { Link } from "react-router-dom";
import "./blogCard.css";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const BlogCard = () => {
  const ads = [
    {
      id: 1,
      img: "/images/filter2.webp",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "للبيع شقة تمليك الدور الأول",
      time: "قبل 4 دقائق",
      location: "مصر, القاهرة",
    },
    {
      id: 2,
      img: "/images/filter2.webp",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "شقة للإيجار قانون جديد",
      time: "قبل 10 دقائق",
      location: "مصر, الجيزة",
    },
    {
      id: 3,
      img: "/images/filter2.webp",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "فيلا دوبلكس للبيع",
      time: "قبل 15 دقيقة",
      location: "مصر, الإسكندرية",
    },
    {
      id: 4,
      img: "/images/filter2.webp",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "محل للإيجار بمنطقة حيوية",
      time: "قبل 20 دقيقة",
      location: "مصر, القاهرة",
    },
    {
      id: 5,
      img: "/images/filter2.webp",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "أرض للبيع في التجمع",
      time: "قبل 25 دقيقة",
      location: "مصر, القاهرة",
    },
    {
      id: 6,
      img: "/images/filter2.webp",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "شقة تمليك بحدائق الأهرام",
      time: "قبل 30 دقيقة",
      location: "مصر, الجيزة",
    },
  ];

  return (
    <section className="latest-ads">
      <div className="container">
        <h2 className="section-title">اكتشف الجديد أولًا</h2>
        <p className="section-subtitle">
          تصفح أحدث الإعلانات المضافة الآن، واعثر على ما يناسبك بسرعة وسهولة
        </p>
        <div className="ads-grid">
          {ads.map((ad) => (
            <div key={ad.id} className="ad-card">
              <img src={ad.img} alt={ad.title} className="ad-img" />
              <div className="ad-content">
                <div className="ad-user">
                  <img src={ad.userImage} alt={ad.user} className="user-img" />
                  <span>{ad.user}</span>
                </div>
                <h3 className="ad-title">{ad.title}</h3>
                <div className="ad-meta">
                  <span className="meta-item">
                    <CiLocationOn className="meta-icon" />
                    {ad.location}
                  </span>
                  <span className="meta-item">
                    <CiStopwatch className="meta-icon" />
                    {ad.time}
                  </span>
                </div>
                <div className="ad-actions">
                  <Link to={`/details/${ad.id}`} className="ad-btn">
                    عرض التفاصيل
                  </Link>
                  <Link to="/favoritesUser" className="fav-btn">
                    <MdFavoriteBorder className="fav-icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogCard;
