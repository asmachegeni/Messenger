import React ,{useState}from "react";
import moment from "jalali-moment";
import './../style/Message.css'
const Message = ({ text="cjjg fjh kbokok lpvfof ccjnfk vjkjjk ljlksjl vjffjffjfjffjfj", date='20222/10/24 23:25' ,User=false}) => {
  const[isUser,setIsUser]=useState(User)
  return (
    <div className={isUser? "messageContainerUser":"messageContainerClient"}>
      <p className={isUser?"textUser":"textClient"} >{text}</p>
      <span className={isUser?"dateUser":"dateClient"}>{moment(date).format("LT")}</span>
    </div>
  );
};
export default Message;