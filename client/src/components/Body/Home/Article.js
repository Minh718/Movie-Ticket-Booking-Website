import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import data from "../json/data.json";
import "./index.css";
export default function Article({ article }) {
  const { idArticle, img, title, timestamp, summary } = article;
  const [isSliced, setIsSliced] = React.useState(true);
  //   const summarySliced = summary.slice(0, 100);
  //   console.log(summarySliced);
  return (
    <div className="news">
      <div className="news-img">
        <img key={idArticle} src={img} alt="" />
      </div>
      <div className="content">
        <div className="header-content">
          <span>{title}</span>
          <span>{timestamp}</span>
        </div>
        {isSliced ? (
          <p className="summary-article">
            {summary.slice(0, 100)}{" "}
            <span onClick={() => setIsSliced(false)}>...Xem thêm</span>
          </p>
        ) : (
          <p className="summary-article">
            {summary} <span onClick={() => setIsSliced(true)}>...Tém lại</span>
          </p>
        )}
        <div style={{ textAlign: "right" }}>
          <Link to={`/news/${parseInt(idArticle)}`}>
            {" "}
            <Button color="info" size="lg">
              Chi tiết
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
