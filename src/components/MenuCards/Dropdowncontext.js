import React, { createContext, useState, useContext } from 'react';

// Create context
const DropdownContext = createContext();

// Create provider
export const DropdownProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <DropdownContext.Provider value={{ openDropdown, handleDropdownToggle }}>
      {children}
    </DropdownContext.Provider>
  );
};

// Create custom hook
export const useDropdown = () => useContext(DropdownContext);
