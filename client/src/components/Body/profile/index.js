import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
export default function Profile() {
  const [userInLocal, setUserInLocal] = useState(() => {
    return JSON.parse(localStorage.getItem('user'))
  })

  const [fname, setFname] = useState(userInLocal.firstName);
  const [lname, setLname] = useState(userInLocal.lastName);
  const [phone, setPhone] = useState(userInLocal.phone);
  const [gender, setGender] = useState(userInLocal.gender);
  const [email, setEmail] = useState(userInLocal.email);
  const [oldpassword, setOldpassword] = useState();
  const [newpassword, setNewpassword] = useState();
  const [repassword, setRepassword] = useState();

  // const fnameErRef = useRef();
  // const lnameErRef = useRef();
  // const phoneErRef = useRef();
  // const genderErRef = useRef();
  // const emailErRef = useRef();
  const oldpassRef = useRef();
  const newpassRef = useRef();
  const repassRef = useRef();


  const validator = () => {
    if (!fname || !lname)
    {
      alert('Vui lòng nhập đủ họ và tên!');
      return false
    }
    if (!phone)
    {
      alert('Vui lòng nhập số điện thoại!');
      return false
    }
    if (!email)
    {
      alert('Vui lòng nhập email!');
      return false
    }
    if (!/\S+@\S+\.\S+/.test(email))
    {
      alert('Email sai định dạng!');
      return false
    }
    if (!oldpassword || !newpassword || !repassword)
    {
      alert('Vui lòng nhập đủ mật khẩu cũ, mật khẩu mới và nhập lại mật khẩu mới!');
      return false
    }
    if (oldpassword !== userInLocal.password)
    {
      alert('Mật khẩu cũ không chính xác, vui lòng nhập lại!');
      return false
    }
    if (newpassword !== repassword)
    {
      alert('Mật khẩu nhập lại không khớp!');
      return false
    }
    if (newpassword.length < 8)
    {
      alert('Mật khẩu phải dài tối thiểu 8 ký tự!');
      return false
    }

    return true;
  }

  const handleSaveInfoClick = () => {
    if (!validator())
    {
      return;
    }
    fetch('http://localhost:8800/api/users/update_info', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: userInLocal.idUser,
        fname, lname,
        phone, gender,
        email,
        password: newpassword
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert("Sửa thông tin thành công")
        localStorage.setItem('user', JSON.stringify({
          idUser: userInLocal.idUser,
          firstName: fname,
          lastName: lname,
          phone,
          gender,
          email,
          password: newpassword,
          point: userInLocal.point,
          isAdmin: userInLocal.isAdmin,
        }))
      })
      .catch(er => {
        console.log(er)
        alert("Đã có lỗi xảy ra vui lòng thử lại")
      })
  }

  const handleToggleShowAllPass = () => {
    if (repassRef.current.type === "password")
    {
      repassRef.current.type = "text"
      oldpassRef.current.type = "text"
      newpassRef.current.type = "text"
    }
    else
    {
      repassRef.current.type = "password"
      oldpassRef.current.type = "password"
      newpassRef.current.type = "password"
    }
  }

  return (
    <div className="container-profile">
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to={"/"}>Trang chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Thông tin cá nhân
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="form-profile">
        <h2>Thông tin cá nhân</h2>
        <div className="control-info">
          <div className="one" style={{ marginRight: 12 }}>
            <span>Họ</span>
            <input className="input-div form-control" value={fname} onChange={e => setFname(e.target.value)} />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
          </div>
          <div className="one">
            <span>Tên</span>
            <input className="input-div form-control" value={lname} onChange={e => setLname(e.target.value)} />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
          </div>
        </div>
        <div className="control-info">
          <div className="one">
            <span>Số Điện thoại</span>
            <input className="input-div form-control" value={phone} onChange={e => setPhone(e.target.value)} />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
          </div>
          <div className="two" style={{ margin: '0 12px' }}>
            <span>Giới tính</span>
            <input className="input-div form-control" value={gender} onChange={e => setGender(e.target.value)} />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
          </div>
          <div className="two">
            <span>Điểm đổi thưởng</span>
            <input className="input-div form-control" value={userInLocal.point} disabled />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
          </div>
        </div>
        <div className="control-info">
          <div className="full">
            <span>Email</span>
            <input className="input-div form-control" value={email} onChange={e => setEmail(e.target.value)} />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
          </div>
        </div>
        <div className="control-info">
          <div className="full">
            <span>Đổi mật khẩu</span>
            <input
              type="password"
              ref={oldpassRef}
              className="input-div form-control password-input"
              placeholder="Nhập mật khẩu cũ"
              value={oldpassword} onChange={e => setOldpassword(e.target.value)}
            />
            <BsEye className="password-show-btn" />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
            <input
              type="password"
              ref={newpassRef}
              className="input-div form-control password-input"
              placeholder="Nhập mật khẩu mới"
              value={newpassword} onChange={e => setNewpassword(e.target.value)}
            />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}
            <input
              type="password"
              ref={repassRef}
              className="input-div form-control password-input"
              placeholder="Xác nhận mật khẩu"
              value={repassword} onChange={e => setRepassword(e.target.value)}
            />
            {/* <div className="message-error">Vui lòng nhập trường này</div> */}

          </div>
        </div>
        <div className="d-flex align-items-center my-3">
          <input type='checkbox' style={{ marginRight: 10, transform: 'scale(1.2)' }} onChange={handleToggleShowAllPass} />
          <span>Hiện tất cả mật khẩu</span>
        </div>
        <Button color="primary" onClick={handleSaveInfoClick}>Lưu lại</Button>
      </div>
    </div >
  );
}
