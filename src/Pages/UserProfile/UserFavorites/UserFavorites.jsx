import React, { useContext, useEffect } from 'react';
import "./userFavoritesStyle.css"
import { contextData } from '../../../Context/Context';
import AdCard from '../../../Components/AdCard/AdCard';

export default function UserFavorites() {
    const { fetchUserFavorites, favorites, token } = useContext(contextData);
    useEffect(() => {
        fetchUserFavorites();
    }, [token]);

    return (
        <section className='UserFavorites_container'>
            <header className='userProfile_header'>
                <h2>مفضلتك</h2>
                <p>اعرض وأدر جميع إعلاناتك المحفوظة بسهولة</p>
            </header>
            <div className="UserFavorites_body">
                {Array.isArray(favorites) && favorites.length > 0 ? (
                    favorites.map((favorite) => (
                        <AdCard
                            key={favorite?.id_ads}
                            category={"category"}
                            adID={favorite?.id_ads}
                            img={favorite?.images?.[0]}
                            title={favorite?.information?.title}
                            sellerName={favorite?.seller?.name}
                            userID={favorite?.user?.id_user}
                            userImg={favorite?.user?.profile_image}
                            area={favorite?.user?.area}
                            created_at={favorite?.created_at}
                            price={favorite?.information?.price}
                            isFavorite= {false}
                        />
                    ))
                ) : (
                    <p>لا توجد إعلانات مفضلة حتى الآن</p>
                )}
            </div>
        </section>
    )
};