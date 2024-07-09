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
<<<<<<< HEAD
import Homepage from "./portfolio/homepage";
=======
>>>>>>> 62aa73246abcb1f7a6ac8cd673738b8a41b563d1

const url = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = url || process.env.VITE_API_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 8000 }} />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Homepage />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 62aa73246abcb1f7a6ac8cd673738b8a41b563d1
        <Route path="/admin" element={<Admin />} />
        <Route path="/personal" element={<PersonalHomePage />} />
        <Route path="/personal/me" element={<Me />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/personal/photography" element={<Photo />} />
        <Route path="/personal/blog" element={<Blog />} />
        <Route path="/personal/contact" element={<Contact />} />
        <Route path="/personal/login" element={<Login />} />
        <Route path="/personal/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
