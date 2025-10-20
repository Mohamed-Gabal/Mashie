import React, { useEffect, useRef, useState } from 'react';
import { CiLocationOn, CiStopwatch } from 'react-icons/ci';
import { Link, useParams } from 'react-router-dom';
import "./SpecificCategory.css"
import { IoIosArrowBack } from 'react-icons/io';
import { attributesMap, specificCategoriesData } from '../../data';
import SaudiRegionsDropdown from '../../Components/AdvertisementsComponents/SaudiRegionsDropdown/SaudiRegionsDropdown';
import SkeletonCard from '../../Components/SkeletonCard/SkeletonCard';

export default function SpecificCategory() {
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const specificCate = specificCategoriesData.find((cat) => category === cat.key) || "اسم الفئة";

    // filtered type
    const [filteredAttributes, setFilteredAttributes] = useState(null);
    const [attributeValue, setAttributeValue] = useState("");
    const filteredCategoriesData = categoryData.filter((item) => {
        if (!filteredAttributes) return true;
        return item.attributes?.[filteredAttributes] === attributeValue;
    });

    const [region, setRegion] = useState("");
    const filteredCategoriesDataByregion = filteredCategoriesData.filter((item) => {
        if (!region || region === "كل المناطق") return true;
        return item?.user?.area === region;
    });

    const [city, setCity] = useState("");
    const filteredCategoriesDataByCity = filteredCategoriesDataByregion.filter((item) => {
        if (!city || city === "كل المدن") return true;
        return item?.user?.city === city;
    });

    // handle search bar
    const searchInputRef = useRef(null);
    const [searchInput, setSearchInput] = useState("");
    const handleSearchButton = () => {
        const value = searchInputRef.current.value.trim();
        setSearchInput(value);
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === "Enter") {
            const value = searchInputRef.current.value.trim();
            setSearchInput(value);
        }
    };

    // Filtered categories by search bar (case-insensitive)
    const filteredCategoriesDataByTitle = filteredCategoriesDataByCity.filter((item) => item?.information?.title?.toLowerCase().includes(searchInput.toLowerCase().trim()))
    console.log(filteredCategoriesDataByTitle);
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchCategoryData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`https://api.mashy.sand.alrmoz.com/api/ealans?category=${category}&per_page=20`);
                const data = await response.json();
                if (data.success) {
                    setCategoryData(data.data.data.ads);
                    setIsLoading(false);
                }
            } catch (error) {
                setErrorMessage(true);
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }

        fetchCategoryData();
    }, [category]);
    return (
        <div className='categoryData_container'>
            {isLoading && (
                <div className='isLoading'>{Array.from({ length: 4 }, (_, i) => (<SkeletonCard key={i} />))}</div>
            )}
            {errorMessage && <p>notwork error</p>}
            {!isLoading && !errorMessage && (
                <>
                    <section className='top_section'>
                        <div className="top_section_container">
                            <div className="categoryData_links">
                                <span className="main_link">الرئيسيه </span>
                                <IoIosArrowBack className='arr_icon' />
                                <span className="category_link">{specificCate?.title}</span>
                            </div>

                            <div className="categoryData_header">
                                <h2>{specificCate?.title}</h2>
                                <p>{specificCate?.desc}</p>
                                <div className="search_input">
                                    <input
                                        type="search"
                                        name="searchByTitle"
                                        ref={searchInputRef}
                                        onKeyDown={handleSearchKeyDown}
                                        id="searchByTitle"
                                        placeholder={specificCate.search}
                                    />
                                    <button type='button' onClick={handleSearchButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                    </button>
                                </div>
                            </div>

                            <div className="attributes_map">
                                <button
                                    className={!filteredAttributes ? "attri_btn_active" : ""}
                                    onClick={() => {
                                        setFilteredAttributes(null);
                                        setAttributeValue("");
                                    }}
                                >
                                    عرض الكل
                                </button>

                                {attributesMap[category]?.data?.map((item, index) => (
                                    <button
                                        key={index}
                                        className={filteredAttributes === attributesMap[category].key && attributeValue === item ? "attri_btn_active" : ""}
                                        onClick={() => { setFilteredAttributes(attributesMap[category].key); setAttributeValue(item); }}
                                    >
                                        {item}
                                    </button>
                                ))}


                                {category === "vehicles" &&
                                    [...new Set(categoryData.map((item) => item.attributes.brand))]
                                        .map((brand, index) => (
                                            <button key={index}>{brand}</button>
                                        ))
                                }
                            </div>

                            <div className="">
                                <SaudiRegionsDropdown setRegion={setRegion} setCity={setCity} />
                            </div>
                        </div>
                    </section>

                    <section className='bottom_section'>
                        <div className="bottom_section_header">
                            <div className="">وجدنا لك {filteredCategoriesDataByTitle?.length} خيارًا</div>
                            <div className=""></div>
                        </div>
                        <div className="categories_items">
                            {filteredCategoriesDataByTitle.map((cat) => (
                                <div
                                    key={cat.id_ads}
                                    className={`category_card`}
                                >
                                    <div className="card_image">
                                        <img
                                            src={cat.images?.[0] ? `https://api.mashy.sand.alrmoz.com/storage/${cat.images[0]}` : "/placeholder.png"}
                                            alt={cat?.information?.title}
                                        />

                                    </div>

                                    <Link to={`/user/${cat?.seller?.name}/${cat?.user?.id_user}`} className="card_user">
                                        {cat.user?.user_image ? (
                                            <img src={cat.user.user_image} alt={cat.seller?.name} />
                                        ) : (
                                            <div className="avatar_placeholder">
                                                {cat?.seller?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}
                                            </div>
                                        )}
                                        <span>{cat.seller?.name}</span>
                                    </Link>

                                    <div className="card_body">
                                        <h3>{cat?.information?.title.substring(0, 18)}...</h3>
                                        <div className="card_meta">
                                            <div className="ciLocationOn">
                                                <CiLocationOn style={{ color: "var(--main-color)", fontSize: "12px", fontWeight: "bold" }} />
                                                <span>{cat?.user?.area || "غير محدد"}</span>
                                            </div>
                                            <div className="ciStopwatch">
                                                <CiStopwatch style={{ color: "var(--main-color)", fontSize: "12px", fontWeight: "bold" }} />
                                                <span>{timeSince(cat.created_at)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`/${category}/${cat.id_ads}`} className="details_link">
                                        عرض التفاصيل
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </div>
    )
};

function toArabicNumbers(number) {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number.toString().split("").map(d => arabicNumbers[d] || d).join("");
}

export function timeSince(dateString) {
    const now = new Date();
    const past = new Date(dateString.replace(" ", "T"));
    const dateOnly = dateString.split(" ")[0];
    const diff = now - past;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 3) return dateOnly;
    if (days > 0) return `${toArabicNumbers(days)} يوم`;
    if (hours > 0) return `${toArabicNumbers(hours)} ساعة`;
    if (minutes > 0) return `${toArabicNumbers(minutes)} دقيقة`;
    return `${toArabicNumbers(seconds)} ثانية`;
}