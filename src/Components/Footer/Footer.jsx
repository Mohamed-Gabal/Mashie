import React from "react";
import { Link } from "react-router-dom";
import "./footerStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col footer-logo">
          <Link to="/" className="footer-logo-link">
            <img
              src="/images/logo.svg"
              alt="Mashii Logo"
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-desc">
            مع ماشي… كل شيء أقرب إليك! اعرض منتجاتك، ابحث عن أفضل العروض، وتواصل
            مباشرة مع المشترين والبائعين بكل سهولة وأمان.
          </p>
        </div>

        <div className="footer-col footer-links">
          <h3 className="footer-title">الخدمات</h3>
          <ul>
            <li>
              <a href="#">التوصيل الالكتروني</a>
            </li>
            <li>
              <a href="#">الاعلام الرقمي</a>
            </li>
            <li>
              <a href="#">التسويق عبر وسائل التواصل</a>
            </li>
            <li>
              <a href="#">التسويق عبر المؤثرين</a>
            </li>
            <li>
              <a href="#">التسويق عبر محركات البحث</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-policies">
          <h3 className="footer-title">عن تواصل</h3>
          <ul>
            <li>
              <a href="#">من نحن</a>
            </li>
            <li>
              <a href="#">نظام النقاط والعضوية</a>
            </li>
            <li>
              <a href="#">اكتب معنا</a>
            </li>
            <li>
              <a href="#">سياسة الخصوصية</a>
            </li>
            <li>
              <a href="#">شروط الخدمة</a>
            </li>
            <li>
              <a href="#">تواصل معنا</a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-social">
          <h3 className="footer-title">تواصل معنا</h3>
          <div className="social-icons">
            <div className="icon">
              <img src="Icons/footer/linkedIn.svg" alt="linkedIn" />
            </div>
            <div className="icon">
              <img src="Icons/footer/youtube.svg" alt="youtube" />
            </div>
            <div className="icon">
              <img src="Icons/footer/instegram.svg" alt="instegram" />
            </div>
            <div className="icon">
              <img src="Icons/footer/facebook.svg" alt="facebook" />
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© جميع الحقوق محفوظة - ماشي 2025</p>
      </div>
      {/* Navbar */}
      <div className="nav-footer">
        <Link to='/'>
          <div className="footer-Link_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
          </div>
          <span>الرئيسيه</span>
        </Link>
        <Link to="/userProfile/userFavorites">
          <div className="footer-Link_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
          </div>
          <span>المفضله</span>
        </Link>
        <Link to="/advertisements">
          <div className="footer-Link_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus active-icon"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
          </div>
          <span>اضافه عرض</span>
        </Link>
        <Link>
          <div className="footer-Link_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
          </div>
          <span>الاشعارات</span>
        </Link>
        <Link>
          <div className="footer-Link_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /></svg>
          </div>
          <span>الرسائل</span>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;