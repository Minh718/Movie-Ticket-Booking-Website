import "./index.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
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
const Thumbnails = [
  {
    id: "v1",
    url: "/images/Thumbnail1.jpg",
  },
  {
    id: "v2",
    url: "/images/Thumbnail2.jpg",
  },
  {
    id: "v3",
    url: "/images/Thumbnail3.jpg",
  },
  {
    id: "v4",
    url: "/images/Thumbnail4.jpg",
  },
  {
    id: "v5",
    url: "/images/Thumbnail5.jpg",
  },
  {
    id: "v6",
    url: "/images/Thumbnail6.jpg",
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
  {
    id: "v9",
    url: "/images/voucher1.jpg",
  },
  {
    id: "v10",
    url: "/images/voucher2.jpg",
  },
  {
    id: "v11",
    url: "/images/voucher3.jpg",
  },
  {
    id: "v12",
    url: "/images/voucher4.jpg",
  },
];
const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== 5) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 5) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(5);
    }
  };
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      nextSlide();
    }, 3500);
    return () => setTimeout(myTimeout);
  }, [nextSlide]);
  return (
    <div className="home-page">
      <div className="slider-container">
        {Thumbnails.map((Thumbnail, index) => {
          if (index === slideIndex) {
            return (
              <div className="slide currentSlide" key={index}>
                <img
                  src={process.env.PUBLIC_URL + Thumbnail.url}
                  alt="Thumbnail"
                />
              </div>
            );
          } else if (
            index - 1 === slideIndex ||
            (slideIndex === Thumbnails.length - 1 && index === 0)
          ) {
            return (
              <div className="nextSlide slide" key={index}>
                <img
                  src={process.env.PUBLIC_URL + Thumbnail.url}
                  alt="Thumbnail"
                />
              </div>
            );
          } else {
            return (
              <div className="slidePrev slide" key={index}>
                <img
                  src={process.env.PUBLIC_URL + Thumbnail.url}
                  alt="Thumbnail"
                />
              </div>
            );
          }
        })}
        <AiFillCaretLeft className="switchLeft" onClick={prevSlide} />
        <AiFillCaretRight className="switchRight" onClick={nextSlide} />
        <form className="quick-booking" action="#">
          <span>MUA VÉ NHANH</span>
          <select name="day" id="day" required>
            <option selected>Chọn ngày</option>
            <option value="18/10/202">18/10/2022</option>
            <option value="19/10/202">19/10/2022</option>
            <option value="20/10/202">20/10/2022</option>
            <option value="21/10/202">21/10/2022</option>
          </select>
          <select name="movie" id="movie" required>
            <option selected>Chọn phim</option>
            <option value="SG">Alo alo</option>
            <option value="19/10/202">19/10/2022</option>
            <option value="20/10/202">20/10/2022</option>
            <option value="21/10/202">21/10/2022</option>
          </select>
          <select name="theater" id="theater" required>
            <option selected>Chọn rạp</option>
            <option value="SG">SG</option>
            <option value="19/10/202">19/10/2022</option>
            <option value="20/10/202">20/10/2022</option>
            <option value="21/10/202">21/10/2022</option>
          </select>
          <select name="time" id="time" required>
            <option selected>Chọn xuất xem</option>
            <option value="SG">13h</option>
            <option value="19/10/202">19/10/2022</option>
            <option value="20/10/202">20/10/2022</option>
            <option value="21/10/202">21/10/2022</option>
          </select>
          <button type="submit">MUA VÉ</button>
        </form>
      </div>
      <div className="movie-container">
        <div className="movie-nav">
          <span>Phim đang chiếu</span>
          <span>Phim sắp chiếu</span>
          <hr />
        </div>
        <div className="movie-store">
          {movieStore.map((movie, index) => {
            return <Movie movie={movie} key={index} />;
          })}
        </div>
        <Link to="/movies" class="more-movies-wraper">
          <button className="more-movies">XEM THÊM</button>
        </Link>
      </div>

      <div className="news-container">
        <div className="news-nav">
          <span>Tin tức phim</span>
          <hr />
        </div>
        <div className="news-store">
          {movieStore.map((movie, index) => {
            return (
              <div className="news">
                <div className="news-img">
                  <img
                    key={index + 1}
                    src={
                      process.env.PUBLIC_URL + `/images/movie${index + 1}.jpg`
                    }
                    alt=""
                  />
                </div>
                <div className="content">
                  <span>{movie.name}</span>
                  <div class="rate">
                    <span>Lượt like</span>
                    <span>Views</span>
                    <span>4/5*</span>
                  </div>
                  <span>Tóm tắt nội dung bài viết</span>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/news" class="more-news-wraper">
          <button className="more-news">XEM THÊM</button>
        </Link>
      </div>

      <div className="vouchers-container">
        <div className="vouchers-nav">
          <span>Tin khuyến mãi</span>
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
