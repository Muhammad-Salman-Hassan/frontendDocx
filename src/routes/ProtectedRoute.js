import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux";


const ProtectedRoute=({children})=>{
    const{isAuth}=useSelector((state)=>state.auth)
    let location=useLocation()
    return(
     !isAuth?(<Navigate to="/" state={{from:location}} replace/>):(children)
    )
  }

  export default ProtectedRoute