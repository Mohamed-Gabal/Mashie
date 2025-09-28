import React, { useState } from 'react';
import "./SellerData.css"

export default function SellerData({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    
    return (
        <div className="sellerData_container">
            <header className='sellerData_header'>
                <h3>معلومات البائع</h3>
                <p>أضف بياناتك للتواصل مع المشترين</p>
            </header>

            <div className="input_container">
                <label htmlFor="sellerName">الاسم*
                    {errors.seller?.name && touched.seller?.name && (
                        <div className="info_error">{errors.seller?.name}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="seller.name"
                    value={values.seller.name}
                    onChange={(e) => setFieldValue("seller.name", e.target.value)}
                    onBlur={handleBlur}
                    id="sellerName"
                    className='sellerName_input input'
                    placeholder='أدخل اسمك' />
            </div>

            <div className="input_container">
                <label htmlFor="sellerPhone">رقم الجوال*
                    {errors.seller?.phone && touched.seller?.phone && (
                        <div className="info_error">{errors.seller?.phone}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="seller.phone"
                    value={values.seller.phone}
                    onChange={(e) => setFieldValue("seller.phone", e.target.value)}
                    onBlur={handleBlur}
                    id="sellerPhone"
                    className='sellerPhone_input input'
                    placeholder='05xxxxxxxxxx' />
            </div>

            <div className="webMessage_item">
                <div className="text">
                    <h4>السماح بالرسائل عبر الموقع</h4>
                    <p>يمكن للمشترين التواصل معك عبر نظام الرسائل الداخلي</p>
                </div>
                <label className="switch">
                    <input
                        type="checkbox"
                        name="seller.webMessage"
                        id='webMessage'
                        checked={values.seller.webMessage}
                        onChange={(e) => { setFieldValue("seller.webMessage", e.target.checked) }}
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}
