import React, { useEffect, useState } from "react";
import "./slider.css";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/images/filter1.webp",
    title: "اكتشف ألاف الإعلانات يومياً بسهولة",
    desc: "اعرض منتجاتك أو ابحث عن أفضل العروض بالقرب منك.. بكل سرعة وأمان",
    btn: "تصفح الإعلانات",
    link: "/category/vehicles",
  },
  {
    id: 2,
    image: "/images/filter2.webp",
    title: "أفضل العروض في مكانك",
    desc: "ابحث عن المنتجات أو الخدمات الأقرب إليك بسرعة فائقة",
    btn: "ابدأ الآن",
    link: "/category/realestate",
  },
  {
    id: 3,
    image: "/images/filter3.webp",
    title: "بيع واشتري بثقة",
    desc: "منصتنا تضمن لك تجربة سهلة وآمنة لإتمام صفقاتك",
    btn: "انشر إعلانك",
    link: "/category/electronics",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="slider_container">
      <div className="slider-slide">
        <img src={slides[current].image} alt={slides[current].title} className="active" />
        <div className="slider-content">
          <h1>{slides[current].title}</h1>
          <p>{slides[current].desc}</p>
          <button onClick={() => navigate(slides[current].link)}>
            {slides[current].btn}
          </button>
        </div>
        <button className="arrow left" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button className="arrow right" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      <div className="dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};