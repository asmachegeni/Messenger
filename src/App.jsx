import Login from "./component/Login";
import Register from "./component/Register";
import ChatItem from "./component/ChatItem";
import ChatList from "./component/ChatList";
import Message from "./component/Message";
import Title from "./component/Title";
import Conversation from "./component/Conversation";
import ChatRoom from "./component/ChatRoom";
import Profile from "./component/Profile";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Search from "./component/Search";
function App() {
  return (
    // <div className="App">
    // <ChatItem/>
    // <ChatList/>
    // <Title/>
    // <Message/>
    // <Conversation/>
    // <ChatRoom />
    <Search />
    // <Profile />
    // <Login/>
    // <Register/>
    // </div>
  );
}

export default App;
