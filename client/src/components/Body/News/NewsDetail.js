import React, { useEffect, useState } from "react";
import "./NewsDetails.css";
import { BsFillArrowRightCircleFill, BsFillChatLeftTextFill, BsFillShareFill, BsFlag, BsFlagFill, BsNewspaper } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { url_database } from "../api";
import commentsData from "../json/comments.json";
const comments = commentsData.data;
const NewsDetail = () => {
  const [art, setArt] = useState({})
  const articleId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url_database + '/articles/' + articleId)
      .then(res => res.json())
      .then(data => {
        const curArt = data[0]
        const curArtContent = curArt.content.split('$')
        setArt({ ...curArt, content: curArtContent })
      })
    window.scrollTo(0, 0);
  }, []);

  const articleComments = comments.filter(comment => comment.idArticle == articleId)
  const commentListRendered = articleComments.map((cmt, index) => (
    <div className="news-detail-comment-container" key={index}>
      <div className="news-detail-comment-left">
        <img
          src={"https://secure.gravatar.com/avatar/93048951a869d36af5ed25b84bfe0a90?s=150&r=g&d=https://actoolsource.com/wp-content/plugins/userswp/assets/images/no_profile.png"}
          alt="Avatar"
          className="news-detail-comment-avatar"
        />
      </div>
      <div className="news-detail-comment-right">
        <h1 className="news-detail-comment-author">{cmt.username}</h1>
        <h6 className="news-detail-comment-content">{cmt.content}</h6>
        
      </div>
      <div className="news-detail-comment-actions">
          <button className="news-detail-comment-action"><BsFlagFill className="button-icon-comment"/></button>
      </div>
    </div>
  ));

  return (
    <main className="news-page news-grand-container">
      <h1 className="news-detail-title">{art.title}</h1>
      <img
        className="news-detail-image"
        src={art.img}
        alt="If you can see this, something is wrong."
      />
      <article className="news-detail-content">
        {art.content ? art.content.map((p, index) => (
          <p className="news-content-detail-paragraph" key={index}>
            {p}
          </p>
        )) : ""}
      </article>
      <div className="news-detail-more-actions">
        <button onClick={() => document.getElementById('commentSection').scrollIntoView()} className="news-button">Bình luận <BsFillChatLeftTextFill className="button-icon"/></button>
        <button className="news-button">Chia sẻ <BsFillShareFill className="button-icon"/></button>
        <button className="news-button" onClick={() => navigate("/news")}>Tin tức khác <BsNewspaper className="button-icon"/></button>
        <button className="news-button">Báo cáo <BsFlagFill className="button-icon"/></button>
      </div>
      <div className="news-detail-comment-section" id="commentSection">
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
          <button type="submit" className="news-button">
            Đăng <BsFillArrowRightCircleFill className="button-icon"/>
          </button>
        </div>
        <div className="news-detail-comments-list">
          {articleComments.length ? (
            commentListRendered
          ) : (
            <p>Hãy là người đầu tiên bình luận về bài viết này.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default NewsDetail;
