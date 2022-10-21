import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [user, setUser] = useState("Rey");
  const [moviesArePlaying, setMoviesArePlaying] = useState([]);
  const [query, setQuery] = useState("");
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
