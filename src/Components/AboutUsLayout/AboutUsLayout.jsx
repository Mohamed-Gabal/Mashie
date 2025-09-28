// Landing.jsx
import React from "react";
import "./aboutUsLayout.css";

const Landing = () => {
  return (
    <div className="aboutUsLayout">
      <div className="aboutUsLayout_landing">
        <h1>من نحن؟</h1>
        <p>
          "ماشي منصّة إعلانات مبتكرة تربطك بكل ما تحتاجه في مكان واحد. سواء كنت
          عايز تبيع سيارتك، تعرض عقارك، تشتري إلكترونيات، أو حتى تدور على منتجات
          متنوعة… هتلاقيها كلها بسهولة وسرعة وبأعلى درجات الأمان."
        </p>
        <button className="aboutUsLayout_btn">ابدأ الآن</button>
      </div>
    </div>
  );
};
export default Landing;
