import Login from "./component/Login";
import Register from "./component/Register";
import ChatRoom from "./component/ChatRoom";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ChatRoom" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
