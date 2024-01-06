import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Pagenotfound from "./pages/Pagenotfound"
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Products from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";


import './App.css';
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import GetProducts from "./pages/GetProducts"


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          
          <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/update-product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasssword />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/get-products" element={<GetProducts/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
      </>
  );
}

export default App;
