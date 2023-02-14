import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import ChatItem from "./ChatItem";
import "./../style/Search.css";
import Cookies from "js-cookie";
const Search = ({ change, handleClick }) => {
  const [content, setContent] = useState("");
  const [contactSearch, setSearch] = useState([]);
  const inp = useRef();
  const SearchContact = (input) => {
    let token = Cookies.get("access_token");
    if (input) {
      fetch("https://asmachegeni.ir/sanctum/csrf-cookie", {
        headers: {
          credentials: "same-origin",
        },
      }).then((response) => {
        fetch(" https://asmachegeni.ir/api/user/search ", {
          method: "POST",
          headers: {
            credentials: "same-origin",
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            username: input,
          }),
        })
          .then((data) => {
            return data.json();
          })
          .then((response) => {
            let temp = [];
            for (const x in response.result) {
              temp.push(response.result[x]);
            }
            setSearch(temp);
            // console.log(temp);
          });
      });
    }
  };
  return (
    <div className="SearchContainer">
      <div className="Searchbar">
        {content ? (
          <AiOutlineClose
            className="CloseIcon"
            onClick={() => {
              setContent("");
              SearchContact([""]);
            }}
          />
        ) : (
          <AiOutlineSearch className="SearchIcon" />
        )}
        <input
          placeholder="جستجو  "
          className="SearchInput"
          onChange={(e) => {
            setContent(e.target.value);
            SearchContact(e.target.value);
          }}
          value={content}
          ref={inp}
        />
        <AiOutlineArrowLeft className="BackIcon" onClick={change} />
      </div>

      {contactSearch.map((contactS) => {
        return contactS ? (
          <ChatItem
            handleClick={() => {
              handleClick(contactS);
            }}
            ContactName={contactS.name}
            nameClass={"nameSearch"}
            key={contactS.id}
            isNotif={false}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};
export default Search;
