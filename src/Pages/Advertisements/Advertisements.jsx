import React, { useState } from 'react'
import AddHeader from '../../Components/AdvertisementsComponents/AddHeader/AddHeader';
import Category from './Category/Category';
import './style.css'
import Information from './Information/Information';
import UploadImages from './UploadImages/UploadImages';
import Location from './Location/Location';
import SellerData from './SellerData/SellerData';
import ConfirmAd from './ConfirmAd/ConfirmAd';
import { validationSchemas } from "./validationSchemas";
import { useFormik } from 'formik';
import axios from "axios";

export default function Advertisements() {
    // Step management: 1=category, 2=details, 3=review
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);

    const formik = useFormik({
        initialValues: {
            category: "",
            information: {
                adTitle: "",
                adDescription: "",
                adPrice: "",
                isNegotiable: true,

                vehicle: {
                    brand: "",
                    model: "",
                },

                realestate: {
                    realestateType: "",
                    streetType: "",
                    realestateInterface: "",
                },

                electronics: {
                    deviceType: "",
                    moreInfo: "",
                },

                jobs: {
                    jobType: "",
                },

                furniture: {
                    furnitureType: "",
                },

                services: {
                    servicesType: "",
                },

                fashion: {
                    fashionType: "",
                    moreInfo: "",
                },

                food: {
                    foodType: "",
                },

                pets: {
                    moreInfo: "",
                },

                anecdotes: {
                    moreInfo: "",
                },

                gardens: {
                    moreInfo: "",
                },

                trips: {
                    moreInfo: "",
                },
            },
            images: [],
            location: {
                detailedAddress: "",
                city: "",
                area: "",
            },
            seller: {
                name: "",
                phone: "",
                webMessage: true,
            },
        },
        validationSchema: validationSchemas[step],
        onSubmit: async () => {
            setIsLoading(true);
            setErrorMessage("");
            try {
                const formData = new FormData();
                // الفئة
                formData.append("category", formik.values.category);

                // معلومات الإعلان
                formData.append("information[adTitle]", formik.values.information.adTitle);
                formData.append("information[adDescription]", formik.values.information.adDescription);
                formData.append("information[adPrice]", formik.values.information.adPrice);
                formData.append("information[isNegotiable]", formik.values.information.isNegotiable ? 1 : 0);

                // العنوان
                formData.append("location[detailedAddress]", formik.values.location.detailedAddress);
                formData.append("location[city]", formik.values.location.city);
                formData.append("location[area]", formik.values.location.area);

                // البائع
                formData.append("seller[name]", formik.values.seller.name);
                formData.append("seller[phone]", formik.values.seller.phone);
                formData.append("seller[webMessage]", formik.values.seller.webMessage ? 1 : 0);

                // الصور
                formik.values.images.forEach((file, index) => {
                    formData.append(`images[${index}]`, file);
                });

                // category إضافية بيانات حسب
                if (formik.values.category === "vehicles") {
                    formData.append("information[vehicle][brand]", formik.values.information.vehicle.brand);
                    formData.append("information[vehicle][model]", formik.values.information.vehicle.model);
                }

                if (formik.values.category === "realestate") {
                    formData.append("information[realestate][realestateType]", formik.values.information.realestate.realestateType);
                    formData.append("information[realestate][streetType]", formik.values.information.realestate.streetType);
                    formData.append("information[realestate][realestateInterface]", formik.values.information.realestate.realestateInterface);
                }

                if (formik.values.category === "electronics") {
                    formData.append("information[electronics][deviceType]", formik.values.information.electronics.deviceType);
                    formData.append("information[electronics][moreInfo]", formik.values.information.electronics.moreInfo);
                }

                if (formik.values.category === "jobs") {
                    formData.append("information[jobs][jobType]", formik.values.information.jobs.jobType);
                }

                if (formik.values.category === "furniture") {
                    formData.append("information[furniture][furnitureType]", formik.values.information.furniture.furnitureType);
                }

                if (formik.values.category === "services") {
                    formData.append("information[service][serviceType]", formik.values.information.services.servicesType);
                }

                if (formik.values.category === "fashion") {
                    formData.append("information[fashion][fashionType]", formik.values.information.fashion.fashionType);
                    formData.append("information[fashion][moreInfo]", formik.values.information.fashion.moreInfo);
                }

                if (formik.values.category === "food") {
                    formData.append("information[food][foodType]", formik.values.information.food.foodType);
                }

                if (formik.values.category === "pets") {
                    formData.append("information[pets][animalType]", formik.values.information.pets.moreInfo);
                }

                if (formik.values.category === "gardens") {
                    formData.append("information[gardens][gardenType]", formik.values.information.gardens.moreInfo);
                }

                if (formik.values.category === "trips") {
                    formData.append("information[trip][tripType]", formik.values.information.trips.moreInfo);
                }

                if (formik.values.category === "anecdotes") {
                    formData.append("information[anecdotes][anecdoteType]", formik.values.information.anecdotes.moreInfo);
                }

                const response = await axios.post(
                    "https://api.mashy.sand.alrmoz.com/api/ads",
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );
                console.log(response.data);
                setSuccessMessage(true);
                if (response?.data?.success) {
                    formik.resetForm();
                    setStep(1);
                }
            } catch (error) {
                setErrorMessage(error.response?.message || error.message)
                console.error("Error submitting ad:", error.response?.data || error.message);
            } finally {
                setIsLoading(false);
            };

        },
        validateOnChange: true,
        validateOnBlur: true,
    });

    const nextStep = async () => {
        try {
            let schema = validationSchemas[step];
            if (typeof schema === "function") {
                schema = schema(formik.values.category);
            }
            await schema.validate(formik.values, { abortEarly: false });

            if (step < 6) setStep(step + 1);
        } catch (err) {
            if (err.inner) {
                err.inner.forEach((e) => {
                    formik.setFieldError(e.path, e.message);
                    formik.setFieldTouched(e.path, true, false);
                });
            }
        }
    };



    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <form onSubmit={formik.handleSubmit} className='Advertisements'>
            {/* header */}
            <AddHeader currentStep={step} />

            {/* الخطوة الأولى */}
            {step === 1 && (
                <Category formik={formik} />
            )}

            {/* المعلومات  */}
            {step === 2 && (
                <Information formik={formik} prevStep={prevStep} />
            )}

            {/* رفع الصور */}
            {step === 3 && (
                <UploadImages formik={formik} />
            )}

            {/* رفع الموقع */}
            {step === 4 && (
                <Location formik={formik} />
            )}

            {/* بيانات البائع */}
            {step === 5 && (
                <SellerData formik={formik} />
            )}

            {/* التاكيد */}
            {step === 6 && (
                <ConfirmAd formik={formik} isLoading={isLoading} errorMessage={errorMessage} successMessage={successMessage} setSuccessMessage={setSuccessMessage} />
            )}

            <div className="buttons">
                <button type='button' className="btn prev" style={{ opacity: step === 1 ? 0 : 1 }} onClick={prevStep}>
                    <img src="./advertisements/ArrowRight.svg" alt="ArrowRight" className='arrowPrev' />
                    <span>السابق</span>
                </button>
                <button
                    type='button'
                    className="btn next"
                    onClick={nextStep}
                    style={{ opacity: step < 6 ? 1 : 0 }}
                >
                    <span>التالي</span>
                    <img src="./advertisements/ArrowLeft.svg" alt="ArrowLeft" className='arrowNext' />
                </button>
            </div>
        </form>
    )
}
