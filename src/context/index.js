import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [user, setUser] = useState({ name: "kaka", isAdmin: true });
  const [moviesArePlaying, setMoviesArePlaying] = useState([]);
  const [query, setQuery] = useState("");
  const [inPageAdmin, setInPageAdmin] = useState(false);
  const [openBar, setOpenBar] = useState(true);
  return (
    <AppContext.Provider
      value={{
        moviesArePlaying,
        setMoviesArePlaying,
        openSetting,
        setOpenSetting,
        user,
        setUser,
        query,
        setQuery,
        inPageAdmin,
        setInPageAdmin,
        setOpenBar,
        openBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
