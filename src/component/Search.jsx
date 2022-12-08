import React, { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import ChatItem from "./ChatItem";
import "./../style/Search.css";
const Search = ({
  contacts = ["asma", "acaa", "ad", "rezvan","اسما"],
  change,
  handleClick,
}) => {
  const [content, setContent] = useState("");
  const [contactSearch, setSearch] = useState([""]);
  const SearchContact = (input) => {
    let temp = [];
    let temp2 = [];
    if (input) {
      contacts.forEach((contact) => {
        if (contact.slice(0, input.length) === input) {
          temp.push(contact);
          temp2 = [...new Set(temp)];
        }
      });
      setSearch(temp2);
    } else {
      setSearch([]);
    }
  };
  return (
    <div className="SearchContainer">
      <div className="Searchbar">
        {content ? (
          <AiOutlineClose className="CloseIcon" onClick={change} />
        ) : (
          <AiOutlineSearch className="SearchIcon" />
        )}
        <input
          placeholder=" ....جستجو  "
          className="SearchInput"
          onChange={(e) => {
            SearchContact(e.target.value);
            setContent(e.target.value);
          }}
        />
        <AiOutlineArrowLeft className="backIcon" />
      </div>
      {contactSearch.map((contactS) => {
        return contactS ? (
          <ChatItem
            handleClick={handleClick}
            ContactName={contactS}
            lastMessage={""}
            nameClass={"nameSearch"}
            key={contactS}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};
export default Search;
