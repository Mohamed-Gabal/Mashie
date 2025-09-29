import { useEffect, useState } from "react";

const useCategoryAds = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await fetch(
          `https://api.mashy.sand.alrmoz.com/api/ads?category=${category}&page_num=1`
        );
        const json = await res.json();

        console.log("API Response:", json);

        // تأكد من وجود الـ array الصحيح
        const adsArray = Array.isArray(json.data?.data?.ads) ? json.data.data.ads : [];

        const mapped = adsArray.map((item) => ({
          id: item.id_ads,
          image: `https://api.mashy.sand.alrmoz.com/storage/${item.images[0]}`,
          userImage: item.user?.image || "صوره مجهوله",
          userName: item.seller?.name || "مستخدم مجهول",
          title: item.title,
          desc: item.desc || item.description,
          location: item.information?.location
            ? `${item.information.location.city}, ${item.information.location.area}, ${item.information.location.address}`
            : "غير محدد",
          time: item.created_at || item.time || item.postedAt,
        }));

        setData(mapped);
      } catch (err) {
        console.error("خطأ في جلب البيانات:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, [category]);

  return { data, loading };
};
export default useCategoryAds;
