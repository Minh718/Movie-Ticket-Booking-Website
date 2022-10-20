import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [user,setUser] = useState("Rey");
  return (
    <AppContext.Provider value={{ openSetting, setOpenSetting,user,setUser }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
