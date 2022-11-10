import "./index.css";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import React, { useState } from "react";
import InputField from "../../../customField/InputField/InputField";
import { Button } from "reactstrap";
import Register from "../register3";
const LoginPage = () => {
  const [openRegister, setOpenRegister] = useState(false);
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
              PhoneEmail: "",
              password: "",
            }}
            validationSchema={Yup.object({
              PhoneEmail: Yup.string().required("Vui lòng nhập trường này"),
              password: Yup.string()
                .min(8, "Mật khẩu ít nhất 8 ký tự")
                .required("Vui lòng nhập trường này"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }}
          >
            <Form className="formLogin">
              <FastField name="PhoneEmail">
                {(props) => (
                  <InputField
                    {...props}
                    type="text"
                    placeholder="Email hoặc số điện thoại"
                    label="Email hoặc số điện thoại"
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
            </Form>
          </Formik>
        </div>
      </div>
      {openRegister && <Register setOpenRegister={setOpenRegister} />}
    </>
  );
};

export default LoginPage;
