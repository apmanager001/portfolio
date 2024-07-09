import React, { useState } from "react";
import Header from "../../pages/comps/header";
import Footer from "../../pages/comps/footer";
import { toast } from "react-hot-toast";
import styles from "./css/register.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { email, password, password2 } = data;

    //check to make sure passwords match
    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post("/register", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Successful. Welcome!");
        navigate("/personal/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className={styles.registerContainer}>
        <form onSubmit={registerUser}>
          <h2>Register</h2>

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="password2"
            value={data.password2}
            onChange={(e) => setData({ ...data, password2: e.target.value })}
            placeholder="Repeat Password"
            required
          />
          <input type="submit" id={styles.button} value="Register" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
