import { createContext, useState, useRef } from "react";

export const DropDownContext = createContext();

const DropDownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (ev) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      setIsOpen(false);
    }
  };

  return (
    <DropDownContext.Provider
      value={{
        ref,
        isOpen,
        handleToggleMenu,
        handleClickOutside,
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownProvider;
