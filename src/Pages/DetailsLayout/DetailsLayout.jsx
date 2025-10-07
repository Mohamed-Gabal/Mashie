import React, { useEffect, useState } from "react";
import "./detailsLayout.css";

// Icons
import { IoIosArrowBack } from "react-icons/io";
import { RiStarSLine } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import { AiOutlineSend, AiOutlineLike } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { useParams } from "react-router-dom";
import axios from "axios";
import { categories } from "../Advertisements/Category/Category";
import { timeSince } from "../SpecificCategory/SpecificCategory";
import { CiFlag1 } from "react-icons/ci";
import { attributeMapForDetails } from "../../data";

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
      <div className="details_header">
        <div className="">
          {/* links*/}
          <div className="details-close-close">
            <span className="details-close">الرئيسيه <IoIosArrowBack /></span>
            <span className="details-close">{category.name}<IoIosArrowBack /></span>
            <span className="details-close">{ad_details?.information?.title}</span>
          </div>

          {/* title */}
          <h2 className="details-title">{ad_details?.information?.title}</h2>

          {/* info */}
          <div className="details-close-titles">
            <span className="details-close-title-yello"> <RiStarSLine className="details-close-title-yello-icon" />مميز</span>
            <span className="details-close-title-main"> <MdOutlineShield className="details-close-title-main-icon" /> بائع موثوق</span>
            <span className="details-close-title-empty">نشر {ad_details?.created_at ? timeSince(ad_details.created_at) : ""}</span>
          </div>
        </div>

        <div className="details_price">
          <h1 className="details-left-price">{ad_details?.information?.price} ريال</h1>
          {ad_details?.information?.isNegotiable ?
            <span className="details-left-negotiable"> قابل للتفاوض</span>
            :
            <span className="details-left-negotiable">غير قابل للتفاوض</span>
          }
        </div>
      </div>

      <section className="details_grid_container">
        {/* ------------------- right section  ------------------- */}
        <div className="details-right">
          {/* main photo */}
          <div className="details_images">
            <div className="details-lay-image-main">
              {mainImage ? (
                <img src={mainImage} alt="Main" />
              ) : (
                <p>جاري تحميل الصورة...</p>
              )}
            </div>

            {/* small images */}
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
          </div>



          {/* المواصفات */}
          <div className="details_specifications">
            <h3 className="details-lay-info-title">المواصفات</h3>
            <div className="details_specifications_box">
              <div className="attributes">
                {attributeMapForDetails(ad_details)[details].map((item, index) => (
                  <div className="attribute_item" key={index}>
                    <div className="attribute_item_icon">
                      <img src={item.icon} alt={details} />
                    </div>
                    <div className="attribute_item_text">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="deteils_location">
                <div className="deteils_location_item">
                  <div className="location_item_icon">
                    <img src="/advertisements/location.svg" alt="location" />
                  </div>
                  <div className="location_text">
                    <span>المنطقة</span>
                    <span>{ad_details?.location?.area}</span>
                  </div>
                </div>

                <div className="deteils_location_item">
                  <div className="location_item_icon">
                    <img src="/advertisements/location.svg" alt="location" />
                  </div>
                  <div className="location_text">
                    <span>المدينة</span>
                    <span>{ad_details?.location?.city}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* الوصف */}
          <div className="details-layout-decs">
            <h3 className="details-lay-decs-title">الوصف</h3>
            <p className="details-lay-decs-info">{ad_details?.information?.description}</p>
            {ad_details?.attributes?.moreInfo &&
              <div className="attribute_item_text">
                <span>معلومات اضافية</span>
                <span>{ad_details?.attributes?.moreInfo}</span>
              </div>
            }
          </div>
        </div>

        {/* ------------------- left section  ------------------- */}
        <div className="details-left">
          <div className="details_left_container">
            {/* معلومات البائع */}
            <div className="details-left-top">
              <div className="details-left-top-user">
                <div className="card_user">
                  <div className="card_user_image">
                    {ad_details?.user?.user_image ?
                      <img
                        src={ad_details?.user?.user_image ? ad_details?.user?.user_image : "/images/logo.svg"}
                        alt={ad_details?.user?.name}
                      />
                      :
                      <div className="avatar_placeholder">
                        {ad_details?.seller?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}
                      </div>
                    }
                  </div>

                  <div className="user_info">
                    <h5>{ad_details?.seller?.name}</h5>
                    <p className="details-left-top-user-member">عضو {ad_details?.user?.account_created_at ? timeSince(ad_details?.user?.account_created_at) : ""}</p>
                  </div>
                </div>

                {/* إحصائيات البائع */}
                <div className="details-left-top-user-actions">
                  <span><MdOutlineShield /> موثوق</span>
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

              <button type="button" onClick={() => handleWhatsApp(ad_details?.seller)} className="details-left-top-send">واتساب</button>
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

        {/* footer التعليقات */}
        <div className="details_footer_comments">
          <h3 className="details-lay-comments-title">التعليقات</h3>
          <p className="details-lay-comments-info">شارك رايك او اسفسارك حول هذا الاعلان</p>

          {/* كتابة تعليق */}
          <div className="details-lay-comments-user">
            <img src="/images/logo.svg" alt="User" />
            <input type="text" placeholder="اكتب تعليقك هنا..." />
          </div>

          <div className="details-lay-comments-actions">
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
      </section>

    </div>
  );
};
export default DetailsLayout;

// handleWhatsApp function to open whatsapp
export function handleWhatsApp(seller) {
  if (!seller || !seller.phone) {
    console.error("Seller data not available");
    return;
  }

  const phone = seller.phone.startsWith("0")
    ? `966${seller.phone.slice(1)}`
    : `966${seller.phone}`;

  const message = `مرحبًا ${seller.name}! أريد التواصل معك بشأن إعلانك.`;
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(waUrl, "_blank", "noopener,noreferrer");
}