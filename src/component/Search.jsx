import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import ChatItem from "./ChatItem";
import "./../style/Search.css";
const Search = ({ contacts = ["asma", "zsaa", "sd", "rezvan"], change }) => {
  const [content, setContent] = useState("");
  const [contactSearch, setSearch] = useState("");
  const SearchContact = (input) => {
    if (input) {
      contacts.forEach((contact) => {
        if (contact == input) {
          setSearch(input);
        }
      });
    } else {
      setSearch("");
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
      {contactSearch ? (
        <ChatItem
          ContactName={contactSearch}
          lastMessage={""}
          nameClass={"nameSearch"}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Search;
