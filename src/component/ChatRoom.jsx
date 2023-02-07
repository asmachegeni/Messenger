import React, { useState, useRef, useEffect } from "react";
import Conversation from "./Conversation";
import "./../style/ChatRoom.css";
import Profile from "./Profile";
import ChatList from "./ChatList";
import Search from "./Search";
import Cookies from "js-cookie";
import Pusher from "pusher-js";
const ChatRoom = () => {
  const menu = useRef(null);
  const conv = useRef(null);
  const se = useRef(null);
  const [id, setId] = useState(0);
  const [isMoblie, setIsMoblie] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isForground, setIsForground] = useState(true);
  let [contacts, setContacts] = useState([]);
  const [nowConversation, setNewConversation] = useState(contacts[0]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let token = Cookies.get("access_token");
    fetch("http://asmachegeni.ir/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
      },
    }).then((response) => {
      fetch("http://asmachegeni.ir/api/user", {
        method: "GET",
        headers: {
          credentials: "same-origin",
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          setUsername(response.username);
          setName(response.name);
          setId(response.id);
        });
    });
    console.log("id", id);
    Pusher.logToConsole = true;

    var pusher = new Pusher("d606819a439ddf1201dc", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("chat25");
    channel.bind("App\\Events\\MessagePosted", function (data) {
      console.log("aaaaaa");
      console.log(data.message);
    });
  }, []);
  //-------------------------------------------------------------------------------------------
  const AddMessage = (oldMessages, message) => {
    let token = Cookies.get("access_token");
    if (message) {
      fetch("http://asmachegeni.ir/sanctum/csrf-cookie", {
        headers: {
          credentials: "same-origin",
        },
      }).then((response) => {
        fetch("http://asmachegeni.ir/api/send_message", {
          method: "POST",
          headers: {
            credentials: "same-origin",
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            content: message,
            receiver_id: id,
          }),
        })
          .then((data) => {
            if (data.status == 200) {
            }
            return data.json();
          })
          .then((res) => {});
      });
    }
  };
  //-------------------------------------------------------------------------------------------
  const AddContact = (NewContacts) => {
    console.log("new ", NewContacts);
    
    let hasContact = contacts.find((contact) => {
      console.log("3");

      return NewContacts.name === contact.name;
    });
    let temp = [];
    if (contacts.length !== 0) {
      temp = contacts.slice();
      console.log("eee");
    }

    if (!hasContact) {
      console.log("4");

      temp.push(NewContacts);
      contacts = temp.slice();
      setContacts(contacts);
      console.log("contact   ", contacts);

      console.log("5");
    }
    console.log("contact   ", contacts);
    console.log("temp   ", temp);
    LoadConversation(NewContacts.name);
    console.log("now   ", nowConversation);
  };
  //-------------------------------------------------------------------------------------------
  const changeComponent = (boolvalue) => {
    setShowSearch(boolvalue);
    if (!showSearch) {
      setIsMoblie(true);
    }
  };
  //-------------------------------------------------------------------------------------------
  const LoadConversation = (name) => {
    console.log("61");
    console.log(name);
    ShowConversation();
    let nowConract;
    contacts.forEach((contact) => {
      if (contact.name === name) {
        nowConract = contact;
      }
    });
    setNewConversation(nowConract);
  };

  //-------------------------------------------------------------------------------------------
  const ShowMenu = () => {
    menu.current.classList.remove("background");
    menu.current.classList.remove("no");
    menu.current.classList.add("foregroundComponent");
    conv.current.classList.remove("foregroundComponent");
    conv.current.classList.add("background");
    menu.current.classList.add("Chats");
    se.current.classList.add("no");
    se.current.classList.remove("Chats");
    se.current.classList.remove("foregroundComponent");
  };
  //-------------------------------------------------------------------------------------------
  const ShowConversation = () => {
    conv.current.classList.remove("background");
    conv.current.classList.add("foregroundComponent");
    menu.current.classList.remove("foregroundComponent");
    menu.current.classList.add("background");

    se.current.classList.remove("foregroundComponent");
    se.current.classList.remove("Chats");
    se.current.classList.add("background");
  };
  //-------------------------------------------------------------------------------------------
  const ShowSearch = () => {
    conv.current.classList.remove("foregroundComponent");
    menu.current.classList.remove("foregroundComponent");
    menu.current.classList.remove("Chats");
    menu.current.classList.add("background");
    menu.current.classList.add("no");
    se.current.classList.remove("no");
    se.current.classList.add("Chats");
    se.current.classList.remove("background");
    se.current.classList.add("foregroundComponent");
  };
  //-------------------------------------------------------------------------------------------
  return (
    <div className="ChatRoom">
      <div ref={se} className={"no"}>
        <Search change={ShowMenu} handleClick={AddContact} />
      </div>
      <div className={"Chats foregroundComponent"} ref={menu}>
        <Profile change={ShowSearch} name={name} username={username} />
        <ChatList contactInfo={contacts} handleClick={LoadConversation} />
      </div>
      <div ref={conv} className="ConversactoinSec  background">
        {contacts.length !== 0 ? (
          <Conversation
            conversationInfo={nowConversation}
            messages={messages}
            AddMessage={AddMessage}
            ShowMenu={ShowMenu}
          />
        ) : (
          false
        )}
      </div>
    </div>
  );
};
export default ChatRoom;
