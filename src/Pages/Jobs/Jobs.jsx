import React from "react";
import "./jobs.css";
import CategoryLayout from "../../Components/CategoryLayout/CategoryLayout";

const Jobs = () => {
  const jobsButtons = [
    "جميع الوظائف",
    "تويوتا",
    "مرسيدس",
    "فورد",
    "هيونداي",
    "نيسان",
    "اودي",
    "لكزس",
  ];

  const jobsFilters = [
    {
      label: "المدينة",
      options: ["جميع المدن", "القاهرة", "الجيزة", "الإسكندرية"],
    },
    {
      label: "المنطقة",
      options: ["جميع المناطق", "القاهرة", "الجيزة", "الإسكندرية"],
    },
  ];

  const jobsData = [
    {
      image: "/images/jobs.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/jobs.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/jobs.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "هيونداي إلنترا",
      desc: "موديل 2019 - فابريكة بالكامل",
      location: "مصر, الإسكندرية",
      time: "قبل ساعة",
    },
    {
      image: "/images/jobs.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "تويوتا كورولا",
      desc: "موديل 2022 - ماشية 15,000 كم",
      location: "مصر, القاهرة",
      time: "قبل 10 دقائق",
    },
    {
      image: "/images/jobs.png",
      userImage: "/images/logo.svg",
      userName: "احمد عمر",
      title: "مرسيدس C180",
      desc: "موديل 2021 - ماشية 10,000 كم",
      location: "مصر, الجيزة",
      time: "قبل 20 دقيقة",
    },
    {
      image: "/images/jobs.png",
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
      title="الوظائف بانواعها"
      description="تصفح جميع الوظائف بانواعها"
      brandButtons={jobsButtons}
      filters={jobsFilters}
      items={jobsData}
    />
  );
};

export default Jobs;



