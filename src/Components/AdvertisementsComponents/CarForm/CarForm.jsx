import React, { useState } from 'react';
import "./CarForm.css";
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { vehicles } from '../../../data';

export default function CarForm({ formik }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    const [isCarOptionOpen, setIsCarOptionOpen] = useState(false);

    return (
        <div className="carForm_inputs">
            <div className="brand_container">
                <label htmlFor="brand">الماركة*
                    {errors.information?.vehicle?.brand && touched.information?.vehicle?.brand && (
                        <div className="info_error">{errors.information?.vehicle?.brand}</div>
                    )}
                </label>
                <div className="input_container">
                    <input
                        type="text"
                        name="brand"
                        value={values.information?.vehicle?.brand}
                        onChange={(e) => setFieldValue("information.vehicle.brand", e.target.value)}
                        onClick={()=> setIsCarOptionOpen(!isCarOptionOpen)}
                        onBlur={handleBlur}
                        id="brand"
                        className='brand_input input'
                        placeholder='اختر الماركة'
                    />
                    <span className={`chevron_up ${isCarOptionOpen ? "open" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>
                    </span>
                </div>
                <CustomDropdown isOpen={isCarOptionOpen} setIsOpen={setIsCarOptionOpen} data={vehicles} formik={formik} name="information.vehicle.brand" />
            </div>

            <div className="input_container">
                <label htmlFor="model">الموديل*
                    {errors.information?.vehicle?.model && touched.information?.vehicle?.model && (
                        <div className="info_error">{errors.information?.vehicle?.model}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="model"
                    value={values.information?.vehicle?.model}
                    onChange={(e) => setFieldValue("information.vehicle.model", e.target.value)}
                    onBlur={handleBlur}
                    id="model"
                    className='model_input input'
                    placeholder='أدخل الموديل'
                />
            </div>
        </div>
    )
}
