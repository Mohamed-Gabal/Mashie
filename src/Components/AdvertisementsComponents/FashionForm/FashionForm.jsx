import React from 'react'

export default function FashionForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className="fashion_inputs">
            <div className="input_container">
                <label htmlFor="fashionType">نوع الزي*
                    {errors.information?.fashion?.fashionType && touched.information?.fashion?.fashionType && (
                        <div className="info_error">{errors.information?.fashion?.fashionType}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="fashionType"
                    value={values.information?.fashion?.fashionType}
                    onChange={(e) => setFieldValue("information.fashion.fashionType", e.target.value)}
                    onBlur={handleBlur}
                    id="fashionType"
                    className='fashionType_input input'
                    placeholder='أدخل نوع الجهاز'
                />
            </div>

            <div className="input_container">
                <label htmlFor="moreInfo">معلومات اضافية*
                    {errors.information?.fashion?.moreInfo && touched.information?.fashion?.moreInfo && (
                        <div className="info_error">{errors.information?.fashion?.moreInfo}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="moreInfo"
                    value={values.information?.fashion?.moreInfo}
                    onChange={(e) => setFieldValue("information.fashion.moreInfo", e.target.value)}
                    onBlur={handleBlur}
                    id="moreInfo"
                    className='moreInfo_input input'
                    placeholder='أدخل معلومات اضافية'
                />
            </div>
        </div>
    )
}
