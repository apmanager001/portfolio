import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import Admin from "./personal/features/adminPage/admin";
import PersonalHomePage from "./personal/pages/personalHomePage";
import Portfolio from "./pages/comps/portfolio";
import Photo from "./personal/pages/photo";
import Me from "./personal/pages/me";
import Blog from "./personal/features/blog/blog";
import Contact from "./personal/features/contact/contact";
import Login from "./personal/features/login/login";
import Register from "./personal/features/login/register";
import axios from "axios";
import "./App.css";

import Homepage from "./portfolio/homepage";

const url = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = url || process.env.VITE_API_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 8000 }} />
      <Routes>
        <Route path="/portfolio" element={<Homepage />} />

        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<PersonalHomePage />} />
        <Route path="/me" element={<Me />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/photography" element={<Photo />} />
        <Route path="//blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
