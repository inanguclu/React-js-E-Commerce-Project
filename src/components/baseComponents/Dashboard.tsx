import React from 'react'
import { Navigate } from 'react-router-dom'
import { control } from '../../util'
import AdminNavbar from '../ManagerComponent/NavBarManager'
import UserLogOut from './Logout'



function Dashboard() {
  
  const jwt = control()
   
  const fncRouter = ( role:string ) => {
    
    if ( role === 'ROLE_user' ) {
        return <Navigate to='/homePage' replace />
    }
  }

  return (
    
    jwt === null 
    ?
    <Navigate to='/' replace />
    :
    <>
      { fncRouter(jwt.result.authorities[0].authority) }
     <AdminNavbar/>
     <br />
     <br /><br />
     <br />
     <h2 className='text fw-bold text-center'> DashBoard</h2>
    </> 

  )
}
export default Dashboard