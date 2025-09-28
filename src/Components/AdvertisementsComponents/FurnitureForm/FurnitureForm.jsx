import React from 'react';
import "./FurnitureForm.css"

export default function FurnitureForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className='furniture_inputs'>
            <div className="input_container">
                <label htmlFor="furnitureType">نوع الأثاث*
                    {errors.information?.furniture?.furnitureType && touched.information?.furniture?.furnitureType && (
                        <div className="info_error">{errors.information?.furniture?.furnitureType}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="furnitureType"
                    value={values.information?.furniture?.furnitureType}
                    onChange={(e) => setFieldValue("information.furniture.furnitureType", e.target.value)}
                    onBlur={handleBlur}
                    id="furnitureType"
                    className='furnitureType_input input'
                    placeholder='أدخل نوع الأثاث'
                />
            </div>
        </div>
    )
}

