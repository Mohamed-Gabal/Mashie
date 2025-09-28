import React from 'react';
import "./ElectricForm.css"

export default function ElectricForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    return (
        <div className="electronics_inputs">
            <div className="input_container">
                <label htmlFor="deviceType">نوع الجهاز*
                    {errors.information?.electronics?.deviceType && touched.information?.electronics?.deviceType && (
                        <div className="info_error">{errors.information?.electronics?.deviceType}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="deviceType"
                    value={values.information?.electronics?.deviceType}
                    onChange={(e) => setFieldValue("information.electronics.deviceType", e.target.value)}
                    onBlur={handleBlur}
                    id="deviceType"
                    className='deviceType_input input'
                    placeholder='أدخل نوع الجهاز'
                />
            </div>

            <div className="input_container">
                <label htmlFor="moreInfo">معلومات اضافية*
                    {errors.information?.electronics?.moreInfo && touched.information?.electronics?.moreInfo && (
                        <div className="info_error">{errors.information?.electronics?.moreInfo}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="moreInfo"
                    value={values.information?.electronics?.moreInfo}
                    onChange={(e) => setFieldValue("information.electronics.moreInfo", e.target.value)}
                    onBlur={handleBlur}
                    id="moreInfo"
                    className='moreInfo_input input'
                    placeholder='أدخل معلومات اضافية'
                />
            </div>
        </div>
    )
}
