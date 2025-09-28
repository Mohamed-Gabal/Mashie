import React from "react";
import "./aboutUsPlatform.css";
import { PiDeviceMobileCamera } from "react-icons/pi";


const AboutUsPlatform = () => {
  return (
    <div className="aboutUsPlatform">
      <div className="aboutUsPlatform_right">
        <h2 className="aboutUsPlatform_right_heading">منصه ماشي</h2>
        <p className="aboutUsPlatform_right_para">
          ماشي هو منصّة إعلانات مبوّبة مبتكرة، تساعدك على بيع منتجاتك أو شراء ما
          تحتاجه في دقائق.
        </p>
      </div>
      <div>
        <span className="aboutUsPlatform_line">
          <img src="/Icons/categore4.svg" alt="العقارات"></img>
        </span>
        <span className="aboutUsPlatform_line_text">عقارات</span>
      </div>
      <div>
        <span className="aboutUsPlatform_line">
          <img src="/Icons/categore3.svg" alt="السيارات"></img>
        </span>
        <span className="aboutUsPlatform_line_text">سيارات</span>
      </div>
      <div>
        <span className="aboutUsPlatform_line">
          <img src="/Icons/categore5.svg" alt="الاجهزه"></img>
        </span>
        <span className="aboutUsPlatform_line_text">الاجهزه</span>
      </div>
      <div>
        <span className="aboutUsPlatform_line">
          <img src="/Icons/categore6.svg" alt="الوظائف"></img>
        </span>
        <span className="aboutUsPlatform_line_text">الوظائف</span>
      </div>
      <div className="aboutUsPlatform_left">
        <div className="aboutUsPlatform_left_image">
          <PiDeviceMobileCamera className="aboutUsPlatform_left_image_icon" />
          <img src="/images/platform.png" alt="Platform" />
        </div>
      </div>
    </div>
  );
};
export default AboutUsPlatform;
