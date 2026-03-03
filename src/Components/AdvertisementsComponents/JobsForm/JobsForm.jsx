import React, { useState } from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { jobs } from '../../../data';
import "./jobsFormStyle.css"

export default function JobsForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='input_container'>
            <label htmlFor="jobType" className="input_label">نوع الوظيفة*
                {errors.information?.jobs?.jobType && touched.information?.jobs?.jobType && (
                    <div className="info_error">{errors.information?.jobs?.jobType}</div>
                )}
            </label>

            <div className="input_field">
                <input
                    type="text"
                    name="information.jobs.jobType"
                    value={values.information?.jobs?.jobType}
                    onChange={(e) => setFieldValue("information.jobs.jobType", e.target.value)}
                    onClick={() => setIsOpen(!isOpen)}
                    onBlur={handleBlur}
                    id="jobType"
                    className='input'
                    placeholder='أدخل نوع الوظيفة'
                />
                <div className="arrow_up">
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "open" : ""}><path d="m18 15-6-6-6 6" /></svg>
                </div>
                <CustomDropdown isOpen={isOpen} setIsOpen={setIsOpen} data={jobs} formik={formik} name="information.jobs.jobType" />
            </div>
        </div>
    )
}
