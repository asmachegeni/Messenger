import React, { useState, useRef, useEffect } from "react";
import Conversation from "./Conversation";
import "./../style/ChatRoom.css";
import Profile from "./Profile";
import ChatList from "./ChatList";
import Search from "./Search";
import Cookies from "js-cookie";
import Pusher from "pusher-js";
import song from "./../assets/Note.mp3";
import click from "./../assets/send.mp3";
const ChatRoom = () => {
  const menu = useRef(null);
  const conv = useRef(null);
  const se = useRef(null);
  let [id, setId] = useState(0);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  let [contacts, setContacts] = useState([]);
  let [nowConversation, setNewConversation] = useState(contacts[0]);
  let [pusherr, setPusher] = useState({});
  const audio = new Audio(song);
  const sound = new Audio(click);
  audio.loop = true;
  useEffect(() => {
    let token = Cookies.get("access_token");
    fetch("https://asmachegeni.ir/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
      },
    }).then((response) => {
      fetch("https://asmachegeni.ir/api/user", {
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
          id = response.id;
          setId(id);
          // console.log("res ", response.id);
        });
    });

    var pusher = new Pusher("d606819a439ddf1201dc", {
      cluster: "ap2",
    });
    pusherr = pusher;
    setPusher(pusherr);
    // console.log("id", id);
    // console.log("here");
  }, []);
  useEffect(() => {
    if (id !== 0) {
      // console.log("f ", id);

      let token = Cookies.get("access_token");
      fetch("https://asmachegeni.ir/sanctum/csrf-cookie", {
        headers: {
          credentials: "same-origin",
        },
      }).then((response) => {
        fetch("https://asmachegeni.ir/api/user", {
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

      Pusher.logToConsole = false;
      var channel = pusherr.subscribe(`chat${id}`);
      channel.bind(
        "App\\Events\\MessagePosted",
        function (data) {
          // console.log("messge", data);

          let msg = {
            content: data.message.content,
            receiver_id: data.message.receiver_id,
            sender_id: data.message.sender_id,
            updated_at: data.message.updated_at,
            created_at: data.message.created_at,
            position: data.message.position,
          };
          let hasContact = contacts.find((contact) => {
            return data.message.sender.id === contact.id;
          });
          if (!hasContact) {
            let tempContact = data.message.sender;
            tempContact.messages = [];
            tempContact.isNotif = true;
            // audio.play();
            playMusic();
            tempContact.messages.push(msg);
            AddContact(tempContact);
          } else {
            let temp = contacts.slice();
            temp.forEach((contact) => {
              if (data.message.sender_id === contact.id) {
                if (contact.messages) {
                  contact.messages.push(msg);
                  contact.isNotif = true;
                  // audio.play();
                  playMusic();
                } else {
                  contact.messages = [];
                  contact.messages.push(msg);
                  contact.isNotif = true;
                  // audio.play();
                  playMusic();
                }
                nowConversation = contact;
              }
            });
            contacts = temp;
            setNewConversation(nowConversation);
            setContacts(contacts);
          }
        },
        channel.unbind()
      );
    }
  });
  //-------------------------------------------------------------------------------------------
  const AddMessage = (message) => {
    let token = Cookies.get("access_token");
    if (message) {
      fetch("https://asmachegeni.ir/sanctum/csrf-cookie", {
        headers: {
          credentials: "same-origin",
        },
      }).then((response) => {
        fetch("https://asmachegeni.ir/api/send_message", {
          method: "POST",
          headers: {
            credentials: "same-origin",
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            content: message,
            receiver_id: nowConversation.id,
          }),
        })
          .then((data) => {
            if (data.status == 200) {
            }
            return data.json();
          })
          .then((res) => {
            console.log(res);
            let temp = contacts.slice();
            temp.forEach((contact) => {
              if (nowConversation.id === contact.id) {
                if (contact.messages) {
                  let msg = res.message;
                  msg.position = "right";
                  contact.messages.push(msg);
                  // console.log("1 ", contact.messages);
                } else {
                  let msg = res.message;
                  msg.position = "right";
                  contact.messages = [];
                  contact.messages.push(msg);
                  // console.log("2 ", contact.messages);
                }
                nowConversation = contact;
              }
            });
            contacts = temp;
            setNewConversation(nowConversation);
            setContacts(contacts);
            // console.log("c ", contacts);
            // console.log("now ", nowConversation);
          });
      });
    }
    playSound();
  };
  //-------------------------------------------------------------------------------------------
  const AddContact = (NewContacts) => {
    ShowMenu();
    let hasContact = contacts.find((contact) => {
      return NewContacts.username === contact.username;
    });
    let temp = [];
    if (contacts.length !== 0) {
      temp = contacts.slice();
    }
    if (!hasContact) {
      temp.push(NewContacts);
      contacts = temp.slice();
      setContacts(contacts);
    }
    nowConversation = NewContacts;
    setNewConversation(nowConversation);
  };
  //-------------------------------------------------------------------------------------------
  const LoadConversation = (NewContacts) => {
    ShowConversation();
    nowConversation = NewContacts;
    let temp = contacts.slice();
    temp.forEach((contact) => {
      if ((contact.username = NewContacts.username)) {
        contact.isNotif = false;
      }
    });
    contacts = temp;
    setContacts(contacts);
    setNewConversation(nowConversation);
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
    // menu.current.classList.remove("foregroundComponent");
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
  const playMusic = () => {
    audio.loop = false;
    audio.play();
  };
  //-------------------------------------------------------------------------------------------

  const playSound = () => {
    sound.loop = false;
    sound.play();
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
            messages={nowConversation.messages}
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
