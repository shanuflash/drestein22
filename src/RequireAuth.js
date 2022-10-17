import { Navigate,Outlet } from "react-router";
import { useAuthStatus } from "./hooks/useAuthStatus";
const PrivateRoute = ()=>{
  const {loggedIn,checkingStatus}=useAuthStatus()
  if(checkingStatus){
    return <h3>Loding...</h3>
  }
  return loggedIn ? <Outlet/> : <Navigate to='/Admin/login'/>
}
export default PrivateRoute;