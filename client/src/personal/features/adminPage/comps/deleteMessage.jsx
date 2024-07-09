import React from "react";
import styles from "../css/delete.module.css"
import { toast } from "react-hot-toast"
import axios from "axios";

const DeleteMessage = ({ deleteId, onDeleteMessage }) => {
  
  const handleClick = async () => {
    try {
      // Make the API call using Axios
      const response = await axios.delete(`/deleteContact/${deleteId}`);
      onDeleteMessage();
      if (response.status === 205) {
        toast.success("Successfully deleted message");
      }
    } catch (error) {
      // Handle errors
      console.error("Error deleting Message:", error);
    }
  };
  return (
    <button id={styles.delete} onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteMessage;
