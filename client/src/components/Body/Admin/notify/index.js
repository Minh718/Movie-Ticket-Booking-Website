import React, { useEffect } from "react";
import "./style.css";
export const Notify = ({ option, setOption }) => {
  useEffect(() => {
    const myTimeOut = setTimeout(() => {
      setOption({
        isOpen: false,
        text: "Thành công",
        color: "green",
      });
    }, 3000);
    return () => clearTimeout(myTimeOut);
  }, []);
  return (
    <div
      className="container-notify"
      onClick={() => {
        setOption({
          isOpen: false,
          text: "Thành công",
          color: "green",
        });
      }}
    >
      <div className="form-notify" style={{ color: `${option.color}` }}>
        {option.text}
      </div>
    </div>
  );
};
