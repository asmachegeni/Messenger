import React, { useState } from "react";
import Conversation from "./Conversation";
import "./../style/ChatRoom.css";
import Profile from "./Profile";
import ChatList from "./ChatList";
import Search from "./Search";
const ChatRoom = () => {
  const [phone, setPhone] = useState("09034179326");
  const [username, setUsername] = useState("asma");
  const [showSearch, setShowSearch] = useState(false);
  const [contacts, setContascts] = useState([
    {
      name: "نرگس",
      lastMessage: "باشه مرسی",
      phone: "09034179326",
      messages: [
        { text: "what??", date: "2022", senderPhone: "09034179326" },
        { text: "hi", date: "2022", senderPhone: "09034179326" },
        {
          text: "now fffjf ijifliuoi pipoupou ipoipo foudoiu ooo dfsdfkj jkjkjjhkj hkjhkjhk kjhkjhjk",
          date: "2022",
          senderPhone: "09034179322",
        },
      ],
    },
  ]);
  const [nowConversation, setNewConversation] = useState({});
  const AddMessage = (conversation, message) => {
    if (message) {
      let conversationTemp = conversation[0].messages.slice();
      conversationTemp.push({
        text: message,
        date: "2022",
        senderPhone: "09034179322",
      });
      let con = conversation.slice();
      con[0].messages = conversationTemp;
      setContascts(con);
    }
  };

  const changeComponent = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="ChatRoom">
      {showSearch ? (
        <div className="Chats">
          <Search change={changeComponent} />
        </div>
      ) : (
        <div className="Chats">
          <Profile change={changeComponent} />
          <ChatList contactInfo={contacts} />
        </div>
      )}

      <Conversation
        conversationInfo={contacts}
        userPhone={phone}
        AddMessage={AddMessage}
      />
    </div>
  );
};
export default ChatRoom;
