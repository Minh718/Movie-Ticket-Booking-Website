import "./index.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .min(4, "Nhập ít nhất 4 kí tự"),
      password: Yup.string()
        .required("Required")
        .min(6, "Mật khẩu có ít nhất 6 kí tự"),
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    },
  });
  return (
    <div className="login-page">
      <h1>Đăng nhập</h1>
      <form action="" className="infoform" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Tên đăng nhập"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.username && (
          <p className="errorMsg"> {formik.errors.username} </p>
        )}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mật khẩu"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <p className="errorMsg"> {formik.errors.password} </p>
        )}
        <button type="submit">Đăng nhập</button>
        <Link to="/register">Đăng kí tài khoản mới</Link>
        <a href="#">Quên mật khẩu</a>
      </form>
    </div>
  );
};

export default LoginPage;
