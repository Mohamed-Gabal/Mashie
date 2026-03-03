import React, { useState } from 'react';
import { pets } from '../../../data';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export default function PetsForm({ formik }) {
    const { values, setFieldValue, errors } = formik;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="input_container">
            <header className="input_label">
                <span>معلومات اضافية</span>
                {errors.information?.pets?.animalType && (
                    <div className="info_error">{errors.information?.pets?.animalType}</div>
                )}
            </header>

            <div className="input_field">
                <input
                    type="text"
                    name="information.pets.animalType"
                    value={values.information?.pets?.animalType}
                    onChange={(e) => setFieldValue("information.pets.animalType", e.target.value)}
                    onClick={() => setIsOpen(true)}
                    id="moreInfo"
                    className='input'
                    placeholder='أدخل معلومات اضافية'
                />
                <div className="arrow_up">
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "open" : ""}><path d="m18 15-6-6-6 6" /></svg>
                </div>
            </div>

            <CustomDropdown isOpen={isOpen} setIsOpen={setIsOpen} data={pets} formik={formik} name="information.pets.animalType" />
        </div>
    )
};