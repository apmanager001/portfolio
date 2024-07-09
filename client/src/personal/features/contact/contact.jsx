import React from "react";
import Header from "../../pages/comps/header";
import Footer from "../../pages/comps/footer";
import styles from "./css/contact.module.css";

const Contact = () => {
  return (
    <>
      <Header />

      <div className={styles.contactContainer}>Contact</div>

      <Footer />
    </>
  );
};

export default Contact;
