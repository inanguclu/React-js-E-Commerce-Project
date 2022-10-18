import { Navigate } from "react-router-dom"
import AdminLogin from "../components/ManagerComponent/LoginManager"
import AdminNavbar from "../components/ManagerComponent/NavBarManager"
import { control } from "../util"

function UserSecurity( item: { component: JSX.Element} ) {

    const jwt = control()
    let adminRole = false
    if ( jwt !== null ) {     
      jwt.result.authorities.map( item => {
          if (item.authority === "ROLE_admin") {
            adminRole = true
          }
      })
    }
  
    return (
        adminRole === false
      ?
      <Navigate to='/' replace />
      :
      <><AdminLogin/>{item.component}</>
    )
  }
  
  export default UserSecurity