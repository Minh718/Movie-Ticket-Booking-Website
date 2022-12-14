import React, { useEffect } from "react";
import "./NewsDetails.css";
import data from "../json/data.json";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsFillChatLeftTextFill, BsFillShareFill, BsFlag, BsFlagFill, BsNewspaper, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
const NewsDetail = () => {

  const navigate = useNavigate();
  const articleId = useParams().id;
  const item = data.data[articleId];
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(item.likes);
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLiked(true);
  }, []);

  const handleLikeArticle = () => {
    if (isLiked) setLikes(likes - 1)
    else setLikes(likes + 1);
    setIsLiked(!isLiked);
  }

  const handleComment = () => {
    setCommentContent("");
  }

  const commentList = item.comments.map((cmt, index) => (
    <div className="news-detail-comment-container" key={index}>
      <div className="news-detail-comment-left">
        <img
          src={cmt.avatar ? cmt.avatar : "https://secure.gravatar.com/avatar/93048951a869d36af5ed25b84bfe0a90?s=150&r=g&d=https://actoolsource.com/wp-content/plugins/userswp/assets/images/no_profile.png"}
          alt=""
          className="news-detail-comment-avatar"
        />
      </div>
      <div className="news-detail-comment-right">
        <h1 className="news-detail-comment-author">{cmt.author}</h1>
        <h6 className="news-detail-comment-content">{cmt.content}</h6>
      </div>
      <div className="news-detail-comment-actions">
          <button className="news-detail-comment-action"><BsFlag className="button-icon-comment"/></button>
      </div>
    </div>
  ));

  return (
    <main className="news-page news-grand-container">
      <h1 className="news-detail-title">{item.title}</h1>
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
      <p className="news-detail-source">Nguồn: <a target="_blank" href={item.source}>{item.source}</a></p>
      <div className="news-detail-more-actions">
        {isLiked ? <button onClick={handleLikeArticle} className="news-detail-action">Đã thích ({likes}) <BsSuitHeartFill className="button-icon"/></button> : <button onClick={handleLikeArticle} className="news-detail-action">Thích ({likes}) <BsSuitHeart className="button-icon"/></button>}
        <button onClick={() => document.getElementById('commentSection').scrollIntoView()} className="news-detail-action">Bình luận <BsFillChatLeftTextFill className="button-icon"/></button>
        <button className="news-detail-action">Chia sẻ <BsFillShareFill className="button-icon"/></button>
        <button className="news-detail-action" onClick={() => navigate("/news")}>Tin tức khác <BsNewspaper className="button-icon"/></button>
        <button className="news-detail-action">Báo cáo <BsFlagFill className="button-icon"/></button>
      </div>
      <div className="news-detail-comment-section" id="commentSection">
        <h1 className="news-detail-comment-header">Bình luận</h1>
        <input
          type="text"
          className="news-detail-comment-input"
          placeholder="Bạn nghĩ gì về bài viết trên?"
          value={commentContent}
          onChange={e => setCommentContent(e.target.value)}
        />
        <div className="news-detail-comment-input-bottom">
          <p className="news-detail-comment-tos">
            Hãy tuân thủ tiêu chuẩn cộng đồng của chúng tôi.
          </p>
          <button onClick={handleComment} type="submit" className="news-detail-action-enter">
            Đăng <BsFillArrowRightCircleFill className="button-icon"/>
          </button>
        </div>
        <div className="news-detail-comments-list">
          {item.comments.length ? (
            commentList
          ) : (
            <p>Hãy là người đầu tiên bình luận về bài viết này.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default NewsDetail;
