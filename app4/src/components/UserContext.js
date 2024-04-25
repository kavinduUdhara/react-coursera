import React, { createContext, useContext, useState } from "react";

const userContext = createContext();

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState("Kavindu");

    return(
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => {return useContext(userContext)};