import { useEffect, useState } from "react";

  const useCategoryAds = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // function for edit time
    const formTime = (formTimeApi) => {
    const dataApi = new Date(formTimeApi);
    return dataApi.toLocaleString();
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
          location: item.location.address,
          time: formTime(item.created_at),
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
