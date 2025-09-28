
import React from "react";
import "./cars.css";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const Cars = () => {
  const brandButtons = [
    "جميع الماركات",
    "تويوتا",
    "مرسيدس",
    "فورد",
    "هيونداي",
    "نيسان",
    "اودي",
    "لكزس",
  ];

  const filters = [
    { label: "الموديل", options: ["جميع الموديلات", "2020", "2021", "2022", "2023"] },
    { label: "المدينة", options: ["جميع المدن", "القاهرة", "الجيزة", "الإسكندرية"] },
    { label: "المنطقة", options: ["جميع المناطق", "القاهرة", "الجيزة", "الإسكندرية"] },
  ];

  const carsData = [
    {
      image: "/images/resultPage1.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/resultPage2.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/resultPage3.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
    {
      image: "/images/resultPage4.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/resultPage5.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/resultPage6.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
  ];

  return (
    <CategoryLayout
      title="السيارات والمركبات"
      description="تصفح كل أنواع السيارات والمركبات وابحث عن السيارة التي تريدها..."
      brandButtons={brandButtons}
      filters={filters}
      items={carsData}
    />
  );
};
export default Cars;
