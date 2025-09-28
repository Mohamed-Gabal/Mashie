import React from "react";
import "./pets.css";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const Pets = () => {
  const petsButtons = [
    "جوالات",
    "لابتوبات",
    "شاشات",
    "سماعات",
    "كاميرات",
    "اجهزه منزليه",
    "العاب الكترونيه",
  ];
  const petsFilters = [
    {
      label: "المدينة",
      options: ["جميع المدن", "القاهرة", "الجيزة", "الإسكندرية"],
    },
    {
      label: "المنطقة",
      options: ["جميع المناطق", "القاهرة", "الجيزة", "الإسكندرية"],
    },
  ];

  const petsData = [
    {
      image: "/images/pets.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/pets.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/pets.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
    {
      image: "/images/pets.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/pets.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/pets.png",
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
      title="الحيوانات والمواشي"
      description="تصفح جميع الحيوانات والمواشي"
      brandButtons={petsButtons}
      filters={petsFilters}
      items={petsData}
    />
  );
};

export default Pets;
