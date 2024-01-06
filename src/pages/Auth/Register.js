import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container flex justify-center items-center">
        <form onSubmit={handleSubmit} className="form px-10">
          <h4 className="text-xl text-center my-5 font-bold ">REGISTRATION FORM</h4>
          <div className="mb-3 flex flex-col justify-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 text-lg outline-none"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
          <div className="mb-3 flex flex-col justify-center">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 text-lg outline-none"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3 flex flex-col justify-center">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-2 text-lg outline-none"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3 flex flex-col justify-center">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="p-2 text-lg outline-none"
              id="exampleInputEmail1"
              placeholder="What is your City of Birth?"
              required
            />
          </div>
          <button type="submit" className="btn py-2 px-3 bg-green-600 rounded-full my-2 font-semibold text-white">
            REGISTER
          </button>
          <div>
          <h4 className="mb-2 font-semibold text-zinc-900">Already Registered ? <Link to="/login"><b>Login Here</b></Link></h4>
        </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;