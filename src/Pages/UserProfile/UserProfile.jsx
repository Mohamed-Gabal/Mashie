import React, { useContext, useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { contextData } from '../../Context/Context';
import SideBarUserProfile from '../../Components/SideBarUserProfile/SideBarUserProfile';
import LoginRequiredCard from '../../Components/AdvertisementsComponents/LoginRequiredCard/LoginRequiredCard';
import "./userProfileStyle.css"

export default function UserProfile() {
    const { token } = useContext(contextData);
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const sidebarRef = useRef(null);
    const toggleBtnRef = useRef(null);
    useEffect(() => {
        if (!toggleSidebar) return;

        const handleClickOutside = (e) => {
            const target = e.target;

            if (
                (sidebarRef.current && sidebarRef.current.contains(target)) ||
                (toggleBtnRef.current && toggleBtnRef.current.contains(target))
            ) {
                return;
            }

            setToggleSidebar(false);
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleSidebar]);
    return (
        <div className='userProfile'>
            {token ?
                <>
                    <div className="toggle_sidebar" onClick={() => setToggleSidebar(!toggleSidebar)} ref={toggleBtnRef} >
                        {toggleSidebar ?
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-columns2-icon lucide-columns-2"><rect width={18} height={18} x={3} y={3} rx={2} /><path d="M12 3v18" /></svg>
                        }
                    </div>
                    <SideBarUserProfile
                        toggleSidebar={toggleSidebar}
                        setToggleSidebar={setToggleSidebar}
                        sidebarRef={sidebarRef}
                    />
                    <Outlet />
                </>
                :
                <LoginRequiredCard />
            }
        </div>
    )
}