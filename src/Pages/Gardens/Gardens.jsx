
import React from "react";
import "./gardens.css";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const Gardens = () => {
  const gardensButtons = [
    "جميع الحدائق",
    "تويوتا",
    "مرسيدس",
    "فورد",
    "هيونداي",
    "نيسان",
    "اودي",
    "لكزس",
  ];

  const gardensFilters = [
    { label: "المدينة", options: ["جميع المدن", "القاهرة", "الجيزة", "الإسكندرية"] },
    { label: "المنطقة", options: ["جميع المناطق", "القاهرة", "الجيزة", "الإسكندرية"] },
  ];

  const gardensData = [
    {
      image: "/images/park.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/park.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/park.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
    {
      image: "/images/park.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/park.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/park.png",
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
      title="الحدائق بانواعها"
      description="تصفح جميع انواع الحدائق"
      brandButtons={gardensButtons}
      filters={gardensFilters}
      items={gardensData}
    />
  );
};
export default Gardens
