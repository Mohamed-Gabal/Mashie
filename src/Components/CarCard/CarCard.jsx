import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import "./carCard.css";

const CarCard = () => {
  const adsCard = [
    {
      id: 1,
      img: "/images/resultPage6.png",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "للبيع شقة تمليك الدور الأول",
      time: "قبل 4 دقائق",
      location: "مصر, القاهرة",
    },
    {
      id: 2,
      img: "/images/resultPage1.png",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "شقة للإيجار قانون جديد",
      time: "قبل 10 دقائق",
      location: "مصر, الجيزة",
    },
    {
      id: 3,
      img: "/images/resultPage2.png",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "فيلا دوبلكس للبيع",
      time: "قبل 15 دقيقة",
      location: "مصر, الإسكندرية",
    },
    {
      id: 4,
      img: "/images/resultPage3.png",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "محل للإيجار بمنطقة حيوية",
      time: "قبل 20 دقيقة",
      location: "مصر, القاهرة",
    },
    {
      id: 5,
      img: "/images/resultPage4.png",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "أرض للبيع في التجمع",
      time: "قبل 25 دقيقة",
      location: "مصر, القاهرة",
    },
    {
      id: 6,
      img: "/images/resultPage5.png",
      user: "أحمد عمر",
      userImage: "/images/logo.svg",
      title: "شقة تمليك بحدائق الأهرام",
      time: "قبل 30 دقيقة",
      location: "مصر, الجيزة",
    },
  ];

  return (
    <section className="car-card">
      <div className="container">
        <h2 className="section-title">اكتشف الجديد أولًا</h2>
        <p className="section-subtitle">
          تصفح أحدث الإعلانات المضافة الآن، واعثر على ما يناسبك بسرعة وسهولة
        </p>
        <div className="car-card-grid">
          {adsCard.map((ad) => (
            <div key={ad.id} className="car-card-card">
              <img src={ad.img} alt={ad.title} className="car-card-main-img" />
              <div className="car-card-content">
                <div className="car-card-user">
                  <img
                    src={ad.userImage}
                    alt={ad.user}
                    className="car-card-user-img"
                  />
                  <span>{ad.user}</span>
                </div>
                <h3 className="car-card-title">{ad.title}</h3>
                <div className="car-card-meta">
                  <span className="car-card-item">
                    <CiLocationOn className="car-card-icon" />
                    {ad.location}
                  </span>
                  <span className="car-card-item">
                    <CiStopwatch className="car-card-icon" />
                    {ad.time}
                  </span>
                </div>
                <div className="car-card-actions">
                  <Link to={`/details/${ad.id}`} className="car-card-btn">
                    عرض التفاصيل
                  </Link>
                  <Link to="/favorites" className="car-card-vav">
                    <MdFavoriteBorder className="car-card-ico" />
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
export default CarCard;
