import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "./components/baseComponents/Dashboard";

import AdminLogin from "./components/ManagerComponent/LoginManager";
import UserSecurity from "./security/UserSecurity";
import AdminCategory from "./components/ManagerComponent/CategoryManager";
import AdminOrder from "./components/ManagerComponent/OrderManager";
import AdminProduct from "./components/ManagerComponent/ProductManager";
import ProductImage from "./components/ManagerComponent/ProductImage";
import OrderDetail from "./components/ManagerComponent/OrderDetail";
import UserHomePage from "./components/customerComponent/SiteHome";
import Register from "./components/customerComponent/Register";
import ProductDetail from "./components/customerComponent/ProductDetail";

import UserLogin from "./components/customerComponent/Login";
import UserOrder from "./components/customerComponent/Order";
import ProductCategory from "./components/customerComponent/ProductCategory";




export const routes =
    <BrowserRouter>
        <ToastContainer />
        <Routes>            
            <Route path="/" element={<UserLogin/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard />}/>

            <Route path="/adminCategory" element={<AdminCategory />}/>                                                                                                                                                                                                                                                        
            <Route path="/adminProduct" element={<AdminProduct />}/>      
            <Route path='/productImage/:pid' element={<ProductImage />}  />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            <Route path="/adminOrder" element={<AdminOrder />}/>        
            <Route path="/orderDetail/:oid" element={<OrderDetail />}/>

            <Route path="/homePage" element={<UserHomePage />}/> 
            <Route path="/productDetail/:pid" element={<ProductDetail />}/>
            <Route path="/userOrders/:uid" element={<UserOrder />}/>
            <Route path="/category/:cid" element={<ProductCategory />}/>
            

            <Route path="/user" element={<UserSecurity component={<UserLogin/>}/>} />
            <Route path="/admin" element={<AdminLogin/>}/>
        </Routes>
    </BrowserRouter>