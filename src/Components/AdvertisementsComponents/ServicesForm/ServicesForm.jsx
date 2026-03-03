import React, { useState } from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { services } from '../../../data';

export default function ServicesForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='input_container'>
            <label htmlFor="information.services.servicesType" className="input_label">نوع الخدمة*
                {errors.information?.services?.servicesType && touched.information?.services?.servicesType && (
                    <div className="info_error">{errors.information?.services?.servicesType}</div>
                )}
            </label>

            <div className="input_field">
                <input
                    type="text"
                    name="information.services.servicesType"
                    value={values.information?.services?.servicesType}
                    onChange={(e) => setFieldValue("information.services.servicesType", e.target.value)}
                    onClick={() => setIsOpen(!isOpen)}
                    onBlur={handleBlur}
                    id="servicesType"
                    className='input'
                    placeholder='أدخل نوع الأثاث'
                />
                <div className="arrow_up">
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "open" : ""}><path d="m18 15-6-6-6 6" /></svg>
                </div>
            </div>
            <CustomDropdown isOpen={isOpen} setIsOpen={setIsOpen} data={services} formik={formik} name="information.services.servicesType" />
        </div>
    )
}
