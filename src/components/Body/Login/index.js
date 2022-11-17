import "./index.css";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import React, { useRef, useState } from "react";
import InputField from "../../../customField/InputField/InputField";
import { Button } from "reactstrap";
import Register from "../register3";
import axios from "axios";
import { url_database } from "../api";
const LoginPage = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const refPassword = useRef();
  const refPhoneEmail = useRef();
  const { setUser } = useGlobalContext();
  return (
    <>
      <div className="page-login">
        <div className="slide-film">
          <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2022/08/op-film-thumb.jpg" />
        </div>
        <div className="container-form">
          <h1>Đăng nhập</h1>
          <Formik
            initialValues={{
              phoneEmail: "",
              password: "",
            }}
            validationSchema={Yup.object({
              phoneEmail: Yup.string().required("Vui lòng nhập trường này"),
              password: Yup.string()
                .min(8, "Mật khẩu ít nhất 8 ký tự")
                .required("Vui lòng nhập trường này"),
            })}
            onSubmit={async (values, { setSubmitting, setFieldError }) => {
              // alert(JSON.stringify(values, null, 2));
              try {
                const data = await axios.post(
                  `${url_database}/users/login`,
                  values
                );
                // console.log(data);
                setUser(data.data);
              } catch (err) {
                const res = err.response.data;
                console.log(res);
                if (!res.phoneEmail) {
                  setFieldError(
                    "phoneEmail",
                    "Email hoặc số điện thoại không dúng"
                  );
                  values.password = "";
                  values.phoneEmail = "";
                  refPhoneEmail.current.focus();
                } else {
                  setFieldError("password", "Mật khẩu không chính xác");
                  values.password = "";
                  refPassword.current.focus();
                }
              }
              setSubmitting(false);
            }}
          >
            <Form className="formLogin">
              <FastField name="phoneEmail">
                {(props) => (
                  <InputField
                    {...props}
                    type="text"
                    placeholder="Email hoặc số điện thoại"
                    label="Email hoặc số điện thoại"
                    ref={refPhoneEmail}
                  />
                )}
              </FastField>
              <FastField name="password">
                {(props) => (
                  <InputField
                    {...props}
                    type="password"
                    placeholder="Mật khẩu"
                    label="Mật khẩu"
                    ref={refPassword}
                  />
                )}
              </FastField>
              <Button type="submit" className="button-primary">
                Đăng nhập
              </Button>
              <Button
                type="button"
                onClick={() => setOpenRegister(true)}
                className="button-primary"
                outline
              >
                Đăng ký
              </Button>
              <a className="forget-password">Quên mật khẩu</a>
            </Form>
          </Formik>
        </div>
      </div>
      {openRegister && <Register setOpenRegister={setOpenRegister} />}
    </>
  );
};

export default LoginPage;
