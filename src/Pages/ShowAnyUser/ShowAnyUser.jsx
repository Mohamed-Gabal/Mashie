import React, { useEffect, useState } from 'react';
import "./showAnyUserStyle.css"
import { useParams } from 'react-router-dom';

export default function ShowAnyUser() {
    const { userID } = useParams();
    const [userData, setUserData] = useState({});
    console.log(userData);
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
                            <div className="status_dot" style={{backgroundColor:userData?.user?.is_online ? "var(--main-color)" : "var(--parg-color)" }}/>
                        </div>
                    </div>

                    <div className="user_info">
                        <h3 className="user_name">{userData?.user?.name}</h3>
                        <h6 className="user_status">
                            <span>آخر ظهور  </span>
                            <span>{userData?.user?.last_seen_at}</span>
                        </h6>
                    </div>

                    {errorMessage && <p className="error_message">{errorMessage}</p>}
                </div>
            </div>
        </section>
    )
};