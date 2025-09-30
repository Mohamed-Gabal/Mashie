// src/Pages/CategoriesData/CategoriesData.jsx
import React from "react";
import { useParams } from "react-router-dom";
import useCategoryAds from "../../Services/categoreyService";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const CategoriesData = () => {
  const { slug } = useParams(); // هنا بناخد اسم القسم من الـ URL
  const { data, loading } = useCategoryAds(slug);

  if (loading) return <p>جاري تحميل البيانات...</p>;

  return (
    <CategoryLayout
      title={`قسم ${slug}`}
      description={`تصفح جميع الإعلانات في قسم ${slug}`}
      brandButtons={[]} // لو عندك أزرار للفلترة ممكن تضيفها هنا
      filters={[]} // لو عندك فلاتر تحطها هنا
      items={data}
    />
  );
};
export default CategoriesData;
