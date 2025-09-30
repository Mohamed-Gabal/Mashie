

import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";

const categories = [
  {
    id: 1,
    title: "الوظائف",
    desc: "وظائف بدوام كامل وجزئي، فرص عمل",
    count: "12,500+",
    img: "/Icons/categore6.svg",
    link: "/jobs",
  },
  {
    id: 2,
    title: "الإلكترونيات",
    desc: "هواتف، أجهزة كمبيوتر، أجهزة منزلية",
    count: "12,500+",
    img: "/Icons/categore5.svg",
    link: "/electronics",
  },
  {
    id: 3,
    title: "العقارات",
    desc: "شقق، فيلات، أراضي، مكاتب تجارية",
    count: "12,500+",
    img: "/Icons/categore4.svg",
    link: "/realEstate",
  },
  {
    id: 4,
    title: "السيارات",
    desc: "سيارات مستعملة وجديدة، قطع غيار، دراجات",
    count: "12,500+",
    img: "/Icons/categore3.svg",
    link: "/cars",
  },
  {
    id: 5,
    title: "أزياء",
    desc: "ملابس، أحذية، إكسسوارات",
    count: "12,500+",
    img: "/Icons/categore9.svg",
    link: "/fashion",
  },
  {
    id: 6,
    title: "أثاث",
    desc: "أثاث منزلي ومكتبي",
    count: "12,500+",
    img: "/Icons/categore7.svg",
    link: "/furniture",
  },
  {
    id: 7,
    title: "خدمات",
    desc: "خدمات متنوعة للأفراد والشركات",
    count: "12,500+",
    img: "/Icons/categore8.svg",
    link: "/fileServices",
  },
  {
    id: 8,
    title: "أطعمة",
    desc: "مأكولات، مشروبات، تموين",
    count: "12,500+",
    img: "/Icons/food.svg",
    link: "/food",
  },
  {
    id: 9,
    title: "نوادر",
    desc: "مقتنيات وأشياء نادرة",
    count: "12,500+",
    img: "/Icons/categore11.svg",
    link: "/antiques",
  },
  {
    id: 10,
    title: "حدائق",
    desc: "معدات وأدوات حدائق",
    count: "12,500+",
    img: "/Icons/categore10.svg",
    link: "/gardens",
  },
  {
    id: 11,
    title: "رحلات",
    desc: "رحلات، سياحة، تخييم",
    count: "12,500+",
    img: "/Icons/categore11.svg",
    link: "/trips",
  },
  {
    id: 12,
    title: "حيوانات",
    desc: "حيوانات أليفة وإكسسواراتها",
    count: "12,500+",
    img: "/Icons/categore12.svg",
    link: "/pets",
  },
];

const CategoriesSection = () => {
  return (
    <section className="categories">
      <div className="categories-header">
        <h1>
          اختر <span>قسمك</span> وابدأ رحلتك
        </h1>
        <p>
          تصفح بين الإلكترونيات، الأثاث، العقارات والمزيد...
          <br />
          اعثر بسرعة على ما تبحث عنه أو اعرض منتجاتك في المكان المناسب
        </p>
      </div>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="icon-box">
              <img src={cat.img} alt={cat.title} />
            </div>
            <Link to={cat.link}><h2>{cat.title}</h2></Link>
            <p>{cat.desc}</p>
            <span className="count">{cat.count}</span>
            <Link to={`/category${cat.link}`} className="browse-btn">
              تصفح القسم
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CategoriesSection;

