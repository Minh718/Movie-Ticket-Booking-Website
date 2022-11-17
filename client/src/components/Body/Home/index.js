import React from "react";
import { Link } from "react-router-dom";
import data from "../json/data.json";
import Article from "./Article";
import "./index.css";
import Movie from "./Movie";
import Slide from "./Slide";
const articles = data.data.slice(0, 6);
const movieStore = [
  {
    id: "m1",
    url: "/images/movie1.jpg",
    name: "Kimetsu no Yaiba",
  },
  {
    id: "m2",
    url: "/images/movie2.jpg",
    name: "jujutsu kaisen",
  },
  {
    id: "m3",
    url: "/images/movie3.jpg",
    name: "Hero academy",
  },
  {
    id: "m4",
    url: "/images/movie4.jpg",
    name: "Your name",
  },
  {
    id: "m5",
    url: "/images/movie5.jpg",
    name: "Josee to Tora to Sakana-tachi",
  },
  {
    id: "m6",
    url: "/images/movie6.jpg",
    name: "Ame wo Tsugeru Hyouryuu Danchi",
  },
];
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
        <Link to="/news" class="more-news-wraper">
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
              <div className="vouchers">
                <div className="vouchers-img">
                  <img
                    key={index + 1}
                    src={process.env.PUBLIC_URL + voucher.url}
                    alt=""
                  />
                </div>
                <div className="voucher-detail">
                  <div class="info">
                    <span>Sieu khuyen mai</span>
                    <span>Uu dai len toi bla bla bla</span>
                  </div>
                  <a href="#">Chi tiết</a>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/vouchers" class="more-vouchers-wraper">
          <button className="more-vouchers">XEM THÊM</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
