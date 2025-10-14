import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./locationFormStyle.css";
import { useCookies } from 'react-cookie';

export const saudiRegions = [
    {
        id: 1,
        region: "الرياض",
        cities: ["الخرج", "الدرعية", "الدوادمي", "المجمعة", "القويعية", "وادي الدواسر", "الزلفي", "شقراء", "الأفلاج", "الغاط", "عفيف", "حوطة بني تميم", "الحريق", "السليل", "ضرماء", "المزاحمية", "ثادق", "رماح", "حريملاء", "مرات", "الدلم"]
    },
    {
        id: 2,
        region: "مكة المكرمة",
        cities: ["جدة", "الطائف", "القنفذة", "رابغ", "الليث", "الجموم", "خليص", "الكامل", "الخرمة", "رنية", "تربة", "المويه", "أضم", "ميسان", "بحرة"]
    },
    {
        id: 3,
        region: "المدينة المنورة",
        cities: ["المدينة المنورة", "ينبع", "العلا", "خيبر", "بدر", "الحناكية", "المهد", "العيص", "وادي الفرع", "الرايس"]
    },
    {
        id: 4,
        region: "القصيم",
        cities: ["بريدة", "عنيزة", "الرس", "المذنب", "البدائع", "البكيرية", "الأسياح", "رياض الخبراء", "عيون الجواء", "الشماسية"]
    },
    {
        id: 5,
        region: "المنطقة الشرقية",
        cities: ["الدمام", "الخبر", "الأحساء", "القطيف", "الجبيل", "رأس تنورة", "الخفجي", "النعيرية", "بقيق", "حفر الباطن"]
    },
    {
        id: 6,
        region: "عسير",
        cities: ["أبها", "خميس مشيط", "محايل عسير", "النماص", "تنومة", "رجال ألمع", "بيشة", "تثليث", "ظهران الجنوب", "سراة عبيدة"]
    },
    {
        id: 7,
        region: "تبوك",
        cities: ["تبوك", "الوجه", "أملج", "ضباء", "حقل", "تيماء", "البدع", "شرما", "المويلح", "المغاربة"]
    },
    {
        id: 8,
        region: "حائل",
        cities: ["حائل", "بقعاء", "الغزالة", "الشنان", "الحائط", "الشملي", "موقق", "السليمي", "سميراء", "تربه"]
    },
    {
        id: 9,
        region: "الحدود الشمالية",
        cities: ["عرعر", "رفحاء", "طريف", "العويقيلة", "شعبة نصاب", "الهباس", "جديدة عرعر", "الدويد", "أم خنصر", "الحيانية"]
    },
    {
        id: 10,
        region: "جازان",
        cities: ["جازان", "صبيا", "أبو عريش", "صامطة", "بيش", "الدرب", "فرسان", "العارضة", "الريث", "فيفاء"]
    },
    {
        id: 11,
        region: "نجران",
        cities: ["نجران", "شرورة", "حبونا", "بدر الجنوب", "يدمة", "ثار", "الخرخير", "خباش", "المشعلية", "رجلا"]
    },
    {
        id: 12,
        region: "الباحة",
        cities: ["الباحة", "بلجرشي", "المندق", "المخواة", "قلوة", "العقيق", "القرى", "بني حسن", "غامد الزناد", "الحجرة"]
    },
    {
        id: 13,
        region: "الجوف",
        cities: ["سكاكا", "القريات", "دومة الجندل", "طبرجل", "الفياض", "ميقوع", "الرديفة", "عين الحواس", "الطوير", "الشويحطية"]
    }
];

export default function LocationForm() {
    const [cookies] = useCookies(["token"]);
    const token = cookies?.token?.data?.token;
    const [isLoading, setIsLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState(null);
    const [isOpenRegion, setIsOpenRegion] = useState(false);
    const [isOpenCity, setIsOpenCity] = useState(false);

    const RegionDropdownRef = useRef(null);
    const cityDropdownRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            location: "",
            area: "",
            city: "",
        },
        validationSchema: Yup.object({
            location: Yup.string()
                .required("العنوان بالتفصيل مطلوب")
                .min(5, "العنوان قصير جدًا"),
            area: Yup.string().required("المنطقة مطلوبة"),
            city: Yup.string()
                .required("المدينة مطلوبة")
                .when("area", {
                    is: (area) => !area,
                    then: (schema) =>
                        schema.test("no-area", "يرجى اختيار المنطقة أولاً", () => false),
                }),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            setServerMessage(null);

            try {
                const response = await axios.post(
                    "https://api.mashy.sand.alrmoz.com/api/complete-location",
                    {
                        city: values.city,
                        area: values.area,
                        location: values.location,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log("تم إرسال البيانات بنجاح:", response.data);
                setServerMessage("تم حفظ الموقع بنجاح!");
            } catch (error) {
                console.error("خطأ أثناء الإرسال:", error);
                setServerMessage(
                    error.response?.data?.message || "حدث خطأ أثناء حفظ الموقع"
                );
            } finally {
                setIsLoading(false);
            }
        },
    });

    const { values, setFieldValue, errors, handleBlur, touched, handleSubmit } = formik;

    const handleSelectRegion = (region) => {
        setFieldValue("area", region);
        setFieldValue("city", "");
        setIsOpenRegion(false);
    };

    const handleSelectCity = (city) => {
        setFieldValue("city", city);
        setIsOpenCity(false);
    };

    const filteredRegions = saudiRegions.filter((region) =>
        region.region.includes(values.area)
    );

    const selectedRegion = saudiRegions.find((region) => region.region === values.area);

    const filteredCities = selectedRegion?.cities.filter((city) =>
        city.includes(values.city)
    ) || [];

    // إغلاق القوائم لما تضغط بره
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (RegionDropdownRef.current && !RegionDropdownRef.current.contains(event.target)) {
                setIsOpenRegion(false);
            }
            if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
                setIsOpenCity(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <form className="location_container" onSubmit={handleSubmit}>
            <div className="location_header">
                <h3>الموقع</h3>
            </div>

            {/* اختيار المنطقة */}
            <div className="input_container" ref={RegionDropdownRef}>
                <label htmlFor="area">
                    المنطقة*
                    {errors.area && touched.area && (
                        <div className="info_error">{errors.area}</div>
                    )}
                </label>
                <div className="area_input">
                    <input
                        type="text"
                        name="area"
                        value={values.area}
                        onClick={() => setIsOpenRegion(true)}
                        onChange={(e) => setFieldValue("area", e.target.value)}
                        id="area"
                        className="input"
                        placeholder="ادخل منطقتك"
                    />
                    <img src="./advertisements/CaretDown.svg" alt="CaretDown" />

                    {isOpenRegion && filteredRegions.length > 0 && (
                        <ul className="region_option">
                            {filteredRegions.map((region) => (
                                <li
                                    key={region.id}
                                    onClick={() => handleSelectRegion(region.region)}
                                >
                                    {region.region}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* اختيار المدينة */}
            <div className="input_container" ref={cityDropdownRef}>
                <label htmlFor="city">
                    المدينة*
                    {errors.city && touched.city && (
                        <div className="info_error">{errors.city}</div>
                    )}
                </label>
                <div className="city_input">
                    <input
                        type="text"
                        name="city"
                        value={values.city}
                        onClick={() => setIsOpenCity(true)}
                        onChange={(e) => setFieldValue("city", e.target.value)}
                        id="city"
                        className="input"
                        placeholder="ادخل المدينة"
                    />
                    <img src="./advertisements/CaretDown.svg" alt="CaretDown" />

                    {isOpenCity && filteredCities.length > 0 && (
                        <ul className="city_option">
                            {filteredCities.map((city, id) => (
                                <li key={id} onClick={() => handleSelectCity(city)}>
                                    {city}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* حقل العنوان */}
            <div className="input_container">
                <label htmlFor="location">
                    العنوان بالتفصيل*
                    {errors.location && touched.location && (
                        <div className="info_error">{errors.location}</div>
                    )}
                </label>
                <input
                    type="text"
                    name="location"
                    value={values.location}
                    onChange={formik.handleChange}
                    onBlur={handleBlur}
                    id="location"
                    className="location_input input"
                    placeholder="الرياض - الخرج - اليمامة - حي النسيم"
                />
            </div>

            {/* زر الحفظ */}
            <button type="submit" className="submit_btn" disabled={isLoading}>
                {isLoading ? "جارٍ الحفظ..." : "حفظ"}
            </button>

            {/* رسالة الخادم */}
            {serverMessage && <p className="server_message">{serverMessage}</p>}
        </form>
    );
};