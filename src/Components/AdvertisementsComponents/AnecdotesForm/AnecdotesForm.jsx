import React from 'react';

export default function AnecdotesForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className="input_container">
            <label htmlFor="moreInfo" className="input_label">
                <span>معلومات اضافية</span>
            </label>

            <div className="input_field">
                <input
                    type="text"
                    name="moreInfo"
                    value={values.information?.anecdotes?.moreInfo}
                    onChange={(e) => setFieldValue("information.anecdotes.moreInfo", e.target.value)}
                    onBlur={handleBlur}
                    id="moreInfo"
                    className='input'
                    placeholder='أدخل معلومات اضافية'
                />
            </div>
        </div>
    )
}
