import React, { useContext } from 'react'
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const AppContext=createContext();
export const ContextProvider = ({children}) => {
     const navigate=useNavigate()
     const values={navigate}
  return <AppContext.Provider value={values}>
    {children}
  </AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}

