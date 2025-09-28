import React, { useState } from 'react';
import "./ConfirmAd.css";
import { categories } from '../Category/Category';

export default function ConfirmAd({ formik, errorMessage, isLoading, successMessage, setSuccessMessage }) {
    const { values, handleSubmit } = formik;
    const category = categories.find((cat) => values?.category === cat.key);
    if (!category) return null;

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
                <button type='submit' onClick={handleSubmit} className='btn'>
                    <span>انشر إعلانك الأن</span>
                    <img src="./advertisements/Plus.svg" alt="Plus" />
                </button>
                <p>بنشر إعلانك، أنت توافق على سياسة الاستخدام وشروط الخدمة</p>
            </div>

            {/* Modal */}
            <div className="modal fade" style={{ display: successMessage ? "flex" : "none" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="img_avatar">
                                <img src="./advertisements/CheckCircleGreen.svg" alt="CheckCircleGreen" />
                            </div>
                            <h1 className="modal-title">تم نشر إعلانك بنجاح!</h1>
                            <p>إعلانك الآن مرئي لآلاف المشترين المهتمين</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-secondary" onClick={() => { setSuccessMessage(false) }}>
                                <img src="./advertisements/eye.svg" alt="eye" />
                                <span>شاهد إعلانك</span>
                            </button>

                            <div className="special-adver">
                                <h4>
                                    <img src="./advertisements/StarGold.svg" alt="StarGold" />
                                    <span>ميز إعلانك ليظهر في النتائج الأولى</span>
                                </h4>
                                <p>زد من فرص مشاهدة إعلانك بـ 5 أضعاف مع خدمة التمي</p>
                                <button type="button" className="btn btn-primary">
                                    <img src="./advertisements/StarWhite.svg" alt="StarWhite" />
                                    <span>شاهد إعلانك</span>
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <p>سيتم مراجعة إعلانك خلال 24 ساعة للتأكد من مطابقته لشروط الخدمة</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" style={{ display: isLoading ? "flex" : "none" }}>
                <div class="loader" />
            </div>

        </div>
    )
}
