import React from 'react';
import "./LoginRequiredCard.css"

export default function LoginRequiredCard() {
    return (
        <div className='loginRequiredCard'>
            <div className="card">
                <div className="img_wrapper">
                    <img src="./advertisements/unauthenticated.png" alt="LoginRequiredCard" />
                </div>

                <div className="">
                    {/* text */}
                    <h2 className="title">تسجيل الدخول مطلوب</h2>
                    <p className="subtitle">
                        "لإضافة عرض جديد، سجل دخولك أولاً أو أنشئ حساب جديد"
                    </p>

                    {/* button */}
                    <button className="btn-primary">تسجيل دخول</button>
                    <button className="btn-secondary">إنشاء حساب</button>
                </div>
            </div>
        </div>
    )
}
