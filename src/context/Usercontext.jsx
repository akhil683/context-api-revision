import { createContext, useState } from "react";

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser ] = useState({});
  const value = { user, setUser };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}


export default UserContext;