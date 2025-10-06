import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { categories } from "../Advertisements/Category/Category";
import { timeSince } from "../SpecificCategory/SpecificCategory";

const DetailsLayout = () => {

  const { details, id } = useParams();
  const category = categories.find((cat) => details === cat.key) || "اسم الفئة";
  const [isLoading, setIsLoading] = useState(false);
  const [ad_details, setAd_details] = useState([]);
  console.log(ad_details);

  const images = ad_details?.images || [];
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.mashy.sand.alrmoz.com/api/ads/${details}/${id}`
        );
        if (response?.data?.success) {
          const data = response?.data?.data;
          setAd_details(response?.data?.data);
          setIsLoading(false);

          if (data?.images?.length > 0) {
            setMainImage(`https://api.mashy.sand.alrmoz.com/storage/${data.images[0]}`);
          }
        }
      } catch (error) {
        console.error("Error fetching ad details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [details, id]);

  return (
    <div className="details-layout">
      {/* ------------------- الجزء اليمين ------------------- */}
      <div className="details-right">
        {/* روابط التنقل */}
        <div className="details-close-close">
          <span className="details-close">الرئيسيه <IoIosArrowBack /></span>
          <span className="details-close">{category.name}<IoIosArrowBack /></span>
          <span className="details-close">{ad_details?.information?.title}</span>
        </div>

        {/* عنوان */}
        <h2 className="details-title">{ad_details?.information?.title}</h2>

        {/* معلومات مختصرة */}
        <div className="details-close-titles">
          <span className="details-close-title-yello"> <RiStarSLine className="details-close-title-yello-icon" />{ad_details?.location?.area}</span>
          <span className="details-close-title-main"> <MdOutlineShield className="details-close-title-main-icon" /> بائع موثوق</span>
          <span className="details-close-title-empty">نشر {ad_details?.created_at ? timeSince(ad_details.created_at) : ""}</span>
        </div>

        {/* الصورة الرئيسية */}
        <div className="details-lay-image-main">
          {mainImage ? (
            <img src={mainImage} alt="Main" />
          ) : (
            <p>جاري تحميل الصورة...</p>
          )}
        </div>

        {/* الصور المصغرة */}
        <div className="details-lay-image-thumbs">
          {images.length > 0 &&
            images.map((img, index) => {
              const fullImg = `https://api.mashy.sand.alrmoz.com/storage/${img}`;
              return (
                <img
                  key={index}
                  src={fullImg}
                  alt={`thumb-${index}`}
                  onClick={() => setMainImage(fullImg)}
                  className={mainImage === fullImg ? "active-thumb" : ""}
                />
              );
            })}
        </div>


        {/* المواصفات */}
        <div className="details_specifications">
          <h3 className="details-lay-info-title">المواصفات</h3>
          {/* attributes_map */}
          <div className="details_specifications_box">
            {details === "vehicles" &&
              <div className="attributes">
                <div className="attribute_item">
                  <div className="attribute_item_icon">
                    <img src="/Icons/adDetails/building.svg" alt="building" />
                  </div>
                  <div className="attribute_item_text">
                    <span>الماركة</span>
                    <span>{ad_details?.attributes?.brand}</span>
                  </div>
                </div>
                
                <div className="attribute_item">
                  <div className="attribute_item_icon">
                    <img src="/Icons/adDetails/building.svg" alt="building" />
                  </div>
                  <div className="attribute_item_text">
                    <span>الموديل</span>
                    <span>{ad_details?.attributes?.model}</span>
                  </div>
                </div>
              </div>
            }
            {details === "realestate" &&
              <div className="attributes">
                <div className="attribute_item">
                  <div className="attribute_item_icon">
                    <img src="/Icons/adDetails/building.svg" alt="building" />
                  </div>
                  <div className="attribute_item_text">
                    <span>نوع العقار</span>
                    <span>{ad_details?.attributes?.realestateType}</span>
                  </div>
                </div>

                <div className="attribute_item">
                  <div className="attribute_item_icon">
                    <img src="/Icons/adDetails/PersonArmsSpread.svg" alt="img" />
                  </div>
                  <div className="attribute_item_text">
                    <span>نوع الشارع</span>
                    <span>{ad_details?.attributes?.streetType}</span>
                  </div>
                </div>

                <div className="attribute_item">
                  <div className="attribute_item_icon">
                    <img src="/Icons/adDetails/ArrowsOutCardinal.svg" alt="img" />
                  </div>
                  <div className="attribute_item_text">
                    <span>الواجهة</span>
                    <span>{ad_details?.attributes?.realestateFace}</span>
                  </div>
                </div>
              </div>
            }

            <div className="deteils_location">
              <div className="deteils_location_item">
                <div className="location_item_icon">
                  <img src="/Icons/adDetails/location.svg" alt="location" />
                </div>
                <div className="location_text">
                  <span>المنطقة</span>
                  <span>{ad_details?.location?.area}</span>
                </div>
              </div>

              <div className="deteils_location_item">
                <div className="location_item_icon">
                  <img src="/Icons/adDetails/location.svg" alt="location" />
                </div>
                <div className="location_text">
                  <span>المدينة</span>
                  <span>{ad_details?.location?.city}</span>
                </div>
              </div>
            </div>
          </div>

          {/* {details === "realestate" &&
            <div className="details-lay-info-item">
              <div>
                <PiCarSimpleLight className="details-lay-info-icon" />
                <span>الماركه : {ad_details?.attributes?.realestateType}</span>
              </div>
              <div>
                <PiCarSimpleLight className="details-lay-info-icon" />
                <span>الموديل : لاندكروزر</span>
              </div>
              <div><CiLocationOn className="details-lay-info-icon" /><span>المدينه : الرياض</span></div>
              <div><CiLocationOn className="details-lay-info-icon" /><span>المنطقه : العليا</span></div>
            </div>
          } */}

        </div>

        {/* الوصف */}
        <div className="details-layout-decs">
          <h3 className="details-lay-decs-title">الوصف</h3>
          <p className="details-lay-decs-info">{ad_details?.information?.description}</p>
          {/* <div className="details-lay-decs-info">
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon" /> تم تغيير الزيت حديثا</span>
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon" /> تكييف يعمل بكفاءه ممتازه</span>
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon" /> اطارات جديده</span>
            <span className="details-lay-decs-info-item"><FaCheck className="details-lay-decs-info-icon" /> فحص شامل متوفر</span>
          </div> */}
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
              <img src="/images/logo.svg" alt="User" className="details-lay-comments-list-item-img" />
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
        <h1 className="details-left-price">{ad_details?.information?.price} ريال</h1>
        {ad_details?.information?.isNegotiable ?
          <h6 className="details-left-negotiable"> قابل للتفاوض</h6>
          :
          <h6 className="details-left-negotiable">غير قابل للتفاوض</h6>
        }

        {/* معلومات البائع */}
        <div className="details-left-top">
          <div className="details-left-top-user">
            <img src="/images/logo.svg" alt="User" />
            <div>
              <h3 className="details-left-top-user-name">
                {ad_details?.seller?.name}
                <span><MdOutlineShield /> موثوق</span>
              </h3>
              <p className="details-left-top-user-member">عضو منذ 2020</p>
            </div>

            {/* إحصائيات البائع */}
            <div className="details-left-top-user-actions">
              <span><RiStarSLine className="details-left-top-user-actions-icon" />4.8</span>
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