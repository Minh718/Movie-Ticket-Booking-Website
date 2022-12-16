import { useEffect, useState } from "react";
import "./style.css";
import { url_database } from "../../../api";

export const Article = () => {
  const [id, setId] = useState(-1);
  const [title, setTitle] = useState('');
  const [sum, setSum] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');

  const [news, setNews] = useState([])

  const eraseAllInput = () => {
    setTitle('')
    setSum('')
    setContent('')
    setImg('')
  }

  const handleSelectId = () => {
    fetch(url_database + '/articles/' + id)
      .then(res => res.json())
      .then(data => {
        eraseAllInput();
        setTitle(data[0].title)
        setSum(data[0].summary)
        setContent(data[0].content)
        setImg(data[0].img)
      })
      .catch((err) => {
        //console.log(err)
        alert("Đã có lỗi xảy ra vui lòng nhập lại một id khác")
      });
  }

  const handleSaveClick = () => {
    fetch(url_database + '/articles/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, title, summary: sum, content, img })
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        alert("Lưu thành công")
        getNewsFromAPI();
      })
      .catch(er => {
        //console.log(er)
        alert("Đã có lỗi xảy ra vui lòng thử lại")
      })
  }

  const handleDelClick = () => {
    fetch(url_database + '/articles/delete/' + id)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.affectedRows === 0)
        {
          alert('ID không tồn tại')
        }
        else
        {
          alert("Xoá thành công")
          //window.location.reload();
          getNewsFromAPI();
        }
      })
      .catch(er => {
        //console.log(er)
        alert("Đã có lỗi xảy ra vui lòng thử lại")
      })
  }

  const getNewsFromAPI = () => {
    fetch(url_database + '/articles/')
      .then(res => res.json())
      .then(data => setNews([...data]));
  }

  useEffect(() => {
    getNewsFromAPI();
  }, [])

  return (
    <div id="update-news-page">
      <table className="news-table">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th scope="row">Tiêu đề</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item, idx) => {
            return (
              <tr key={idx}>
                <td className="id-col">{item.idArticle}</td>
                <td>{item.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="update-area">
        <div className="input-wrapper">
          <span className="input-title">Nhập số thứ tự bài viết</span>
          <input className="id-ipt" type="number" value={id} onChange={e => setId(e.target.value)} />
          <button className="select-btn orange-btn" onClick={handleSelectId}>Chọn</button>
          <button className="delete-btn orange-btn" onClick={handleDelClick}>Xoá bài viết</button>
        </div>

        <div className="input-wrapper">
          <span className="input-title">Tiêu đề bài viết</span>
          <input className="title-ipt" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <span className="input-title">Tóm tắt bài viết</span>
          <textarea className="summary-ipt" rows="2" value={sum} onChange={e => setSum(e.target.value)}>
          </textarea>
        </div>
        <div className="input-wrapper">
          <span className="input-title">Nội dung</span>
          <textarea
            className="content-ipt"
            value={content}
            rows="6" onChange={e => setContent(e.target.value)}
          >
          </textarea>
        </div>
        <div className="input-wrapper">
          <span className="input-title">Đường dẫn ảnh</span>
          <input className="image-ipt" type='text' value={img} onChange={e => setImg(e.target.value)} />
          <img className="preview-img" src={img ?? ''} alt="Không có ảnh để hiển thị" />
        </div>
        <div>
          <button className="save-btn orange-btn" onClick={handleSaveClick}>Lưu lại</button>
        </div>
      </div>
    </div>
  )
};
