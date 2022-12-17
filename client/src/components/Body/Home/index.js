import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url_database } from "../api";
import Article from "./Article";
import "./index.css";
import Movie from "./Movie";
import Slide from "./Slide";

const voucherStore = [
  {
    id: "v1",
    url: "/images/voucher1.jpg",
  },
  {
    id: "v2",
    url: "/images/voucher2.jpg",
  },
  {
    id: "v3",
    url: "/images/voucher3.jpg",
  },
  {
    id: "v4",
    url: "/images/voucher4.jpg",
  },
  {
    id: "v5",
    url: "/images/voucher1.jpg",
  },
  {
    id: "v6",
    url: "/images/voucher2.jpg",
  },
  {
    id: "v7",
    url: "/images/voucher3.jpg",
  },
  {
    id: "v8",
    url: "/images/voucher4.jpg",
  },
];
const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(url_database + "/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.slice(0, 6)));
  }, []);

  return (
    <div className="home-page">
      <Slide />
      <Movie />

      <div className="news-container">
        <div className="news-nav">
          <span>Tin tức phim</span>
          <hr />
        </div>
        <div className="news-store">
          {articles.map((article, index) => {
            return <Article key={index} article={article} />;
          })}
        </div>
        <Link to="/news" className="more-news-wraper">
          <button className="more-news">XEM THÊM</button>
        </Link>
      </div>
      <div className="vouchers-container">
        <div className="vouchers-nav">
          <span>TIN KHUYẾN MÃI</span>
          <hr />
        </div>
        <div className="vouchers-store">
          {voucherStore.map((voucher, index) => {
            return (
              <div className="vouchers" key={index}>
                <div className="vouchers-img">
                  <img
                    key={index + 1}
                    src={process.env.PUBLIC_URL + voucher.url}
                    alt=""
                  />
                </div>
                <div className="voucher-detail">
                  <div className="info">
                    <span>Sieu khuyen mai</span>
                    <span>Uu dai len toi bla bla bla</span>
                  </div>
                  <a href="#">Chi tiết</a>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/vouchers" className="more-vouchers-wraper">
          <button className="more-vouchers">XEM THÊM</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
