import React from 'react'
import { useState } from 'react';
const ToggleContext=React.createContext()

const ThemeProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    const toggleFunction = () => {
      setToggle(!toggle);
    };
    
    return (
      <ToggleContext.Provider value={{ toggle, toggleFunction, }}>
        {children}
      </ToggleContext.Provider>
    );
  };
  export { ToggleContext, ThemeProvider };