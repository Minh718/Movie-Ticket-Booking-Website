import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [moviesArePlaying, setMoviesArePlaying] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
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
