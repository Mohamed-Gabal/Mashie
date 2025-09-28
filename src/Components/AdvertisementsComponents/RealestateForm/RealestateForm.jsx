import React from 'react';

export default function RealestateForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className='realestate_form'>
            <div className="input_container">
                <label htmlFor="realestateType">نوع العقار*
                    {errors.information?.realestate?.realestateType && touched.information?.realestate?.realestateType && (
                        <div className="info_error">{errors.information?.realestate?.realestateType}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="realestateType"
                    value={values.information?.realestate?.realestateType}
                    onChange={(e) => setFieldValue("information.realestate.realestateType", e.target.value)}
                    onBlur={handleBlur}
                    id="realestateType"
                    className='realestateType_input input'
                    placeholder='العقار'
                />
            </div>

            <div className="input_container">
                <label htmlFor="streetType">نوع الشارع*
                    {errors.information?.realestate?.streetType && touched.information?.realestate?.streetType && (
                        <div className="info_error">{errors.information?.realestate?.streetType}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="streetType"
                    value={values.information?.realestate?.streetType}
                    onChange={(e) => setFieldValue("information.realestate.streetType", e.target.value)}
                    onBlur={handleBlur}
                    id="streetType"
                    className='streetType_input input'
                    placeholder='سكني'
                />
            </div>

            <div className="input_container">
                <label htmlFor="realestateInterface">الواجهة*
                    {errors.information?.realestate?.realestateInterface && touched.information?.realestate?.realestateInterface && (
                        <div className="info_error">{errors.information?.realestate?.realestateInterface}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="realestateInterface"
                    value={values.information?.realestate?.realestateInterface}
                    onChange={(e) => setFieldValue("information.realestate.realestateInterface", e.target.value)}
                    onBlur={handleBlur}
                    id="realestateInterface"
                    className='realestateInterface_input input'
                    placeholder='أدخل الموديل'
                />
            </div>
        </div>
    )
}
