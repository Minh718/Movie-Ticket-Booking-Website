import React, { useState } from "react";
import "./style.css";
import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../../customField/InputField/InputField";
import SelectField from "../../../customField/selectField";
import { Button } from "reactstrap";
export default function Register({ setOpenRegister }) {
  const [goToLogin, setGoToLogin] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleGoToLogin = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setGoToLogin(true);
      setTimeout(() => {
        setOpenRegister(false);
      }, 380);
    }, 2000);
  };
  console.log(isSuccess);
  if (isSuccess) {
    return (
      <div className="container-register">
        <div
          className={!goToLogin ? "form-register" : "form-register closeForm"}
        >
          <h1 style={{ color: "#54B435" }}>Đăng ký thành công</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="container-register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          password: "123123123",
          gender: "nam",
          passwordConfirmation: "123123123",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Vui lòng nhập trường này"),
          lastName: Yup.string().required("Vui lòng nhập trường này"),
          email: Yup.string()
            .email("Trường này phải là email")
            .required("Vui lòng nhập trường này"),
          gender: Yup.string().required("Chọn giới tính"),

          phone: Yup.string()
            .required("Phone is required")
            .matches(/[0-9]/, "Số điện thoại chỉ bao gồm các chữ số")
            .min(10, "Số điện thoại không đúng")
            .max(10, "Số điện thoại không đúng"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum."),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
        })}
        onSubmit={(values) => {
          console.log(values);
          handleGoToLogin();
        }}
      >
        <Form
          className={!goToLogin ? "form-register" : "form-register closeForm"}
        >
          <h1>Đăng ký tài khoản</h1>
          <div className="container-2field">
            <FastField name="firstName">
              {(props) => (
                <InputField
                  type="text"
                  {...props}
                  placeholder="e.g, Nguyễn"
                  label="Họ"
                />
              )}
            </FastField>
            <FastField name="lastName">
              {(props) => (
                <InputField
                  type="text"
                  {...props}
                  placeholder="e.g, Lâm"
                  label="Name"
                />
              )}
            </FastField>
          </div>
          <div className="container-2field">
            <FastField name="phone">
              {(props) => (
                <InputField
                  type="text"
                  {...props}
                  placeholder="e.g, 0123456789"
                  label="Phone"
                />
              )}
            </FastField>
            <FastField name="gender">
              {(props) => (
                <SelectField {...props} label="Giới tính">
                  <option value="">Chọn giới tính</option>
                  <option value="nam">Nam</option>
                  <option value="nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </SelectField>
              )}
            </FastField>
          </div>
          <FastField name="email">
            {(props) => (
              <InputField
                {...props}
                type="email"
                placeholder="e.g, Cuteo@gmail.com"
                label="Email"
              />
            )}
          </FastField>
          <FastField name="password">
            {(props) => (
              <InputField
                type="password"
                {...props}
                placeholder="e.g, ................"
                label="Mật khẩu"
              />
            )}
          </FastField>
          <FastField name="passwordConfirmation">
            {(props) => (
              <InputField
                type="password"
                {...props}
                placeholder="e.g, ................"
                label="Xác nhận mật khẩu"
              />
            )}
          </FastField>
          <Button type="submit" className="button-primary">
            Đăng ký
          </Button>
          <Button
            type="button"
            className="button-primary"
            outline
            onClick={handleGoToLogin}
          >
            Đi đến đăng nhập
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
