import "./index.css";
import data from "../json/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const list = data.data;
const itemsPerPage = 6;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="news-item-card" key={index}>
            <Link to={`/news/${item.id}`} className="news-item-link">
              <div className="news-item-top">
                <div className="news-image-container">
                  <img
                    src={item.image}
                    className="news-image"
                    alt="If you can see this, something is wrong."
                  />
                </div>
                <div className="news-item-top-right">
                  <h1 className="news-title">{item.title}</h1>
                  <div className="news-status">
                    Đăng bởi: {item.author} | Lượt thích: {item.likes} | Bình
                    luận: {item.comments.length}
                  </div>
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
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);
  const [paginationText, setPaginationtext] = useState("");

  useEffect(() => {
    const currentPage = parseInt(localStorage.getItem("page"));
    const fetchData = () => {
      setDisplayData(
        list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      );
      setPageNumber(currentPage);
      setPaginationtext(
        `Hiển thị ${(currentPage - 1) * itemsPerPage + 1} đến ${
          currentPage * itemsPerPage > list.length
            ? list.length
            : currentPage * itemsPerPage
        } trên tổng số ${list.length}`
      );
    };
    fetchData();
  }, [page]);

  const handlePageChange = (pageNo) => {
    setPage(pageNo);
    localStorage.setItem("page", pageNo);
  };

  return (
    <>
      <main className="news-page news-grand-container">
        <div className="news-search-container">
          <input
            className="news-search-box"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <button className="news-search-button">Tìm kiếm</button>
        </div>
        <div className="news-list-container">
          <Items currentItems={displayData} />
        </div>
        <p className="pagination-info">{paginationText}</p>
        <form
          className="pagination"
          onSubmit={() => handlePageChange(parseInt(pageNumber))}
        >
          <input
            type="number"
            min="1"
            max={`${Math.ceil(list.length / itemsPerPage)}`}
            className="pagination-input"
            value={pageNumber}
            onChange={(e) => {
              setPageNumber(parseInt(e.target.value));
            }}
          />
          <button type="submit" className="pagination-button">
            Go
          </button>
        </form>
      </main>
      {/* <NewsDetail item={list[2]} /> */}
    </>
  );
}
export default NewsPage;
