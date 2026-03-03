import React, { useEffect, useRef, useState } from 'react';
import "./Information.css";
import CarForm from '../../../Components/AdvertisementsComponents/CarForm/CarForm';
import { categories } from '../Category/Category';
import FormHeader from '../../../Components/AdvertisementsComponents/FormHeader/FormHeader';
import RealestateForm from '../../../Components/AdvertisementsComponents/RealestateForm/RealestateForm';
import ElectricForm from '../../../Components/AdvertisementsComponents/ElectricForm/ElectricForm';
import JobsForm from '../../../Components/AdvertisementsComponents/JobsForm/JobsForm';
import FurnitureForm from '../../../Components/AdvertisementsComponents/FurnitureForm/FurnitureForm';
import ServicesForm from '../../../Components/AdvertisementsComponents/ServicesForm/ServicesForm';
import FashionForm from '../../../Components/AdvertisementsComponents/FashionForm/FashionForm';
import FoodForm from '../../../Components/AdvertisementsComponents/FoodForm/FoodForm';
import AnecdotesForm from '../../../Components/AdvertisementsComponents/AnecdotesForm/AnecdotesForm';
import PetsForm from '../../../Components/AdvertisementsComponents/PetsForm/PetsForm';
import GardensForm from '../../../Components/AdvertisementsComponents/GardensForm/GardensForm';
import TripsForm from '../../../Components/AdvertisementsComponents/TripsForm/TripsForm';

export default function Information({ formik, prevStep }) {
    const { values, setFieldValue, errors, handleBlur, touched } = formik;
    const category = categories.find(cat => cat.key === values.category);
    if (!category) return null;

    const titleInputRef = useRef(null);
    useEffect(() => {
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, []);

    return (
        <div className="information_container">
            <div className="basicData">
                <header className='information_header'>
                    <div className="circle">
                        1
                    </div>
                    <div className="text">
                        <h1>البيانات الأساسية</h1>
                        <p>ادخل عنوان و وصف واضح للإعلان</p>
                    </div>
                </header>

                <div className="inputs_group">
                    <div className="input_container">
                        <label htmlFor="adTitle" className="input_label">عنوان الإعلان*
                            {errors.information?.adTitle && touched.information?.adTitle && (
                                <div className="info_error">{errors.information.adTitle}</div>
                            )}
                        </label>

                        <div className="input_field">
                            <input
                                ref={titleInputRef}
                                type="text"
                                name="information.adTitle"
                                value={values.information?.adTitle}
                                onChange={(e) => setFieldValue("information.adTitle", e.target.value)}
                                onBlur={handleBlur}
                                id="adTitle"
                                className='input'
                                placeholder='أدخل عنوان واضح'
                            />
                        </div>
                    </div>

                    <div className="textarea_container">
                        <label htmlFor="adDescription" className="input_label"> الوصف*
                            {errors.information?.adDescription && touched.information?.adDescription && (
                                <div className="info_error">{errors.information.adDescription}</div>
                            )}
                        </label>
                        <textarea
                            type="text"
                            name="information.adDescription"
                            value={values.information?.adDescription}
                            onChange={(e) => setFieldValue("information.adDescription", e.target.value)}
                            onBlur={handleBlur}
                            id="adDescription"
                            rows={3}
                            className='input'
                            placeholder='أدخل وصفك هنا...'
                        />
                    </div>

                    <div className="input_Price">
                        <div className="input_container">
                            <label htmlFor="adPrice" className="input_label"><span>السعر (ريال سعودي)</span> <span className='main_text'> (اختياري)</span></label>
                            <div className="input_field">
                                <input
                                    type="text"
                                    name="information.adPrice"
                                    value={values.information.adPrice}
                                    onChange={(e) => setFieldValue("information.adPrice", e.target.value)}
                                    onBlur={handleBlur}
                                    id="adPrice"
                                    className='input'
                                    placeholder='أدخل سعرك هنا'
                                />
                                <span className='price_type'>ر.س</span>
                                {errors.information?.adPrice && touched.information?.adPrice && (
                                    <div className="info_error">{errors.information.adPrice}</div>
                                )}
                            </div>
                        </div>

                        {values?.information?.adPrice && !errors.information?.adPrice && (
                            <div className="switch-item">
                                <p>التفاوض علي السعر</p>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        name="information.isNegotiable"
                                        checked={values.information.isNegotiable}
                                        onChange={(e) => { setFieldValue("information.isNegotiable", e.target.checked) }}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div className="basic_category_data">
                <div className="">
                    <FormHeader img={category.icon} title={category.title} desc={category.desc} prevStep={prevStep} />
                    {category.key === "vehicles" && <CarForm formik={formik} />}
                    {category.key === "realestate" && <RealestateForm formik={formik} />}
                    {category.key === "electronics" && <ElectricForm formik={formik} />}
                    {category.key === "jobs" && <JobsForm formik={formik} />}
                    {category.key === "furniture" && <FurnitureForm formik={formik} />}
                    {category.key === "services" && <ServicesForm formik={formik} />}
                    {category.key === "fashion" && <FashionForm formik={formik} />}
                    {category.key === "food" && <FoodForm formik={formik} />}
                    {category.key === "anecdotes" && <AnecdotesForm formik={formik} />}
                    {category.key === "gardens" && <GardensForm formik={formik} />}
                    {category.key === "trips" && <TripsForm formik={formik} />}
                    {category.key === "pets" && <PetsForm formik={formik} />}
                </div>
            </div>
        </div>
    )
}
