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

            {/* إتفاقية الرسوم*/}
            <div className="fee_agreement">
                <div className="terms_section">
                    <label className="terms_label">
                        <input
                            type="checkbox"
                            name="feeAgreement"
                            id="feeAgreement"
                            checked={values.feeAgreement || false}
                            onChange={(e) => formik.setFieldValue("feeAgreement", e.target.checked)}
                            className="terms_checkbox"
                        />
                    </label>
                </div>
                
                <div className="text">
                    <p>اتعهد واقسم بالله أنا المعلن أن أدفع رسوم الموقع وهي 1% من قيمة البيع سواء تم البيع عن طريق الموقع أو بسببه.</p>
                    <p>كما أتعهد بدفع الرسوم خلال 10 أيام من استلام كامل مبلغ المبايعة.</p>
                </div>   
            </div>
            {values.feeAgreement && (
                <div className="btn_confirmAd">
                    <button type='submit' className='btn'>
                        <span>انشر إعلانك الأن</span>
                        <img src="./advertisements/Plus.svg" alt="Plus" />
                    </button>
                    <p>بنشر إعلانك، أنت توافق على سياسة الاستخدام وشروط الخدمة</p>
                </div>
            )}

            <div className="modal_fade" style={{ display: isLoading ? "flex" : "none" }}>
                <div className="loader" />
            </div>

        </div>
    )
}
