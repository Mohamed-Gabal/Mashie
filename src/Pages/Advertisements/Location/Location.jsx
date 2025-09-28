import React from 'react';
import "./Location.css";

export default function Location({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className="location_container">
            <div className="location_header">
                <h3>الموقع</h3>
                <p>حدد موقع الإعلان</p>
            </div>

            <div className="input_container">
                <label htmlFor="detailedAddress">العنوان بالتفصيل*
                    {errors.location?.detailedAddress && touched.location?.detailedAddress && (
                        <div className="info_error">{errors.location?.detailedAddress}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="location.detailedAddress"
                    value={values.location.detailedAddress}
                    onChange={(e) => setFieldValue("location.detailedAddress", e.target.value)}
                    onBlur={handleBlur}
                    id="detailedAddress"
                    className='detailedAddress_input input'
                    placeholder='أدخل عنوان واضح'
                />
            </div>

            <div className="input_container">
                <label htmlFor="city">المدينة*
                    {errors.location?.city && touched.location?.city && (
                        <div className="info_error">{errors.location?.city}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="location.city"
                    value={values.location.city}
                    onChange={(e) => setFieldValue("location.city", e.target.value)}
                    onBlur={handleBlur}
                    id="city"
                    className='city_input input'
                    placeholder='اختر االمدينة'
                />
            </div>

            <div className="input_container">
                <label htmlFor="area">المنطقة*
                    {errors.location?.area && touched.location?.area && (
                        <div className="info_error">{errors.location?.area}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="location.area"
                    value={values.location.area}
                    onChange={(e) => setFieldValue("location.area", e.target.value)}
                    onBlur={handleBlur}
                    id="area"
                    className='area_input input'
                    placeholder='اختر منطقتك'
                />
            </div>
        </div>
    )
}
