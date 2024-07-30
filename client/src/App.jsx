import { Route, Routes, useLocation} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./personal/pages/comps/header"
import Footer from "./personal/pages/comps/footer";
import Admin from "./personal/features/adminPage/admin";
import PersonalHomePage from "./personal/pages/personalHomePage";
import Photo from "./personal/pages/photo";
import Me from "./personal/pages/me";
import Blog from "./personal/features/blog/blog";
import Contact from "./personal/features/contact/contact";
import Login from "./personal/features/login/login";
import Register from "./personal/features/login/register";
import axios from "axios";
import Tags from "./personal/features/blog/tags";
import "./App.css";

import Homepage from "./portfolio/homepage";
import IndividualBlog from "./personal/features/blog/individualBlog";

const url = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = url || process.env.VITE_API_URL;
axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/portfolio"];
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 8000 }} />
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/portfolio" element={<Homepage />} />

        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<PersonalHomePage />} />
        <Route path="/me" element={<Me />} />
        <Route path="/photography" element={<Photo />} />
        <Route path="//blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/:id" element={<IndividualBlog />} />
        <Route path="/tags/:id" element={<Tags />} />
      </Routes>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
