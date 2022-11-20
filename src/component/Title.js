import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import image from "./../assets/images.png";
import "./../style/Title.css";
const Title = ({ name }) => {
  return (
    <div className="titleContainer">
      <div className="content">
        <img src={image} className="profile" />
        <span className="nameC">{name}</span>
      </div>
      <AiOutlineArrowRight className="backIcon" />
    </div>
  );
};
export default Title;
