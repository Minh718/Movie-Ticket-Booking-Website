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
import Error from "./components/Body/Error";
import Vouchers from "./components/Body/vouchers";
import Payment from "./components/Body/BookingTicket/Payment";
import PaymentSuccess from "./components/Body/BookingTicket/PaymentCuccess";
import HomeAdmin from "./components/Body/Admin/components/home/Index";
import { handleRefreshWeb } from "./apiRequest";
import { useEffect } from "react";
import { Article } from "./components/Body/Admin/components/article/Article";
import { Movie } from "./components/Body/Admin/components/movie/Movie";
import { AddMovie } from "./components/Body/Admin/components/addMovie/index";
import { SlideShow } from "./components/Body/Admin/components/slideShow/SlideShow";
import { AddArticle } from "./components/Body/Admin/components/addArticle/index";
import { AddSlideShow } from "./components/Body/Admin/components/addSlideShow/index";
import { AddVoucher } from "./components/Body/Admin/components/addVoucher/index";

import { Voucher } from "./components/Body/Admin/components/voucher/Voucher";
import { EditVoucher } from "./components/Body/Admin/components/addVoucher/EditVoucher";
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
  const { setOpenSetting, setQuery, user, setUser } = useGlobalContext();
  useEffect(() => {
    const getUser = async () => {
      setUser((await handleRefreshWeb()) || null);
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
            <Route path="article" element={<Article />} />
            <Route path="movie" element={<Movie />} />
            <Route path="slideShow" element={<SlideShow />} />
            <Route path="addMovie" element={<AddMovie />} />
            <Route path="addSlideShow" element={<AddSlideShow />} />
            <Route path="addVoucher" element={<AddVoucher />} />
            <Route path="addArticle" element={<AddArticle />} />
            <Route path="voucher" element={<Voucher />} />
            <Route path="editVoucher" element={<EditVoucher />} />
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
