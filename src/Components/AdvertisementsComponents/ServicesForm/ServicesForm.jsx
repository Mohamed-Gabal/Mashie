import React from 'react'

export default function ServicesForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className='services_inputs'>
        <div className="input_container">
            <label htmlFor="servicesType">نوع الخدمة*
                {errors.information?.services?.servicesType && touched.information?.services?.servicesType && (
                    <div className="info_error">{errors.information?.services?.servicesType}</div>
                )}
            </label>
            <input
                type="text"
                name="servicesType"
                value={values.information?.services?.servicesType}
                onChange={(e) => setFieldValue("information.services.servicesType", e.target.value)}
                onBlur={handleBlur}
                id="servicesType"
                className='servicesType_input input'
                placeholder='أدخل نوع الأثاث'
            />
        </div>
    </div>
    )
}
