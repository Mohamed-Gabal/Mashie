import React from 'react'
import './fileServices.css';
import CategoryLayout from '../../Components/CategoryLayout/CategoryLayout';

const FileServices = () => {
  const serButtons = [
    "جميع الخدمات",
    "تويوتا",
    "مرسيدس",
    "فورد",
    "هيونداي",
    "نيسان",
    "اودي",
    "لكزس",
  ];

  const serFilters = [
    { label: "المدينة", options: ["جميع المدن", "القاهرة", "الجيزة", "الإسكندرية"] },
    { label: "المنطقة", options: ["جميع المناطق", "القاهرة", "الجيزة", "الإسكندرية"] },
  ];

  const serData = [
    {
      image: "/images/services.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/services.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/services.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
    {
      image: "/images/services.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/services.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/services.png",
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
      title='الخدمات بانواعها'
      description='تصفح جميع الخدمات'
            brandButtons={serButtons}
      filters={serFilters}
      items={serData}
    />
  )
}

export default FileServices;
