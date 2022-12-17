import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { handleRefreshWeb } from "./apiRequest";
import { BookingSeat, Footer, Header } from "./components";
import AdminPage from "./components/Body/Admin";
import { AddArticle } from "./components/Body/Admin/components/addArticle/index";
import { AddMovie } from "./components/Body/Admin/components/addMovie/index";
import { AddVoucher } from "./components/Body/Admin/components/addVoucher/index";
import { Article } from "./components/Body/Admin/components/article/Article";
import HomeAdmin from "./components/Body/Admin/components/home/Index";
import { Movie } from "./components/Body/Admin/components/movie/Movie";
import BookingTicket from "./components/Body/BookingTicket/index";
import Payment from "./components/Body/BookingTicket/Payment";
import PaymentSuccess from "./components/Body/BookingTicket/PaymentCuccess";
import HistoryTicket from "./components/Body/historyTicket";
import Home from "./components/Body/Home/index";
import LoginPage from "./components/Body/Login/index";
import NewsPage from "./components/Body/News/index";
import NewsDetail from "./components/Body/News/NewsDetail";
import Profile from "./components/Body/profile";
import Vouchers from "./components/Body/vouchers";
import { useGlobalContext } from "./context";

import { EditVoucher } from "./components/Body/Admin/components/addVoucher/EditVoucher";
import { Shows } from "./components/Body/Admin/components/show";
import AddShow from "./components/Body/Admin/components/ShowManagement/index";
import { Voucher } from "./components/Body/Admin/components/voucher/Voucher";
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

          <Route path="/news" element={<NewsPage />} />
          {!user && <Route path="*" element={<LoginPage />} />}
          {user && (
            <Route path="">
              <Route
                path="login"
                element={user ? <Navigate to={"/"} /> : <LoginPage />}
              />
              <Route path="booking" element={<BookingTicket />} />
              <Route path="seatSelection" element={<BookingSeat />} />
              <Route path="seatSelection/payment" element={<Payment />} />
              <Route path="paymentSuccess" element={<PaymentSuccess />} />
              <Route path="profile" element={<Profile />} />
              <Route path="historyTicket" element={<HistoryTicket />} />
              <Route path="vouchers" element={<Vouchers />} />
              <Route path="news/:id" element={<NewsDetail />} />
            </Route>
          )}
        </Route>
        {!!user?.isAdmin && (
          <Route path="/adminPage" element={<AdminPage />}>
            <Route path="" element={<HomeAdmin />} />
            <Route path="article" element={<Article />} />
            <Route path="movie" element={<Movie />} />
            <Route path="addMovie" element={<AddMovie />} />
            <Route path="addVoucher" element={<AddVoucher />} />
            <Route path="addArticle" element={<AddArticle />} />
            <Route path="voucher" element={<Voucher />} />
            <Route path="editVoucher" element={<EditVoucher />} />
            <Route path="addShow" element={<AddShow />} />
            <Route path="show" element={<Shows />} />
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
