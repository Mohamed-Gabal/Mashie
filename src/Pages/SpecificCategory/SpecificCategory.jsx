import React, { useEffect, useState } from 'react';
import { CiLocationOn, CiStopwatch } from 'react-icons/ci';
import { Link, useParams } from 'react-router-dom';
import "./SpecificCategory.css"
import { IoIosArrowBack } from 'react-icons/io';
import { electronics, fashion, furniture, jobs, pets, realestate, services } from '../../data';

export const categories = [
    { id: 1, key: "vehicles", name: "السيارات", title: "السيارات والمركبات", desc: "تصفح كل أنواع السيارات والمركبات" },
    { id: 2, key: "realestate", name: "العقارات", title: "العقارات والشقق", desc: "تصفح كل أنواع العقارات والشقق" },
    { id: 3, key: "electronics", name: "الإلكترونيات", title: "الأجهزة والالكترونيات", desc: "تصفح جميع الأجهزة والالكترونيات" },
    { id: 4, key: "jobs", name: "الوظائف", title: "الوظائف بأنواعها", desc: "تصفح جميع أنواع الوظائف" },
    { id: 5, key: "furniture", name: "الأثاث", title: "الأثاث", desc: "تصفح جميع أنواع الأثاث" },
    { id: 6, key: "services", name: "الخدمات", title: "الخدمات بأنواعها", desc: "تصفح جميع أنواع الخدمات" },
    { id: 7, key: "fashion", name: "الأزياء", title: "الأزياء بأنواعها", desc: "تصفح جميع أنواع الأزياء" },
    { id: 8, key: "food", name: "الأطعمة", title: "الأطعمة بأنواعها", desc: "تصفح جميع أنواع الأطعمة" },
    { id: 9, key: "anecdotes", name: "النوادر", title: "النوادر بأنواعها", desc: "تصفح جميع أنواع النوادر" },
    { id: 10, key: "gardens", name: "الحدائق", title: "الحدائق بأنواعها", desc: "تصفح جميع أنواع مستلزمات وزينة الحدائق بسهولة" },
    { id: 11, key: "trips", name: "الرحلات", title: "الرحلات بأنواعها", desc: "اكتشف جميع مستلزمات وأنشطة الرحلات بسهولة" },
    { id: 12, key: "pets", name: "الحيوانات", title: "الحيوانات والمواشي", desc: "تصفح جميع الحيوانات والمواشي" },
];

export default function SpecificCategory() {
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const specificCate = categories.find((cat) => category === cat.key) || "اسم الفئة";
    console.log(categoryData);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`https://api.mashy.sand.alrmoz.com/api/ads?category=${category}&page_num=2`);
                const data = await response.json();
                if (data.success) {
                    setCategoryData(data.data.data.ads);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }

        fetchCategoryData();
    }, [category]);
    return (
        <div className='categoryData_container'>
            {isLoading && <p>loading...</p>}

            {!isLoading && (
                <>
                    <section className='top_section'>
                        <div className="top_section_container">
                            <div className="categoryData_links">
                                <span className="main_link">الرئيسيه </span>
                                <IoIosArrowBack className='arr_icon' />
                                <span className="category_link">{specificCate?.title}</span>
                            </div>

                            <div className="categoryData_header">
                                <h2>{specificCate?.title}</h2>
                                <p>{specificCate?.desc}</p>
                            </div>

                            <div className="attributes_map">
                                {category === "vehicles" &&
                                    [...new Set(categoryData.map((item) => item.attributes.brand))]
                                        .map((brand, index) => (
                                            <button key={index}>{brand}</button>
                                        ))
                                }

                                {category === "realestate" &&
                                    realestate.map((item, index) => (
                                        <button key={index}>{item}</button>
                                    ))
                                }

                                {category === "electronics" &&
                                    electronics.map((item, index) => (
                                        <button key={index}>{item}</button>
                                    ))
                                }

                                {category === "jobs" &&
                                    jobs.map((item, index) => (
                                        <button key={index}>{item}</button>
                                    ))
                                }

                                {category === "pets" &&
                                    pets.map((item, index) => (
                                        <button key={index}>{item}</button>
                                    ))
                                }

                                {category === "services" &&
                                    services.map((item, index) => (
                                        <button key={index}>{item}</button>
                                    ))
                                }

                                {category === "furniture" &&
                                    furniture.map((item, index) => (
                                        <button key={index}>{item}</button>
                                    ))
                                }

                                {category === "fashion" &&
                                    fashion.map((item, index) => (
                                        <button key={index}>{item}</button>
                                    ))
                                }
                            </div>

                        </div>
                    </section>

                    <section className='bottom_section'>
                        <div className="categories_items">
                            {categoryData.map((cat) => (
                                <div
                                    key={cat.id_ads}
                                    className={`categorys-card`}
                                >
                                    <div className="card-image">
                                        <img src={`https://api.mashy.sand.alrmoz.com/storage/${cat.images[0]}`} alt={cat?.information?.title} />
                                    </div>

                                    <div className="card-user">
                                        <img src={cat.user?.user_image} alt={cat?.seller?.name?.split(" ").map(word => word[0]).join("").toUpperCase()} />
                                        <span>{cat.seller?.name}</span>
                                    </div>
                                    <h3>{cat?.information?.title}</h3>
                                    <p>{cat?.information?.description}</p>
                                    <div className="card-meta">
                                        <span>
                                            <CiLocationOn />{cat?.location?.area}
                                        </span>
                                        <span>
                                            <CiStopwatch /> {cat?.location?.time}
                                        </span>
                                    </div>
                                    <Link to={`/${category}/${cat.id_ads}`} className="details-btn">
                                        عرض التفاصيل
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </div>
    )
};