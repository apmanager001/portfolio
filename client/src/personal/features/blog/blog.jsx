import React from "react";
import Header from "../../pages/comps/header";
import Footer from "../../pages/comps/footer";
import styles from "./css/blog.module.css";

const Blog = () => {
  return (
    <>
      <Header />
      <div className={styles.blogContainer}>Blog</div>
      <Footer />
    </>
  );
};

export default Blog;
