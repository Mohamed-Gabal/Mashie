import React from 'react'

export default function FoodForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className='food_inputs'>
            <div className="input_container">
                <label htmlFor="foodType" className="input_label">نوع الوظيفة*
                    {errors.information?.food?.foodType && touched.information?.food?.foodType && (
                        <div className="info_error">{errors.information?.food?.foodType}</div>
                    )}
                </label>
                <div className="input_field">
                    <input
                        type="text"
                        name="foodType"
                        value={values.information?.food?.foodType}
                        onChange={(e) => setFieldValue("information.food.foodType", e.target.value)}
                        onBlur={handleBlur}
                        id="foodType"
                        className='input'
                        placeholder='أدخل نوع الوظيفة'
                    />
                </div>
            </div>
        </div>
    )
}
