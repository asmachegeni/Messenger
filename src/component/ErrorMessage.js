import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./../style/ErrorMessage.css";
const ErrorMessage = ({ text = "invalid Password" }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".Errorcontainer").style.animation = "error 3s";
      setTimeout(() => {
        document.querySelector(".Errorcontainer").style.opacity = 0;
      }, 3000);
    }, 1500);
  }, []);
  return (
    <div className="Errorcontainer">
      <span>{text}</span>
      <AiOutlineClose
        className="icon"
        onClick={() => {
          document.querySelector(".Errorcontainer").style.animation = "error 1s";
          setTimeout(() => {
            document.querySelector(".Errorcontainer").style.opacity = 0;
          }, 900);
        }}
      />
    </div>
  );
};
export default ErrorMessage;
