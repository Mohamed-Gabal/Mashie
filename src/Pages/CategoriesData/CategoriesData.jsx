// src/Pages/CategoriesData/CategoriesData.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useCategoryAds from "../../Services/categoreyService";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const CategoriesData = () => {
  const { slug } = useParams(); // هنا بناخد اسم القسم من الـ URL
  const { data, loading } = useCategoryAds(slug);

  // اختار علي حسب البراند
  const [selectBrand, setSelectBrand] = useState("all");

  if (loading) return <p>جاري تحميل البيانات...</p>;

  // برجع الماركت من ال data
  const brandFormApi = data
    ? [...new Set(data.map((e) => e.attribut.brand))]
    : [];

  // فلتره البيانات علي حسب الماركه
  const filterAds =
    selectBrand === "all"
      ? data
      : data.filter((e) => e.attribut.brand === selectBrand);
  const brandButtonsData = ["جميع الماركت", ...brandFormApi];

  // الموديل والمديته والمنطقه
  const modelsFromApi = [...new Set(data.map((e) => e.attribut.model))];
  const modelsFromApiPets = [...new Set(data.map((e) => e.attribut.animalType))];
  const citiesFromApi = [...new Set(data.map((e) => e.location))];
  const regionsFromApi = [...new Set(data.map((e) => e.area))];

  const filtersDataApi = [
    
      {label: "الموديل", options: ["الكل", ...modelsFromApi, ...modelsFromApiPets]},
      {label: "المدينه", options: ["الكل", ...citiesFromApi]},
      {label: "المنطقه", options: ["الكل", ...regionsFromApi]},
    
  ];

  return (
    <CategoryLayout
      title={`قسم ${slug}`}
      description={`تصفح جميع الإعلانات في قسم ${slug}`}
      brandButtons={brandButtonsData} //أزرار للفلتره
      onBrandSelect={setSelectBrand}
      filters={filtersDataApi} // لو عندك فلاتر تحطها هنا
      items={filterAds}
    />
  );
};
export default CategoriesData;
