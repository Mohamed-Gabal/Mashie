export const vehicles = ["تويتا", "شيفرولية", "نيسان", "هيونداي", "فورد", "جي ام سي", "هوندا", "بي ام دبليو", "مرسيدس", "جيب", "ميتسوبيشي", "لاند روفر", "ايسوزو", "قطع غيار وملحقات", "شاحنات ومعدات ثقيلة", "كيا", "دبابات", "بيجو", "بنتلي",]

export const furniture = ["أثاث خارجي", "أثاث مكتبي", "أدوات منزلية", "أسرة ومراتب", "تحف وديكور", "خزائن ودواليب", "طاولات وكراسي", "مجالس ومفروشات",]

export const jobs = ["وظائف ادارية", "وظائف ازياء وتجميل", "امن وسلامة", "تعليمية", "تقنية وتصميم", "زراعة ورعي", "صناعية", "طب وتمريض", "عمالة منزلية", "مطاعم",]

export const services = ["مقاولات", "تعقيب", "توصيل", "نقل عفش", "خدمات نظافة", "قانونية", "محاسبية ومالية", "خدمات اخرى", ]

export const fashion = ["ساعات", "عطور وبخور", "مستلزمات رياضية", "نظارات", "أزياء رجالية", "أزياء نسائية", "أزياء ولوازم أطفال", "هدايا", "أمتعة سفر", "الصحة والجنال",]

export const electronics = ["جوالات", "تابلت", "كمبيوتر", "ألعاب إلكترونية", "تلفزيونات وصوتيات", "كاميرات تصوير", "حسابات واشتراكات", "أجهزة منزلية ومطبخ", "مواطير ومولدات",]

export const pets = ["جمال", "خيول", "أغنام", "ماعز", "أبقار", "دواجن", "بط", "حمام", "ببغاء", "كلاب", "قطط", "هامستر", "سناجب", "أسماك وسلاحف",]

export const realestate = ["اراضي للبيع", "اراضي لليجار", "شقق للايجار", "شقق للبيع", "بيوت للبيع", "عمارة للبيع", "استراحات للايجار", "استراحات للبيع", "محلات للايجار", "محلات للبيع", "فلل للايجار", "فلل للبيع", "مزارع للبيع", "مزارع للايجار", "مستودع للبيع", "مستودع للايجار", "مكاتب للبيع", "مكاتب للايجار",]

export const attributesMap = {
    vehicles: { key: "brand", data: vehicles },
    realestate: { key: "realestateType", data: realestate },
    electronics: { key: "electronicType", data: electronics },
    jobs: { key: "jobType", data: jobs },
    pets: { key: "animalType", data: pets },
    services: { key: "serviceType", data: services },
    furniture: { key: "furnitureType", data: furniture },
    fashion: { key: "fashionType", data: fashion },
};
export const specificCategoriesData = [
    { id: 1, key: "vehicles", name: "السيارات", title: "السيارات والمركبات", desc: "تصفح كل أنواع السيارات والمركبات", search: "ابحث عن السيارة التي تريدها..." },
    { id: 2, key: "realestate", name: "العقارات", title: "العقارات والشقق", desc: "تصفح كل أنواع العقارات والشقق", search: "ابحث عن العقار الذي تريده..." },
    { id: 3, key: "electronics", name: "الإلكترونيات", title: "الأجهزة والالكترونيات", desc: "تصفح جميع الأجهزة والالكترونيات", search: "ابحث عن الجهاز الذي تريده..." },
    { id: 4, key: "jobs", name: "الوظائف", title: "الوظائف بأنواعها", desc: "تصفح جميع أنواع الوظائف", search: "ابحث عن الوظيفة التي تريدها / تريديها..." },
    { id: 5, key: "furniture", name: "الأثاث", title: "الأثاث", desc: "تصفح جميع أنواع الأثاث", search: "ابحث عن الأثاث الذي تريده..." },
    { id: 6, key: "services", name: "الخدمات", title: "الخدمات بأنواعها", desc: "تصفح جميع أنواع الخدمات", search: "ابحث عن الخدمة التي  تريدها..." },
    { id: 7, key: "fashion", name: "الأزياء", title: "الأزياء بأنواعها", desc: "تصفح جميع أنواع الأزياء", search: "ابحث عن الزي الذي تريده/ تريديه..." },
    { id: 8, key: "food", name: "الأطعمة", title: "الأطعمة بأنواعها", desc: "تصفح جميع أنواع الأطعمة", search: "ابحث عن الطعام أو المشروب الذي تريده/ تريديه..." },
    { id: 9, key: "anecdotes", name: "النوادر", title: "النوادر بأنواعها", desc: "تصفح جميع أنواع النوادر", search: "ابحث عن النوادر  التي  تريدها..." },
    { id: 10, key: "gardens", name: "الحدائق", title: "الحدائق بأنواعها", desc: "تصفح جميع أنواع مستلزمات وزينة الحدائق بسهولة", search: "ابحث عن مستلزمات أو نباتات الحدائق..." },
    { id: 11, key: "trips", name: "الرحلات", title: "الرحلات بأنواعها", desc: "اكتشف جميع مستلزمات وأنشطة الرحلات بسهولة", search: "ابحث عن أدوات أو عروض الرحلات..." },
    { id: 12, key: "pets", name: "الحيوانات", title: "الحيوانات والمواشي", desc: "تصفح جميع الحيوانات والمواشي", search: "ابحث عن اسم اليحوان الذي تريده..." },
];
export const saudiRegions = [
    {
        id: 1,
        region: "الرياض",
        cities: ["الخرج", "الدرعية", "الدوادمي", "المجمعة", "القويعية", "وادي الدواسر", "الزلفي", "شقراء", "الأفلاج", "الغاط", "عفيف", "حوطة بني تميم", "الحريق", "السليل", "ضرماء", "المزاحمية", "ثادق", "رماح", "حريملاء", "مرات", "الدلم"]
    },
    {
        id: 2,
        region: "مكة المكرمة",
        cities: ["جدة", "الطائف", "القنفذة", "رابغ", "الليث", "الجموم", "خليص", "الكامل", "الخرمة", "رنية", "تربة", "المويه", "أضم", "ميسان", "بحرة"]
    },
    {
        id: 3,
        region: "المدينة المنورة",
        cities: ["المدينة المنورة", "ينبع", "العلا", "خيبر", "بدر", "الحناكية", "المهد", "العيص", "وادي الفرع", "الرايس"]
    },
    {
        id: 4,
        region: "القصيم",
        cities: ["بريدة", "عنيزة", "الرس", "المذنب", "البدائع", "البكيرية", "الأسياح", "رياض الخبراء", "عيون الجواء", "الشماسية"]
    },
    {
        id: 5,
        region: "المنطقة الشرقية",
        cities: ["الدمام", "الخبر", "الأحساء", "القطيف", "الجبيل", "رأس تنورة", "الخفجي", "النعيرية", "بقيق", "حفر الباطن"]
    },
    {
        id: 6,
        region: "عسير",
        cities: ["أبها", "خميس مشيط", "محايل عسير", "النماص", "تنومة", "رجال ألمع", "بيشة", "تثليث", "ظهران الجنوب", "سراة عبيدة"]
    },
    {
        id: 7,
        region: "تبوك",
        cities: ["تبوك", "الوجه", "أملج", "ضباء", "حقل", "تيماء", "البدع", "شرما", "المويلح", "المغاربة"]
    },
    {
        id: 8,
        region: "حائل",
        cities: ["حائل", "بقعاء", "الغزالة", "الشنان", "الحائط", "الشملي", "موقق", "السليمي", "سميراء", "تربه"]
    },
    {
        id: 9,
        region: "الحدود الشمالية",
        cities: ["عرعر", "رفحاء", "طريف", "العويقيلة", "شعبة نصاب", "الهباس", "جديدة عرعر", "الدويد", "أم خنصر", "الحيانية"]
    },
    {
        id: 10,
        region: "جازان",
        cities: ["جازان", "صبيا", "أبو عريش", "صامطة", "بيش", "الدرب", "فرسان", "العارضة", "الريث", "فيفاء"]
    },
    {
        id: 11,
        region: "نجران",
        cities: ["نجران", "شرورة", "حبونا", "بدر الجنوب", "يدمة", "ثار", "الخرخير", "خباش", "المشعلية", "رجلا"]
    },
    {
        id: 12,
        region: "الباحة",
        cities: ["الباحة", "بلجرشي", "المندق", "المخواة", "قلوة", "العقيق", "القرى", "بني حسن", "غامد الزناد", "الحجرة"]
    },
    {
        id: 13,
        region: "الجوف",
        cities: ["سكاكا", "القريات", "دومة الجندل", "طبرجل", "الفياض", "ميقوع", "الرديفة", "عين الحواس", "الطوير", "الشويحطية"]
    }
];

export const attributeMapForDetails = (ad_details) => ({
    vehicles: [
        { icon: "/advertisements/car.svg", label: "الماركة", value: ad_details?.attributes?.brand },
        { icon: "/advertisements/car.svg", label: "الموديل", value: ad_details?.attributes?.model },
    ],
    realestate: [
        { icon: "/advertisements/buildings.svg", label: "نوع العقار", value: ad_details?.attributes?.realestateType },
        { icon: "/Icons/adDetails/PersonArmsSpread.svg", label: "نوع الشارع", value: ad_details?.attributes?.streetType },
        { icon: "/Icons/adDetails/ArrowsOutCardinal.svg", label: "الواجهة", value: ad_details?.attributes?.realestateFace },
    ],
    electronics: [
        { icon: "/advertisements/electronics.svg", label: "نوع الجهاز", value: ad_details?.attributes?.electronicType },
    ],
    pets: [
        { icon: "/advertisements/animals.svg", label: "نوع الحيوان", value: ad_details?.attributes?.animalType },
    ],
    jobs: [
        { icon: "/advertisements/jobs.svg", label: "نوع الوظيفة", value: ad_details?.attributes?.jobType },
    ],
    furniture: [
        { icon: "/advertisements/furniture.svg", label: "نوع الأثاث", value: ad_details?.attributes?.furnitureType },
    ],
    services: [
        { icon: "/advertisements/services.svg", label: "نوع الخدمات", value: ad_details?.attributes?.serviceType },
    ],
    food: [
        { icon: "/advertisements/food.svg", label: "نوع الطعام", value: ad_details?.attributes?.foodType },
    ],
    gardens: [
        { icon: "/advertisements/gardens.svg", label: "نوع الحدائق", value: ad_details?.attributes?.gardenType },
    ],
    anecdotes: [
        { icon: "/advertisements/anecdotes.svg", label: "نوع النوادر", value: ad_details?.attributes?.anecdoteType },
    ],
    trips: [
        { icon: "/advertisements/trips.svg", label: "نوع الرحلات", value: ad_details?.attributes?.tripType },
    ],
    fashion: [
        { icon: "/advertisements/fashion.svg", label: "نوع الزي", value: ad_details?.attributes?.fashionType },
    ],
});
