import React from "react";
import { Link } from "react-router-dom";
import "./categoriesSectionStyle.css";

const categories = [
  {
    id: 1,
    title: "السيارات",
    desc: "سيارات مستعملة وجديدة، قطع غيار، دراجات",
    count: "12,500+",
    img: "/advertisements/car.svg",
    link: "/vehicles",
  },
  {
    id: 2,
    title: "العقارات",
    desc: "شقق، فيلات، أراضي، مكاتب تجارية",
    count: "12,500+",
    img: "/advertisements/buildings.svg",
    link: "/realestate",
  },
  {
    id: 3,
    title: "الإلكترونيات",
    desc: "هواتف، أجهزة كمبيوتر، أجهزة منزلية",
    count: "12,500+",
    img: "/advertisements/electronics.svg",
    link: "/electronics",
  },
  {
    id: 4,
    title: "الوظائف",
    desc: "وظائف بدوام كامل وجزئي، فرص عمل",
    count: "12,500+",
    img: "/advertisements/jobs.svg",
    link: "/jobs",
  },
  {
    id: 5,
    title: "أزياء",
    desc: "ملابس، أحذية، إكسسوارات",
    count: "12,500+",
    img: "/advertisements/fashion.svg",
    link: "/fashion",
  },
  {
    id: 6,
    title: "أثاث",
    desc: "أثاث منزلي ومكتبي",
    count: "12,500+",
    img: "/advertisements/furniture.svg",
    link: "/furniture",
  },
  {
    id: 7,
    title: "خدمات",
    desc: "خدمات متنوعة للأفراد والشركات",
    count: "12,500+",
    img: "/advertisements/services.svg",
    link: "/services",
  },
  {
    id: 8,
    title: "أطعمة",
    desc: "مأكولات، مشروبات، تموين",
    count: "12,500+",
    img: "/advertisements/food.svg",
    link: "/food",
  },
  {
    id: 9,
    title: "نوادر",
    desc: "مقتنيات وأشياء نادرة",
    count: "12,500+",
    img: "/advertisements/anecdotes.svg",
    link: "/anecdotes",
  },
  {
    id: 10,
    title: "حدائق",
    desc: "معدات وأدوات حدائق",
    count: "12,500+",
    img: "/advertisements/gardens.svg",
    link: "/gardens",
  },
  {
    id: 11,
    title: "رحلات",
    desc: "رحلات، سياحة، تخييم",
    count: "12,500+",
    img: "/advertisements/trips.svg",
    link: "/trips",
  },
  {
    id: 12,
    title: "حيوانات",
    desc: "حيوانات أليفة وإكسسواراتها",
    count: "12,500+",
    img: "/advertisements/animals.svg",
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
          <Link to={`category${cat.link}`} key={cat.id} className="category-card">
            <div className="">
              <div className="icon-box">
                <img src={cat.img} alt={cat.title} />
              </div>
              <h2>{cat.title}</h2>
            </div>

            <div className="">
              <p>{cat.desc}</p>
              <span className="count">{cat.count}</span>
              <span className="browse-spen">تصفح القسم</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CategoriesSection;
