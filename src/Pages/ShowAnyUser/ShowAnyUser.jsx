import React, { useEffect, useState } from 'react';
import "./showAnyUserStyle.css"
import { Link, useParams } from 'react-router-dom';
import { CiLocationOn, CiStopwatch } from 'react-icons/ci';
import { timeSince } from '../SpecificCategory/SpecificCategory';
import SkeletonCard from '../../Components/SkeletonCard/SkeletonCard';
import NotFound from '../../Components/NotFound/NotFound';

export default function ShowAnyUser() {
    const { userID } = useParams();
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchUserData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://api.mashy.sand.alrmoz.com/api/showAnyUserData/${userID}`, { method: "GET", });

                const data = await response.json();
                if (data.success) {
                    setUserData(data.data);
                    setIsLoading(false)
                    setErrorMessage("");
                } else {
                    setErrorMessage("فشل في تحميل بيانات المستخدم.");
                }
            } catch {
                setErrorMessage("حدث خطأ أثناء تحميل البيانات.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [userID]);
    return (
        <section className="showAnyUserData">
            {isLoading && (
                <div className="loading_data">
                    {Array.from({ length: 4 }, (_, i) => (<SkeletonCard key={i} />))}
                </div>
            )}

            {errorMessage && <NotFound/>}

            <div className="showAnyUserData_container">
                <div className="user_data">
                    <div className="user_images">
                        <div className="cover_user_image">
                            <img src={userData?.user?.cover_image} alt="صورة الكوفر" loading="lazy" />
                        </div>

                        <div className="profile_user_image">
                            <div className="user_img_container">
                                <img src={userData?.user?.profile_image} alt="img" loading="lazy" />
                            </div>
                            <div className="status_dot" style={{ backgroundColor: userData?.user?.is_online ? "var(--main-color)" : "var(--parg-color)" }} />
                        </div>
                    </div>

                    <div className="user_info">
                        <h3 className="user_name">{userData?.user?.name?.split(" ").slice(0, 2).join(" ")}</h3>
                        <h6 className="user_status">
                            <span>آخر ظهور  </span>
                            <span>{userData?.user?.last_seen_at}</span>
                        </h6>
                    </div>

                    {errorMessage && <p className="error_message">{errorMessage}</p>}
                </div>

                <div className="user_advertisements">
                    {userData?.data?.map((cat) => (
                        <div
                            key={cat?.ad?.id_ads}
                            className={`advertisements_card`}
                        >
                            <div className="card_image">
                                <img
                                    src={cat?.ad?.images?.[0] ? `https://api.mashy.sand.alrmoz.com/storage/${cat?.ad?.images[0]}` : "/placeholder.png"}
                                    alt={cat?.ad?.information?.title}
                                />

                            </div>

                            <div className="card_user">
                                {cat?.ad?.user?.profile_image ? (
                                    <img src={cat?.ad?.user?.profile_image} alt={cat?.ad?.seller?.name} />
                                ) : (
                                    <div className="avatar_placeholder">
                                        {cat?.ad?.seller?.name?.split(" ").map(word => word[0]).join("").toUpperCase()}
                                    </div>
                                )}
                                <span>{cat?.ad?.seller?.name}</span>
                            </div>

                            <div className="card_body">
                                <h3>{cat?.ad?.information?.title.substring(0, 18)}...</h3>
                                <div className="card_meta">
                                    <div className="ciLocationOn">
                                        <CiLocationOn style={{ color: "var(--main-color)", fontSize: "12px", fontWeight: "bold" }} />
                                        <span>{cat?.ad?.user?.area || "غير محدد"}</span>
                                    </div>
                                    <div className="ciStopwatch">
                                        <CiStopwatch style={{ color: "var(--main-color)", fontSize: "12px", fontWeight: "bold" }} />
                                        <span>{timeSince(cat?.ad?.created_at)}</span>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/${cat?.category}/${cat?.ad?.id_ads}`} className="details_link">
                                عرض التفاصيل
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};