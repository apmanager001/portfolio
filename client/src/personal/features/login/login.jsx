import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../pages/comps/header";
import Footer from "../../pages/comps/footer";
import styles from "./css/login.module.css";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      const { data } = response;
      console.log(response.status)
      if (data.error) {
        if (response.status === 407) {
          toast.error("No User with this email.");
        } else if (response.status === 206) {
          toast.error("Sorry, you are not authorized to login.");
        } else if (response.status === 401) {
          toast.error("Your password Doesnt match our record");
        } else {
          toast.error(data.error);
        }
      } else {
        setData({});
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <>
      <Header />
      <div className={styles.loginContainer}>
        
        <form onSubmit={loginUser}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
          <input type="submit" id={styles.button} value="Login" />

        </form>

      </div>

      <Footer />
    </>
  );
};

export default Login;
