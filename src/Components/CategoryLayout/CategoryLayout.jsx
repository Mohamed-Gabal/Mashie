

import React, { useState } from "react";
import "./CategoryLayout.css";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryLayout = ({
  title,
  description,
  brandButtons = [],
  filters = [],
  items = [],
  onBrandSelect,
}) => {
  const [inputDate, setInputDate] = useState(""); // التاريخ اللي المستخدم يختاره
  const [dateFilter, setDateFilter] = useState(""); // التاريخ اللي تم البحث عنه

  // تنسيق التاريخ 
   const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // عند الضغط على الزر
  const handleSearchDate = () => {
    if (inputDate) {
      setDateFilter(formatDate(inputDate));
    }
  };

  // تشيك لو الكارت يساوي التاريخ المكتوب
  const isHighlighted = (item) => {
    if (!dateFilter) return false;
    const itemDate = new Date(item.time).toLocaleDateString("en-GB");
    return itemDate === dateFilter;
  };

  return (
    <div className="category-layout">
      {/* العنوان والوصف */}
      <div className="category-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {/* البحث */}
      <div className="category-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder={`ابحث في ${title}...`} />
      </div>

      {/* أزرار الماركات */}
      {brandButtons.length > 0 && (
        <div className="brand-buttons">
          {brandButtons.map((brand, index) => (
            <button key={index} className="brand-btn" onClick={() => onBrandSelect(brand === "جميع الماركت" ? "all" : brand)}>
              {brand}
            </button>
          ))}
        </div>
      )}

      {/* الفلاتر */}
      <div className="category-filters">
        {filters.map((filter, index) => (
          <div key={index} className="filter-group">
            <label className="filter-label">{filter.label}</label>
            <select className="filter-btn">
              {filter.options.map((option, idx) => (
                <option key={idx} className="filter-option" value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* الكروت */}
      <div className="categorys-items-add">
        <div className="categorys-items-add-flex">
          <div className="categorys-items-add-flex-desc">
            وجدنا لك {items.length} خيارا
          </div>
          <div className="categorys-items-add-flex-option">
            {/* البحث بالتاريخ */}
            <div className="date-search-box">
              <input
                id="dateInput"
                type="date"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
              />
              <button onClick={handleSearchDate}>بحث</button>
              {/* عرض التاريخ بعد التنسيق */}
            </div>
          </div>
        </div>

        <div className="categorys-items">
          {items.map((item, index) => (
            <div
              key={index}
              className={`categorys-card ${
                isHighlighted(item) ? "highlight-card" : ""
              }`}
            >
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-user">
                <img src={item.userImage} alt={item.userName} />
                <span>{item.userName}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="card-meta">
                <span>
                  <CiLocationOn />{item.area}
                </span>
                <span>
                  <CiStopwatch /> {item.time}
                </span>
              </div>
              <Link to={`/details/${item.id}`} className="details-btn">
                عرض التفاصيل
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryLayout;








