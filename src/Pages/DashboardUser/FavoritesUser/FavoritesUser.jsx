import React from "react";
import "./favoritesUser.css";
import { IoLocationOutline } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";

const FavoritesUser = () => {
  const favoritesUserCards = [
    {
      id: "1",
      image: "/images/filter1.webp",
      title: "للبيع شقة تمليك الدور الأول",
      location: "مصر القاهره",
      time: "قبل 4 دقائق",
    },
    {
      id: "2",
      image: "/images/filter2.webp",
      title: "شقة للإيجار قرب الجامعة",
      location: "مصر الجيزة",
      time: "قبل 10 دقائق",
    },
    {
      id: "3",
      image: "/images/filter3.webp",
      title: "فيلا دوبلكس للبيع",
      location: "مصر الاسكندرية",
      time: "قبل 20 دقيقة",
    },
  ];

  return (
    <div className="Favorites_user">
      <h2 className="Favorites_user_desc">
        <span className="Favorites_user_total">
          ({favoritesUserCards.length}){" "}
        </span>
        اعلانات محفوظه
      </h2>
      <hr />
      <div className="Favorites_user_item">
        {favoritesUserCards.map((item) => (
          <div className="Favorites_user_card" key={item.id}>
            {/* الصورة */}
            <div className="Favorites_user_item_picture">
              <img src={item.image} alt={item.title} />
            </div>

            {/* المحتوى */}
            <div className="Favorites_user_item_details">
              <h3 className="Favorites_user_title">{item.title}</h3>
              <div className="Favorites_user_meta">
                <p>
                  <IoLocationOutline /> {item.location}
                </p>
                <span>
                  <CiStopwatch /> {item.time}
                </span>
              </div>

              {/* الأزرار */}
              <div className="Favorites_user_actions">
                <button className="Favorites_user_btn">عرض الاعلان</button>
                <button className="Favorites_user_delete">حذف</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="Favorites_user_showMore">عرض المزيد...</button>
    </div>
  );
};

export default FavoritesUser;
