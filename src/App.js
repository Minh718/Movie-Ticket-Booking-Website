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
import AdminPage from "./components/Body/Admin";
import Client from "./components/Body/Admin/pages/Client";
//Tim icon o day https://react-icons.github.io/react-icons

function App() {
  const { setOpenSetting, setQuery, inPageAdmin } = useGlobalContext();
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
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/booking" element={<BookingTicket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/historyTicket" element={<HistoryTicket />} />
          <Route path="/detailMovie/:id" element={<DetailMovie />} />
          <Route path="/admin-page" element={<AdminPage />}>
            {/* <Route path="client" element={<Client />} /> */}
          </Route>
          {/* <Route path="/admin-page/client" element={<Client />} /> */}

          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        {!inPageAdmin && <Footer />}
      </Router>
    </div>
  );
}

export default App;
