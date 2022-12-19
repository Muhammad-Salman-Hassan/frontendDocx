import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Verification from "./pages/Dashboard/Verification/Verification";
import Progress from "./pages/Dashboard/Progress/Progress";
import Profile from "./pages/Dashboard/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/userdashboard" element={<Dashboard />}>
            <Route path="verification" element={<Verification/>}/>
            <Route path="progress" element={<Progress/>}/>
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
