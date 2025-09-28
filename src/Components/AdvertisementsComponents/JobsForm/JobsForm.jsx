import React from 'react';
import "./JobsForm.css"

export default function JobsForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className='jobs_inputs'>
            <div className="input_container">
                <label htmlFor="jobType">نوع الوظيفة*
                    {errors.information?.jobs?.jobType && touched.information?.jobs?.jobType && (
                        <div className="info_error">{errors.information?.jobs?.jobType}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="jobType"
                    value={values.information?.jobs?.jobType}
                    onChange={(e) => setFieldValue("information.jobs.jobType", e.target.value)}
                    onBlur={handleBlur}
                    id="jobType"
                    className='jobType_input input'
                    placeholder='أدخل نوع الوظيفة'
                />
            </div>
        </div>
    )
}
