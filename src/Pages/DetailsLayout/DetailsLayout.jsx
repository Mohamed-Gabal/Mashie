import React, { useState } from "react";
import "./detailsLayout.css";

// Icons
import { IoIosArrowBack } from "react-icons/io";
import { RiStarSLine } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";
import { PiCarSimpleLight } from "react-icons/pi";
import { CiLocationOn, CiFaceSmile, CiFlag1 } from "react-icons/ci";
import { FaCheck, FaRegCommentDots } from "react-icons/fa6";
import { MdOutlinePhoto } from "react-icons/md";
import { AiOutlineSend, AiOutlineLike } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { useParams } from "react-router-dom";

const DetailsLayout = () => {
  // الصور
  const images = [
    "/images/resultPage1.webp",
    "/images/resultPage2.webp",
    "/images/resultPage3.webp",
    "/images/resultPage4.webp",
    "/images/resultPage5.webp",
    "/images/resultPage6.webp",
    "/images/resultPage1.webp",
    "/images/resultPage2.webp",
    "/images/resultPage3.webp",
    "/images/resultPage4.webp",
  ];

  // الصورة الرئيسية (بتبدأ بأول صورة)
  const [mainImage, setMainImage] = useState(images[0]);

  const { id } = useParams();
  console.log(id);

  return (
    <div className="details-layout">
      {/* ------------------- الجزء اليمين ------------------- */}
      <div className="details-right">
        {/* روابط التنقل */}
        <div className="details-close-close">
          <span className="details-close">الرئيسيه <IoIosArrowBack /></span>
          <span className="details-close">السيارات والمركبات <IoIosArrowBack /></span>
          <span className="details-close">تويوتا لاندكروزر 2013</span>
        </div>

        {/* عنوان */}
        <h2 className="details-title">تويوتا لاندكروزر 2013</h2>

        {/* معلومات مختصرة */}
        <div className="details-close-titles">
          <span className="details-close-title-yello"> <RiStarSLine className="details-close-title-yello-icon"/>مصر</span>
          <span className="details-close-title-main"> <MdOutlineShield className="details-close-title-main-icon"/> بائع موثوق</span>
          <span className="details-close-title-empty">نشر مند يومين</span>
        </div>

        {/* صور المنتج */}
        <div className="details-lay-image">
          {/* الصورة الرئيسية */}
          <div className="details-lay-image-main">
            <img src={mainImage} alt="Car" />
          </div>

          {/* الصور المصغرة */}
          <div className="details-lay-image-thumbs">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Car ${index}`}
                onClick={() => setMainImage(img)}
                className={mainImage === img ? "active-thumb" : ""}
              />
            ))}
          </div>
        </div>

        {/* المواصفات */}
        <div className="details-layout-info">
          <h3 className="details-lay-info-title">المواصفات</h3>
          <div className="details-lay-info-item">
            <div><PiCarSimpleLight className="details-lay-info-icon"/><span>الماركه : تويوتا</span></div>
            <div><PiCarSimpleLight className="details-lay-info-icon"/><span>الموديل : لاندكروزر</span></div>
            <div><CiLocationOn className="details-lay-info-icon"/><span>المدينه : الرياض</span></div>
            <div><CiLocationOn className="details-lay-info-icon"/><span>المنطقه : العليا</span></div>
          </div>
        </div>

        {/* الوصف */}
        <div className="details-layout-decs">
          <h3 className="details-lay-decs-title">الوصف</h3>
          <p className="details-lay-decs-info">
            تويوتا لاند كروزر 2013 بحالة ممتازة جداً. السيارة مستعملة استعمال
            شخصي، محافظ عليها بالكامل وتم عمل صيانة دورية في الوكالة. لا توجد أي
            أضرار أو حوادث.
          </p>
          <div className="details-lay-decs-info">
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon"/> تم تغيير الزيت حديثا</span>
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon"/> تكييف يعمل بكفاءه ممتازه</span>
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon"/> اطارات جديده</span>
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon"/> فحص شامل متوفر</span>
          </div>
        </div>

        {/* التعليقات */}
        <div className="details-lay-comments">
          <h3 className="details-lay-comments-title">التعليقات</h3>
          <p className="details-lay-comments-info">شارك رايك او اسفسارك حول هذا الاعلان</p>

          {/* كتابة تعليق */}
          <div className="details-lay-comments-user">
            <img src="/images/logo.svg" alt="User" />
            <input type="text" placeholder="اكتب تعليقك هنا..." />
          </div>

          <div className="details-lay-comments-actions">
            <span><CiFaceSmile /> اضافه رمز تعبيري</span>
            <span><MdOutlinePhoto /> اضافه صوره</span>
            <button><AiOutlineSend /> اضافه تعليق</button>
          </div>

          {/* قائمة التعليقات */}
          <div className="details-lay-comments-list">
            <div className="details-lay-comments-list-item">
              <img src="/images/logo.svg" alt="User" className="details-lay-comments-list-item-img"/>
              <div className="details-lay-comments-list-item-content">
                <div className="details-lay-comments-list-item-header">
                  <span className="details-lay-comments-list-item-name">احمد محمد</span>
                  <span className="details-lay-comments-list-item-date">منذ ساعه</span>
                </div>
                <p className="details-lay-comments-list-item-text-info">
                  هذا المنتج رائع جداً، أنصح به بشدة. الجودة عالية والسعر مناسب.
                </p>
                <div className="details-lay-comments-list-item-text-actions">
                  <span> <AiOutlineLike />اعجاب</span>
                  <span> <FaRegCommentDots />رد</span>
                  <span> <CiFlag1 />ابلاغ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- الجزء الشمال ------------------- */}
      <div className="details-left">
        {/* السعر */}
        <h1 className="details-left-price">175,000 ريال</h1>
        <h6 className="details-left-negotiable">غير قابل للتفاوض</h6>

        {/* معلومات البائع */}
        <div className="details-left-top">
          <div className="details-left-top-user">
            <img src="/images/logo.svg" alt="User" />
            <div>
              <h3 className="details-left-top-user-name">
                أحمد عمر ماهر
                <span><MdOutlineShield /> موثوق</span>
              </h3>
              <p className="details-left-top-user-member">عضو منذ 2020</p>
            </div>

            {/* إحصائيات البائع */}
            <div className="details-left-top-user-actions">
              <span><RiStarSLine className="details-left-top-user-actions-icon"/>4.8</span>
              <span>25 اعلان</span>
              <span>معدل الرد 95%</span>
            </div>

            {/* أزرار التواصل */}
            <div className="details-left-top-user-buttons">
              <button className="details-left-top-user-btn1"> <IoCallOutline />تواصل</button>
              <button className="details-left-top-user-btn2"> <LuMessageCircleMore />رساله</button>
            </div>
          </div>

          <button className="details-left-top-send">واتساب</button>
        </div>

        {/* نصائح الأمان */}
        <div className="details-left-bottom">
          <h2 className="details-left-bottom-title">نصائح الامان</h2>
          <ul className="details-left-bottom-list">
            <li>تأكد من فحص السياره قبل الشراء.</li>
            <li>التق بالبائع في مكان عام.</li>
            <li>لا تدفع اي مبلغ قبل المعاينه.</li>
            <li>تحقق من الاوراق الرسميه.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DetailsLayout;





