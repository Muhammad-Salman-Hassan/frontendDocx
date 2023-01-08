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
import NotFound from "./pages/PageNotFound/NotFound";
import Forgetpassword from "./pages/ForgetPassword/Forgetpassword";
// import ProtectedRoute from "./routes/ProtectedRoute";
import { Navigate, useLocation } from "react-router-dom"

import Cookies from "universal-cookie";
import CompleteProfile from "./pages/CompleteProfile/CompleteProfile";


function App() {
  return (
    <div className="App container-fluid gx-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<CompleteProfile />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/userdashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            
            <Route path="verification" element={<Verification />} />
            <Route path="progress" element={<Progress />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const ProtectedRoute=({children})=>{
  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  
  let isAuth=token===undefined?false:true
  // const isAuth=true
  console.log(isAuth)
  let location=useLocation()
  return(
   isAuth?(children):(<Navigate to="/" state={{from:location}} replace/>)
  )
}

export default App;
