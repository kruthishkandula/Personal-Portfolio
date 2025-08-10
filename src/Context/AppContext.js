import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null)
  const [userName, setUserName] = useState(null)
  const [userToken, setUserToken] = useState(null)

  const values = {
    userRole,
    setUserRole,
    userName,
    setUserName,
    userToken,
    setUserToken
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppContextProvider
