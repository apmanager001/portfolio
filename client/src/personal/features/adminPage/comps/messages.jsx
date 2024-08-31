import React, {useState, useEffect} from 'react'
import axios from 'axios';

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
      <div className="card bg-slate-500 text-primary-content w-96 h-96" key={index}>
        <div className='p-3 h-full text-left text-gray-800'>
          <div className='text-xl'>{message.location}</div>
          

          <div className='text-lg'>{message.name}</div>
          <div className='text-lg text-gray-800 hover:text-black'>
            <Link href={`mailto:${message.email}`}>{message.email}</Link>
          </div>
          <div className='pl-2'>{message.message}</div>
          <div className="card-actions justify-end ">
            <DeleteMessage
              deleteId={message._id}
              onDeleteMessage={toggleDeleteMessage}
            />
          </div>

        </div>
      </div>
    );
  });
};






  return (
    <>
      <div className='pt-8'>
        <h1>Messages</h1>

        <div className='flex justify-center flex-wrap gap-2'>{generateItemContainers()}</div>
      </div>
    </>
  );
}

export default Messages