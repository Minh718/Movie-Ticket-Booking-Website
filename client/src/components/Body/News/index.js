import { useEffect, useState } from "react";
import {
  BsBackspaceFill,
  BsFillPlusCircleFill,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { url_database } from "../api";
import "./index.css";

const displayedCount = 5;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="news-item-card" key={index}>
            <Link
              to={`/news/${parseInt(item.idArticle)}`}
              className="news-item-link"
            >
              <div className="news-item-top">
                <div className="news-image-container">
                  <img
                    src={item.img}
                    className="news-image"
                    alt="If you can see this, something is wrong."
                  />
                </div>
                <div className="news-item-top-right">
                  <h1 className="news-title">{item.title}</h1>
                </div>
              </div>
              <div className="news-item-content">
                <p className="news-overview">{item.summary}</p>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

function NewsPage() {
  const [searchNews, setSearchNews] = useState("");
  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [currentGroupCount, setCurrentGroupCount] = useState(1);
  const maxGroupCount = Math.ceil(list.length / displayedCount);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      await fetch(url_database + "/articles/")
        .then((res) => res.json())
        .then((data) => {
          setList([...data]);
          setDisplayList(
            [...data].slice(0, displayedCount * currentGroupCount)
          );
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSearchNews(searchNews);
    setDisplayList(
      list
        .filter((item) =>
          item.title
            .toLowerCase()
            .includes(searchNews ? searchNews.toLowerCase() : "")
        )
        .slice(0, displayedCount * currentGroupCount)
    );
  }, [searchNews, currentGroupCount]);

  const handleLoadMore = () => {
    setCurrentGroupCount((state) => state + 1);
  };

  return (
    <>
      <main className="news-page news-grand-container">
        <div className="news-search-container">
          <label htmlFor="search-news" className="search-news-label">
            Tìm kiếm <BsSearch className="label-icon" />
          </label>
          <input
            className="news-search-box"
            id="search-news"
            type="text"
            placeholder="Tìm theo tựa đề..."
            value={searchNews}
            onChange={(e) => {
              e.preventDefault();
              setSearchNews(e.target.value);
            }}
          />
          <button
            className="news-button"
            onClick={() => {
              setSearchNews("");
              setDisplayList(list);
            }}
          >
            Xóa <BsBackspaceFill className="button-icon" />
          </button>
        </div>
        <div className="news-list-container">
          <Items currentItems={displayList} />
        </div>
        {currentGroupCount === maxGroupCount ? null : (
          <button onClick={handleLoadMore} className="news-button">
            Tải thêm... <BsFillPlusCircleFill className="button-icon" />
          </button>
        )}
        <p style={{ marginTop: "5px" }}>
          Hiển thị <strong>{displayList.length}</strong> kết quả trên tổng số{" "}
          <strong>{list.length}</strong>
        </p>
        {displayList.length ? null : (
          <p>
            Không có kết quả tìm kiếm cho <strong>{searchNews}</strong>!
          </p>
        )}
      </main>
    </>
  );
}
export default NewsPage;
