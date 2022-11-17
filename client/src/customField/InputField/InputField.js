import { ErrorMessage } from "formik";
import React from "react";
import "./style.css";
const InputField = React.forwardRef(
  ({ value, field, meta, form, ...props }, ref) => {
    return (
      <div className="container-input">
        <label htmlFor={field.name}>{props.label}</label>
        <input {...field} {...props} ref={ref} className="form-control" />
        <ErrorMessage
          name={field.name}
          component="div"
          className="message-error"
        />
      </div>
    );
  }
);
export default InputField;
