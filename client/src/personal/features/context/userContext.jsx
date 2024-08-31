import React, { createContext, useState, useEffect } from "react";

import axios from 'axios'


export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    if (!user) {
      axios.get("/admin").then(({ data }) => {
        setUser(data);
        console.log(data)
        console.log("userContext logged in")
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}