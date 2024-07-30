import React from 'react'
import { useParams } from 'react-router-dom'

const Tags = () => {
    const {id} = useParams

    

    const searchByTag = async () => {
      try {
        const response = await axios.get(
          `/blogs/tag/${id}`
        );
        console.log("Blogs found:", response.data);
      } catch (error) {
        console.error("Error fetching blogs by tag:", error);
      }
    };
  return (
    <div>tags</div>
  )
}

export default Tags