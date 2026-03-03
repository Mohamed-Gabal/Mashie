import React from "react";
import "./sellSeactionStyle.css";
import { Link } from "react-router-dom";

const SellSeaction = () => {
  return (
    <section className="sell-section">
      <div className="container">
        <h2 className="sell-title">عندك شيء للبيع؟</h2>
        <p className="sell-subtitle">
          وصل إعلانك لآلاف المشترين في دقائق... ابدأ الآن واعرض منتجاتك بسهولة
        </p>
        <Link to="/advertisements" className="sell-btn">
          أضف عرضك
        </Link>
        <div className="sell-features">
          <div className="sell_features_content">
            <div className="sell_features_icon">
              <img src="Icons/Check.svg" alt="Check" />
            </div>
            <span>آمن وموثوق</span>
          </div>
          
          <div className="sell_features_content">
            <div className="sell_features_icon">
              <img src="Icons/Check.svg" alt="Check" />
            </div>
            <span>ظهور فوري</span>
          </div>
          
          <div className="sell_features_content">
            <div className="sell_features_icon">
              <img src="Icons/Check.svg" alt="Check" />
            </div>
            <span>النشر مجاني</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SellSeaction;