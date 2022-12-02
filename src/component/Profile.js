import React from "react";
import image from "./../assets/user.png";
import {AiOutlinePlusCircle} from "react-icons/ai";
import './../style/Profile.css'
const Profile = () => {
  return (
    <div className="ProflieContainer">
      <div className="ProfiletTilte">
        <p className="TitleText">Chats</p>
      </div>
      <div className="ProfileContent">
        <img src={image} className="ProfileImage"/>
        <div className="ProfileInfo">
          <span className="name">Asma</span>
          <span className="phone">09034179326</span>
        </div>
        <AiOutlinePlusCircle className="iconPlus" />
      </div>
    </div>
  );
};
export default Profile;
