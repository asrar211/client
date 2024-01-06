import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, Link, useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [auth, setAuth] = useAuth();
 const location = useLocation();

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state ||"/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login - Ecommer App">
    <div className="form-container flex justify-center items-center">
        <form onSubmit={handleSubmit} className="form px-10">
          <h4 className="text-xl my-5 text-center font-bold ">LOGIN FORM</h4>

          <div className="mb-3 flex flex-col justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-lg outline-none"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3 flex flex-col justify-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 text-lg outline-none"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="flex flex-col justify-center items-center w-[60%]">
          <button type="submit" className="btn2 py-2 px-3 bg-green-600 rounded-full my-2 font-semibold text-white">
            LOGIN
          </button>
          <button onClick={()=> {navigate('/forgot-password')}} type="submit" className="btn3 py-2 px-3 underline text-red-900 my-2 font-semibold text-white">
            Forgot Password
          </button>
          
          </div>
          <div>
          <h4 className="mb-2 font-semibold text-zinc-900">Not Registered Yet? <Link to="/register"><b>Regsiter Here</b></Link></h4>
        </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;