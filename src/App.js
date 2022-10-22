import { Header, Footer, Body } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Body/Home/index";
import RegisterPage from "./components/Body/Register/index";
import LoginPage from "./components/Body/Login/index";
import NewsPage from "./components/Body/News/index";
import MoviesPage from "./components/Body/Movies/index";
import SupportPage from "./components/Body/Support/index";
import UserPage from "./components/Body/User/index";
import BookingTicket from "./components/Body/BookingTicket/index";
import { useGlobalContext } from "./context";
import Profile from "./components/Body/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import HistoryTicket from "./components/Body/historyTicket";
import NewsDetail from "./components/Body/News/NewsDetail";
import DetailMovie from "./components/Body/detailMovie";
//Tim icon o day https://react-icons.github.io/react-icons

function App() {
  const { setOpenSetting, setQuery } = useGlobalContext();
  return (
    <div
      id="App"
      onClick={() => {
        setOpenSetting(false);
        setQuery("");
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/booking" element={<BookingTicket />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/historyTicket" element={<HistoryTicket />}></Route>
          <Route path="/detailMovie/:id" element={<DetailMovie />}></Route>
          <Route path="/news/:id" element={<NewsDetail />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
