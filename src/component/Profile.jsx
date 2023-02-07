import React from "react";
import image from "./../assets/user.png";
import { AiOutlineSearch } from "react-icons/ai";
import "./../style/Profile.css";
const Profile = ({ change, name,username }) => {
  return (
    <div className="ProflieContainer">
      <div className="ProfiletTilte">
        <p className="TitleText">گفتگوها</p>
      </div>
      <div className="ProfileContent">
        <img src={image} className="ProfileImage" />
        <div className="ProfileInfo">
          <span className="name">{name}</span>
          <span className="phone">{username}</span>
        </div>
        <AiOutlineSearch className="iconSearch" onClick={change} />
      </div>
    </div>
  );
};
export default Profile;
