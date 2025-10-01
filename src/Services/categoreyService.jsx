import { useEffect, useState } from "react";

  const useCategoryAds = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

const pluralize = (value, singular, dual, plural) => {
  if (value === 1) return `منذ ${value} ${singular}`; // مثال: منذ دقيقة
  if (value === 2) return `منذ ${dual}`;             // مثال: منذ دقيقتين
  return `منذ ${value} ${plural}`;                   // مثال: منذ 5 دقائق
};

// دالة الوقت النسبي
const formatRelativeTime = (formTimeApi) => {
  const now = new Date();
  const past = new Date(formTimeApi);
  const diffInSeconds = Math.floor((now - past) / 1000);

  // لو الفرق أقل من 10 ثواني
  if (diffInSeconds < 10) {
    return "الآن";

  // أقل من دقيقة
  } else if (diffInSeconds < 60) {
    return "منذ ثواني";

  // أقل من ساعة
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return pluralize(minutes, "دقيقة", "دقيقتين", "دقائق");

  // أقل من يوم
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return pluralize(hours, "ساعة", "ساعتين", "ساعات");

  // أقل من شهر
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return pluralize(days, "يوم", "يومين", "أيام");

  // أقل من سنة
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return pluralize(months, "شهر", "شهرين", "أشهر");

  // سنة أو أكتر
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return pluralize(years, "سنة", "سنتين", "سنوات");
  }
};


  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await fetch(
          `https://api.mashy.sand.alrmoz.com/api/ads?category=${category}&page_num=1`
        );
        const json = await res.json();

        // show the data
        console.log("API Response:", json);

        // تأكد من وجود الـ array الصحيح
        const adsArray = Array.isArray(json.data?.data?.ads)
          ? json.data.data.ads
          : [];

        const mapped = adsArray.map((item) => ({
          // Data of Api
          id: item.id_ads,
          image: `https://api.mashy.sand.alrmoz.com/storage/${item.images[0]}`,
          userImage: item.user?.image || "/images/logo.svg",
          userName: item.seller?.name || "مستخدم مجهول",
          title: item.information.description,
          desc: item.desc || item.description,
          area: item.location.area,
          location: item.location.city,
          time: formatRelativeTime(item.created_at),
          attribut: item.attributes,
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



