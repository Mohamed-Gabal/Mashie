import React, { useState } from 'react';
import "./ConfirmAd.css";
import { categories } from '../Category/Category';

export default function ConfirmAd({ formik, errorMessage, isLoading }) {
    const { values, handleSubmit } = formik;
    const category = categories.find((cat) => values?.category === cat.key) || "اسم الفئة";

    return (
        <div className="confirmAd_container">
            <header className='confirmAd_header'>
                <h3>مراجعة الإعلان</h3>
                <p>راجع إعلانك قبل نشره</p>
            </header>

            <div className="information_ad">
                <ul className='info_list'>
                    <li>
                        <h4>القسم/الفئة:</h4>
                        <p>{category?.name}</p>
                    </li>
                    <li>
                        <h4>عنوان الإعلان:</h4>
                        <p>{values?.information?.adTitle}</p>
                    </li>
                    <li>
                        <h4>السعر:</h4>
                        <p>{values?.information?.adPrice} ريال سعودي</p>
                    </li>
                    <li>
                        <h4>عدد الصور:</h4>
                        <p>{values?.images.length}</p>
                    </li>
                    <li>
                        <h4>الموقع:</h4>
                        <p>{values?.location?.detailedAddress}</p>
                    </li>
                    <li>
                        <h4>البائع:</h4>
                        <p>{values?.seller?.name}</p>
                    </li>
                </ul>
            </div>

            <div className="btn_confirmAd">
                <button type='submit' className='btn'>
                    <span>انشر إعلانك الأن</span>
                    <img src="./advertisements/Plus.svg" alt="Plus" />
                </button>
                <p>بنشر إعلانك، أنت توافق على سياسة الاستخدام وشروط الخدمة</p>
            </div>

            <div className="modal_fade" style={{ display: isLoading ? "flex" : "none" }}>
                <div className="loader" />
            </div>

        </div>
    )
}
