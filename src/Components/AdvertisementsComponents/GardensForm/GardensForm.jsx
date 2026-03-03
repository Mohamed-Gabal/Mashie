import React from 'react'

export default function GardensForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className="input_container">
            <label htmlFor="moreInfo" className="input_label">معلومات اضافية
            </label>
            <div className="input_field">
                <input
                    type="text"
                    name="moreInfo"
                    value={values.information?.gardens?.moreInfo}
                    onChange={(e) => setFieldValue("information.gardens.moreInfo", e.target.value)}
                    onBlur={handleBlur}
                    id="moreInfo"
                    className='input'
                    placeholder='أدخل معلومات اضافية'
                />
            </div>
        </div>
    )
};