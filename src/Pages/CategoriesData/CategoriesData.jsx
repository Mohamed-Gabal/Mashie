
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useCategoryAds from "../../Services/categoreyService";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const CategoriesData = () => {
  const { slug } = useParams(); // اسم القسم من الـ URL
  const { data, loading } = useCategoryAds(slug);

  const [selectBrand, setSelectBrand] = useState("all");

  if (loading) return <p>جاري تحميل البيانات...</p>;

  // =========================
  // 1) جدول الأقسام والمفاتيح
  // =========================
  const categoryKeyMap = {
    vehicles: "brand",
    electronics: "electronicType",
    fashion: "fashionType",
    furniture: "furnitureType",
    jobs: "jobType",
    realestate: "realestateFace",
    pets: "animalType",
    services: "serviceType",
    food: "foodType",
    anecdotes: "anecdoteType",
    gardens: "gardenType",
    trips: "tripType",
  };

  // المفتاح المناسب حسب القسم
  const mainKey = categoryKeyMap[slug] || "brand";
  
  // 2) استخراج البيانات
  // =========================
  const mainOptions = data? [...new Set(data.map((e) => e.attribut?.[mainKey]))].filter(Boolean): [];

  const brandButtonsData = ["جميع الانواع", ...mainOptions];

  // =========================
  // 3) فلترة الإعلانات
  // =========================
  const filterAds =
    selectBrand === "all"
      ? data
      : data.filter((e) => e.attribut?.[mainKey] === selectBrand);

  // =========================
  // 4) باقي الفلاتر
  // =========================
  const modelsFromApi = [...new Set(data.map((e) => e.attribut?.model))].filter(Boolean);
  const petsTypesFromApi = [...new Set(data.map((e) => e.attribut?.animalType))].filter(Boolean);
  const propertyTypesFromApi = [...new Set(data.map((e) => e.attribut?.propertyType))].filter(Boolean);

  const citiesFromApi = [...new Set(data.map((e) => e.location))].filter(Boolean);
  const regionsFromApi = [...new Set(data.map((e) => e.area))].filter(Boolean);

  const filtersDataApi = [];
  if (modelsFromApi.length > 0)
    filtersDataApi.push({ label: "الموديل", options: ["الكل", ...modelsFromApi] });
  if (petsTypesFromApi.length > 0)
    filtersDataApi.push({ label: "نوع الحيوان", options: ["الكل", ...petsTypesFromApi] });
  if (propertyTypesFromApi.length > 0)
    filtersDataApi.push({ label: "نوع العقار", options: ["الكل", ...propertyTypesFromApi] });

  filtersDataApi.push({ label: "المدينة", options: ["جميع المدن", ...citiesFromApi] });
  filtersDataApi.push({ label: "المنطقة", options: ["جميع المناطق", ...regionsFromApi] });

  return (
    <CategoryLayout
      title={`قسم ${slug}`}
      description={`تصفح جميع الإعلانات في قسم ${slug}`}
      brandButtons={brandButtonsData}
      onBrandSelect={setSelectBrand}
      filters={filtersDataApi}
      items={filterAds}
    />
  );
};
export default CategoriesData;


