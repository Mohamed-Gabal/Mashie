import React, { useState } from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { electronics } from '../../../data';
import "./electricFormStyle.css"

export default function ElectricForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="electronics_inputs">
            <div className="input_container">
                <label htmlFor="information.electronics.deviceType" className="input_label">نوع الجهاز*
                    {errors.information?.electronics?.deviceType && touched.information?.electronics?.deviceType && (
                        <div className="info_error">{errors.information?.electronics?.deviceType}</div>
                    )}
                </label>
                <div className="input_field">
                    <input
                        type="text"
                        name="information.electronics.deviceType"
                        value={values.information?.electronics?.deviceType}
                        onChange={(e) => setFieldValue("information.electronics.deviceType", e.target.value)}
                        onClick={() => setIsOpen(!isOpen)}
                        onBlur={handleBlur}
                        id="deviceType"
                        className='input'
                        placeholder='أدخل نوع الجهاز'
                    />
                    <div className="arrow_up">
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "open" : ""}><path d="m18 15-6-6-6 6" /></svg>
                    </div>
                </div>
                <CustomDropdown isOpen={isOpen} setIsOpen={setIsOpen} data={electronics} formik={formik} name="information.electronics.deviceType" />
            </div>

            <div className="input_container">
                <label htmlFor="moreInfo" className="input_label">معلومات اضافية*
                    {errors.information?.electronics?.moreInfo && touched.information?.electronics?.moreInfo && (
                        <div className="info_error">{errors.information?.electronics?.moreInfo}</div>
                    )}
                </label>
                <div className="input_field">
                    <input
                        type="text"
                        name="moreInfo"
                        value={values.information?.electronics?.moreInfo}
                        onChange={(e) => setFieldValue("information.electronics.moreInfo", e.target.value)}
                        onBlur={handleBlur}
                        id="moreInfo"
                        className='input'
                        placeholder='أدخل معلومات اضافية'
                    />
                </div>
            </div>
        </div>
    )
};