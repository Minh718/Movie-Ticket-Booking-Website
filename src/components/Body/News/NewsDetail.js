import React from "react";
import "./NewsDetails.css";
import data from "../json/data.json";
import { useParams } from "react-router-dom";
const NewsDetail = () => {
  const articleId = useParams().id;
  const item = data.data[articleId];
  const temp = item.comments.map((cmt, index) => (
    <div className="news-detail-comment-container" key={index}>
      <div className="news-detail-comment-left">
        <img
          src="http://genk.mediacdn.vn/k:thumb_w/640/2015/screen-shot-2015-07-30-at-2-31-57-pm-1438334096188/cau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh.png"
          alt=""
          className="news-detail-comment-avatar"
        />
      </div>
      <div className="news-detail-comment-right">
        <h1 className="news-detail-comment-author">{cmt.author}</h1>
        <h6 className="news-detail-comment-content">{cmt.content}</h6>
        <div className="news-detail-comment-actions">
          <button className="news-detail-comment-action ">
            Upvote ({cmt.votesDeficit})
          </button>
          <button className="news-detail-comment-action">Downvote</button>
          <button className="news-detail-comment-action">Báo cáo</button>
        </div>
      </div>
    </div>
  ));

  return (
    <main className="news-page news-grand-container">
      <h1 className="news-detail-title">{item.title}</h1>
      <h6 className="news-detail-info">
        Bởi <span className="news-detail-info-special">{item.author}</span> vào{" "}
        <span className="news-detail-info-special">{item.timestamp}</span>.
      </h6>
      <img
        className="news-detail-image"
        src={item.image}
        alt="If you can see this, something is wrong."
      />
      <article className="news-detail-content">
        {item.content.map((p, index) => (
          <p className="news-content-detail-paragraph" key={index}>
            {p}
          </p>
        ))}
      </article>
      <p className="news-detail-source">Nguồn: {item.source}</p>
      <div className="news-detail-more-actions">
        <button className="news-detail-action">Thích ({item.likes})</button>
        <button className="news-detail-action">Bình luận</button>
        <button className="news-detail-action">Chia sẻ</button>
        <button className="news-detail-action">Báo cáo</button>
      </div>
      <div className="news-detail-comment-section">
        <h1 className="news-detail-comment-header">Bình luận</h1>
        <input
          type="text"
          className="news-detail-comment-input"
          placeholder="Bạn nghĩ gì về bài viết trên?"
        />
        <div className="news-detail-comment-input-bottom">
          <p className="news-detail-comment-tos">
            Hãy tuân thủ tiêu chuẩn cộng đồng của chúng tôi.
          </p>
          <button type="submit" className="news-detail-action">
            Đăng
          </button>
        </div>
        <div className="news-detail-comments-list">
          {item.comments.length ? (
            temp
          ) : (
            <p>Hãy là người đầu tiên bình luận về bài viết này.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default NewsDetail;
