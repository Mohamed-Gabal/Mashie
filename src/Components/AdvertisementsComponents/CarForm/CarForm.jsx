import React from 'react';
import "./CarForm.css";

export default function CarForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className="category_information">
            <div className="">
                <div className="input_container">
                    <label htmlFor="brand">الماركة*
                        {errors.information?.vehicle?.brand && touched.information?.vehicle?.brand && (
                            <div className="info_error">{errors.information?.vehicle?.brand}</div>
                        )}
                    </label>
                    <input
                        type="text"
                        name="brand"
                        value={values.information?.vehicle?.brand}
                        onChange={(e) => setFieldValue("information.vehicle.brand", e.target.value)}
                        onBlur={handleBlur}
                        id="brand"
                        className='brand_input input'
                        placeholder='أدخل الماركة'
                    />
                </div>

                <div className="input_container">
                    <label htmlFor="model">الموديل*
                    {errors.information?.vehicle?.model && touched.information?.vehicle?.model && (
                            <div className="info_error">{errors.information?.vehicle?.model}</div>
                        )}
                    </label>
                    <input
                    type="text" 
                    name="model"
                    value={values.information?.vehicle?.model}
                    onChange={(e) => setFieldValue("information.vehicle.model", e.target.value)}
                    onBlur={handleBlur}
                    id="model" 
                    className='model_input input' 
                    placeholder='أدخل الموديل' 
                    />
                </div>
            </div>
        </div>
    )
}
