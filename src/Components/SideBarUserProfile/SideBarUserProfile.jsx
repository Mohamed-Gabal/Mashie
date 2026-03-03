import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./SideBarStyle.css";
import { contextData } from "../../Context/Context";
import Logout from "../../Pages/Auth/Logout/Logout";

export default function SideBarUserProfile({ toggleSidebar, setToggleSidebar, sidebarRef }) {
    const navigate = useNavigate();

    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className={`userSideBar_container ${toggleSidebar ? "" : "hidden"}`} ref={sidebarRef}>
            <div className={`userSidebar_content  ${toggleSidebar ? "" : "hidden"}`}>
                <div className="userSidebar_links">
                    <ul className="userSidebar_links_group">
                        <li onClick={() => setToggleSidebar(false)}>
                            <NavLink to="/userProfile" end className="link">
                                <div className="link_icon">
                                    <img src="/Icons/house.svg" alt="house" />
                                </div>
                                <span>الرئيسيه</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setToggleSidebar(false)}>
                            <NavLink to="userOffers" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                <div className="link_icon">
                                    <img src="/Icons/offers.svg" alt="offers" />
                                </div>
                                <span>العروض</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setToggleSidebar(false)}>
                            <NavLink to="userNotifactions" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                <div className="link_icon">
                                    {/* <img src="/Icons/ChatTeardropGray.svg" alt="ChatTeardropGray" /> */}
                                    <img src="/Icons/Notification.svg" alt="Notification" />
                                </div>
                                <span>الإشعارات</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setToggleSidebar(false)}>
                            <NavLink to="userFavorites" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                <div className="link_icon">
                                    <img src="/Icons/heart.svg" alt="heart" />
                                </div>
                                <span>المفضلة</span>
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="userSidebar_links_group">
                        <li onClick={() => setToggleSidebar(false)}>
                            <NavLink to="userSettings" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                <div className="link_icon">
                                    <img src="/Icons/Setting.svg" alt="Setting" />
                                </div>
                                <span>الإعدادات</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setToggleSidebar(false)}>
                            <NavLink to="blogUser" className={({ isActive }) => (isActive ? "link active" : "link")} >
                                <div className="link_icon">
                                    <img src="/Icons/Blogger.svg" alt="Blogger" />
                                </div>
                                <span>المدونة</span>
                            </NavLink>
                        </li>
                        <li onClick={() => setToggleSidebar(false)}>
                            <NavLink to="helpUser" className={({ isActive }) => (isActive ? "link active" : "link")}>
                                <div className="link_icon">
                                    <img src="/Icons/HelpCircle.svg" alt="HelpCircle" />
                                </div>
                                <span>المساعدة</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="userSidebar_buttons">
                    <div className="returntoWebSite" onClick={() => { setToggleSidebar(false); navigate("/") }}>
                        <div className="linkToMaaashi">
                            <span>الذهاب للموقع</span>
                        </div>
                        <div className="returntoWebSite_icon">
                            <img src="/images/logo.svg" alt="logo" />
                        </div>
                    </div>

                    <button className="logout_btn" onClick={() => setShowConfirm(true)}>
                        <div className="link_icon">
                            <img src="/Icons/SignOut.svg" alt="SignOut" />
                        </div>
                        <span>تسجيل الخروج</span>
                    </button>
                </div>
            </div>

            {showConfirm && (<Logout setShowConfirm={setShowConfirm}/>)}
        </div>
    );
};