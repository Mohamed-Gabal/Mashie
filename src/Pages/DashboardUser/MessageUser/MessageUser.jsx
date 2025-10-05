import React from "react";
import "./messageUser.css";
import MessageUserPerson from "../../../Components/DashboardUserComponent/MessageUserPerson/MessageUserPerson";
import MessageUserAll from "../../../Components/DashboardUserComponent/MessageUserAll/MessageUserAll";

const MessageUser = () => {
  return (
    <div className="Message_user">
      <div className="Message_user_person">
        <MessageUserPerson />
      </div>

      <div className="Message_user_all">
        <MessageUserAll />
      </div>
    </div>
  );
};
export default MessageUser;
