import React from "react";
import "./sellSeaction.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const SellSeaction = () => {
  return (
    <section className="sell-section">
      <div className="container">
        <h2 className="sell-title">عندك شيء للبيع؟</h2>
        <p className="sell-subtitle">
          وصل إعلانك لآلاف المشترين في دقائق... ابدأ الآن واعرض منتجاتك بسهولة
        </p>
        <Link to="/add-offer" className="sell-btn">
          أضف عرضك
        </Link>
        <div className="sell-features">
          <span>
            آمن وموثوق
            <FaCheckCircle className="sell-icon" />
          </span>
          <span>
            ظهور فوري
            <FaCheckCircle className="sell-icon" />
          </span>
          <span>
            النشر مجاني
            <FaCheckCircle className="sell-icon" />
          </span>
        </div>
      </div>
    </section>
  );
};
export default SellSeaction;
