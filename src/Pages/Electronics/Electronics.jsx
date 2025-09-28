import React from "react";
import "./electronics.css";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const Electronics = () => {
  const electButtons = [
    "جوالات",
    "لابتوبات",
    "شاشات",
    "سماعات",
    "كاميرات",
    "اجهزه منزليه",
    "العاب الكترونيه",
  ];
  const electfilters = [
    { label: "الحالة", options: ["جديد", "مستعمل"] },
    {
      label: "المدينة",
      options: ["جميع المدن", "القاهرة", "الجيزة", "الإسكندرية"],
    },
    {
      label: "المنطقة",
      options: ["جميع المناطق", "القاهرة", "الجيزة", "الإسكندرية"],
    },
  ];

  const electData = [
    {
      image: "/images/elect.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/elect.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/elect.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
    {
      image: "/images/elect.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/elect.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/elect.png",
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
      title="الاجهزه والالكترونيات"
      description="تصفح جميع الاجهزه والالكترونيات"
      brandButtons={electButtons}
      filters={electfilters}
      items={electData}
    />
  );
};

export default Electronics;
