import { useState } from "react";
import { url_database } from "../../../api";
import "./style.css";
export const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [sum, setSum] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  const eraseAllInput = () => {
    setTitle("");
    setSum("");
    setContent("");
    setImg("");
  };

  const handlePostClick = () => {
    fetch(url_database + "/articles/insert", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, summary: sum, content, img }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        eraseAllInput();
        alert("Thêm thành công");
      })
      .catch((er) => {
        console.log(er);
        alert("Đã có lỗi xảy ra vui lòng thử lại");
      });
  };

  return (
    <div id="add-news-page">
      <div className="add-area">
        <div className="input-wrapper">
          <span className="input-title">Tiêu đề bài viết</span>
          <input
            className="title-ipt"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <span className="input-title">Tóm tắt bài viết</span>
          <textarea
            className="summary-ipt"
            rows="3"
            onChange={(e) => setSum(e.target.value)}
          ></textarea>
        </div>
        <div className="input-wrapper">
          <span className="input-title">Nội dung</span>
          <textarea
            className="content-ipt"
            rows="10"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="input-wrapper">
          <span className="input-title">Thêm đường dẫn ảnh</span>
          <input
            className="image-ipt"
            type="text"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <button className="post-btn orange-btn" onClick={handlePostClick}>
            Đăng ngay
          </button>
        </div>
      </div>
      <div className="preview-area">
        <span className="input-title">Xem trước bài viết</span>
        <div className="preview-wrapper">
          <h3>{title}</h3>
          {img && (
            <img
              className="preview-img"
              src={img}
              alt="Địa chỉ ảnh chưa có hoặc không hợp lệ"
            />
          )}
          {content.split("$").map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
