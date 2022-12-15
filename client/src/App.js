import { Header, Footer, Body, BookingSeat } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Body/Home/index";
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
import Client from "./components/Body/Admin/pages/client/Client";
import Error from "./components/Body/Error";
import Vouchers from "./components/Body/vouchers";
import Payment from "./components/Body/BookingTicket/Payment";
import PaymentSuccess from "./components/Body/BookingTicket/PaymentCuccess";
import HomeAdmin from "./components/Body/Admin/pages/home/Index";
import ShowManagement from "./components/Body/Admin/components/ShowManagement/index";
import ShowTimeManagement  from "./components/Body/Admin/components/ShowTimeManagement/index"
import { handleRefreshWeb } from "./apiRequest";
import{ useEffect } from "react";
//Tim icon o day https://react-icons.github.io/react-icons

const PageHome = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const { setOpenSetting, setQuery, user,setUser } = useGlobalContext();
  useEffect(() => {
    const getUser = async () => {
        setUser(await handleRefreshWeb() || null);
    };
    getUser();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="">
        <Route path="/" element={<PageHome />}>
          <Route path="/" element={<Home />} />
          <Route
            path="login"
            element={user ? <Navigate to={"/"} /> : <LoginPage />}
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="booking" element={<BookingTicket />} />
          <Route path="seatSelection" element={<BookingSeat />} />
          <Route path="seatSelection/payment" element={<Payment />} />
          <Route path="paymentSuccess" element={<PaymentSuccess />} />
          <Route path="profile" element={<Profile />} />
          <Route path="historyTicket" element={<HistoryTicket />} />
          <Route path="vouchers" element={<Vouchers />} />
          <Route path="/detailMovie/:id" element={<DetailMovie />} />
          <Route path="news/:id" element={<NewsDetail />} />
        </Route>
        {!!user?.isAdmin && (
          <Route path="/adminPage" element={<AdminPage />}>
            <Route path="" element={<HomeAdmin />} />
            <Route path="client" element={<Client />} />
            <Route path="show" element={<ShowManagement />} />
            <Route path="showtime" element={<ShowTimeManagement />} />
          </Route>
        )}
      </Route>
    )
  );
  return (
    <div
      id="App"
      onClick={() => {
        setOpenSetting(false);
        setQuery("");
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
