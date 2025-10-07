import React, { useState } from "react";
import "./bottomSectionProfile.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";

const BottomSectionProfile = () => {
  const [inputDate, setInputDate] = useState("");

  const handleSearchDate = () => {
    if (inputDate) {
      alert(`تم البحث بتاريخ: ${inputDate}`);
    } else {
      alert("من فضلك اختر تاريخ أولاً");
    }
  };

  const ads = [
    {
      image: "/images/filter2.webp",
      title: "للبيع شقة تمليك الدور الأول",
      time: "قبل 4 دقائق",
      location: "مصر, القاهرة",
    },
    {
      image: "/images/filter3.webp",
      title: "للبيع شقة تمليك الدور الأول",
      time: "قبل 4 دقائق",
      location: "مصر, القاهرة",
    },
    {
      image: "/images/filter4.webp",
      title: "للبيع شقة تمليك الدور الأول",
      time: "قبل 4 دقائق",
      location: "مصر, القاهرة",
    },
  ];

  return (
    <div className="bottom_section">
      {/* الهيدر */}
      <div className="section_header">
        <h4>أحدث العروض</h4>

        <div className="date-search-box">
          <input
            id="dateInput"
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button onClick={handleSearchDate}>فلتر</button>
        </div>
      </div>

      {/* الإعلانات */}
      <div className="ads_list">
        {ads.map((ad, index) => (
          <div key={index} className="ad_card">
            <img src={ad.image} alt={ad.title} className="ad_image" />

            <div className="ad_content">
              <div className="ad_header_row">
                <h5 className="ad_title">{ad.title}</h5>
                <div className="ad_actions">
                  <button className="edit_btn">تعديل</button>
                  <button className="delete_btn">حذف</button>
                </div>
              </div>

              <div className="ad_meta">
                <span className="ad_location">
                  <IoLocationOutline /> {ad.location}
                </span>
                <span className="ad_time">
                  <MdOutlineTimer /> {ad.time}
                </span>
              </div>

              <button className="view_btn">عرض الإعلان</button>
            </div>
          </div>
        ))}
      </div>

      {/* زرار عرض المزيد */}
      <div className="show_more">
        <button>عرض المزيد...</button>
      </div>
    </div>
  );
};
export default BottomSectionProfile;
