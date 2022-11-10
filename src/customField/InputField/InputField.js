import { ErrorMessage } from "formik";
import React from "react";
import "./style.css";
export default function InputField({ value, field, meta, form, ...props }) {
  return (
    <div className="container-input">
      <label htmlFor={field.name}>{props.label}</label>
      <input {...field} {...props} className="form-control" />
      <ErrorMessage
        name={field.name}
        component="div"
        className="message-error"
      />
    </div>
  );
}
