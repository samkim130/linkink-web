import React, { useState, createContext } from "react";

export const NavBarContext = createContext();

const MENU_DEFAULT = [
  {
    name: "Home",
    isActive: true,
    link: "/",
  },
  {
    name: "Search",
    isActive: false,
    link: "/search",
  },
  {
    name: "Favorites",
    isActive: false,
    link: "/favorites",
  },
  {
    name: "Schedule",
    isActive: false,
    link: "/schedule",
  },
  {
    name: "Community",
    isActive: false,
    link: "/community",
  },
];

const InputContextProvider = ({ children }) => {
  //define useStates
  const [menuIcons, setMenuIcons] = useState(MENU_DEFAULT);

  function onClick(itemNo) {
    setMenuIcons(
      menuIcons.map((icon, id) => {
        const isActive = itemNo === id ? true : false;
        return {
          ...icon,
          isActive: isActive,
        };
      })
    );
  }

  return (
    <NavBarContext.Provider value={{menuIcons, onClick}}>
      {children}
    </NavBarContext.Provider>
  );
};

export default InputContextProvider;
