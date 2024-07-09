import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styles from '../css/messages.module.css'
import DeleteMessage from './deleteMessage'
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast'

const Messages = () => {
    const [messages, setMessages] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(false);

    useEffect(() => {
      // Fetch auction information when component mounts
      axios
        .get(`/messages`)
        .then((response) => {
          // Update state with fetched auction information
          setMessages(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error getting messages:", error);
        });
    }, [deleteMessage]);

    const toggleDeleteMessage = () => {
      setDeleteMessage((prevState) => !prevState);
    };

const generateItemContainers = () => {
  if (!messages) {
    return null;
  }

  // Get an array of values (arrays) from the auctionData object
  const message = Object.values(messages);
  return message.map((message, index) => {
    

    return (
      <div className={styles.itemContainer}>
        <div className={styles.relativeContainer}>
          <div className={styles.itemFrom}>{message.location}</div>
          <div className={styles.delete}>
            <DeleteMessage
              deleteId={message._id}
              onDeleteMessage={toggleDeleteMessage}
            />
          </div>
          
          <div className={styles.name}>{message.name}</div>
          <div className={styles.email}>
            <a href={`mailto:${message.email}`}>{message.email}</a>
          </div>
          <div className={styles.message}>{message.message}</div>
        </div>
      </div>
    );
  });
};






  return (
    <>
      <div className={styles.messagesContainer}>
        <h1>Messages</h1>

        <div className={styles.gridContainer}>{generateItemContainers()}</div>
      </div>
    </>
  );
}

export default Messages