import React, { useEffect } from 'react';
import BlogCard from '../../Components/HomeComponent/BlogCard/BlogCard';
import "./BlogStyle.css"

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className='blog_container'>
            <section className="hero">
                <div className="overlay">
                    <div className="content">
                        <div className="tags">
                            <span className="tag">السيارات</span>
                            <span className="tag">مقالات</span>
                        </div>
                        <h1 className="title">
                            حماية السيارة بالسيراميك؟ ليه لازم تحمي عربيتك
                        </h1>
                    </div>
                </div>
            </section>
            <BlogCard />

            {/* ------------------ AboutUsChoice ------------------ */}
            <div className="auc_container">
                <h2>
                    انضم إلى آلاف المستخدمين وابدأ بيع <br />
                    <span>وشراء ما تريد الآن!</span>
                </h2>
                <p>اكتشف عالماً من الفرص والعروض المميزة في انتظارك</p>
                <button className="auc_btn">
                    <span>ابدأ باستخدام ماشي</span>
                    <div className="left_arrow">
                        <img src="./Icons/aboutUs/ArrowLeft.svg" alt="ArrowLeft" />
                    </div>
                </button>
            </div>
        </div>
    )
};