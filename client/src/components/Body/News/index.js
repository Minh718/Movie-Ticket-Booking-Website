import "./index.css";
//import data from "../json/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url_database } from "../api";

//const list = data.data;
const itemsPerPage = 6;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="news-item-card" key={index}>
            <Link to={`/news/${parseInt(item.id) - 1}`} className="news-item-link">
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
                  {/* <div className="news-status">
                    Đăng bởi: {item.author} | Lượt thích: {item.likes} | Bình
                    luận: {item.comments.length}
                  </div> */}
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
  const [searchNews, setSearchNews] = useState("");
  const [list, setList] = useState([])
  const [maxNoPages, setMaxNoPages] = useState(Math.ceil(list.length / itemsPerPage));
  const [resIsEmpty, setResIsEmpty] = useState(false);


  useEffect(() => {
    fetch(url_database + '/articles/')
      .then(res => res.json())
      .then(data => setList([...data]))
  }, [])

  // useEffect(() => {
  //   const currentPage = parseInt(localStorage.getItem("page"));
  //   const listAfterSearch = list.filter(item => item.title.includes(searchNews))
  //   const fetchData = () => {
  //     setDisplayData(
  //       list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  //     );
  //     setPageNumber(currentPage);
  //     setPaginationtext(
  //       `Hiển thị ${(currentPage - 1) * itemsPerPage + 1} đến ${
  //         currentPage * itemsPerPage > list.length
  //           ? list.length
  //           : currentPage * itemsPerPage
  //       } trên tổng số ${list.length}`
  //     );
  //   };
  //   fetchData();
  // }, [page]);

  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const currentPage = parseInt(localStorage.getItem("page"));
    //const searchQuery = localStorage.getItem("searchQuery")

    const listAfterSearch = list.filter(item => item.title.toLowerCase().includes(searchQuery ? searchQuery.toLowerCase() : ""))
    if (!listAfterSearch.length) setResIsEmpty(true);
    else setResIsEmpty(false);
    const fetchData = () => {
      setDisplayData(
        listAfterSearch.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      );
      setPageNumber(currentPage);

      // ${currentPage * itemsPerPage > listAfterSearch.length
      //   ? listAfterSearch.length
      //   : currentPage * itemsPerPage
      // } 
      //${(currentPage - 1) * itemsPerPage + 1}
      setPaginationtext(
        `Hiển thị 1 đến ${Math.ceil(listAfterSearch.length / itemsPerPage)}
        trên tổng số ${listAfterSearch.length}`
      );
      setMaxNoPages(Math.ceil(listAfterSearch.length / itemsPerPage))
    };
    fetchData();
  }, [page, searchNews]);

  const handlePageChange = (pageNo) => {
    setPage(pageNo);
    localStorage.setItem("page", pageNo);
  };

  return (
    <>
      <main className="news-page news-grand-container">
        <div className="news-search-container">
          <label htmlFor="search-news" >Tìm kiếm</label>
          <input
            className="news-search-box"
            id="search-news"
            type="text"
            placeholder="Tìm theo tựa đề..."
            //value={localStorage.getItem("searchQuery") ?? ""}
            value={searchQuery}
            onChange={(e) => {
              e.preventDefault();
              setSearchNews(e.target.value);
              //localStorage.setItem("searchQuery", e.target.value);
              setSearchQuery(e.target.value);
              setPageNumber(1);
              setPage(1);
              localStorage.setItem("page", 1);
            }}
          />
          <button className="news-search-button" onClick={() => {
            setSearchNews("");
            localStorage.setItem("searchQuery", "");
          }}>Xóa</button>
        </div>
        <div className="news-list-container">
          <Items currentItems={displayData} />
        </div>
        {!resIsEmpty ? <><p className="pagination-info">{paginationText}</p>
          <form
            className="pagination"
          //onSubmit={}
          >
            <input
              type="number"
              min="1"
              max={maxNoPages}
              className="pagination-input"
              value={pageNumber}
              onChange={(e) => {
                setPageNumber(parseInt(e.target.value));
              }}
            />
            <button type="button" className="pagination-button" onClick={() => handlePageChange(parseInt(pageNumber))}>
              Go
            </button>
          </form></> : <h6>Không có kết quả tìm kiếm!</h6>}
      </main>
    </>
  );
}
export default NewsPage;
