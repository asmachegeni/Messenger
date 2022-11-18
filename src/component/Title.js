import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import image from "./../assets/images.png";
import "./../style/Title.css";
const Title = ({ name = "aa" }) => {
  return (
    <div className="titleContainer">
      <div className="content">
        <img src={image} className="profile" />
        <span className="name">{name}</span>
      </div>
      <AiOutlineArrowRight className="backIcon" />
    </div>
  );
};
export default Title;
