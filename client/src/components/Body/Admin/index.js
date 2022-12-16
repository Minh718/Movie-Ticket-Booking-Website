import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Common from "./common";
import HeaderAdmin from "./components/header/HeaderAdmin";
import { Notify } from "./notify/index.js";
export default function AdminPage() {
  const [openBar, setOpenBar] = useState(true);
  const [option, setOption] = useState({
    isOpen: false,
    text: "Thành công",
    color: "green",
  });
  return (
    <>
      <HeaderAdmin setOpenBar={setOpenBar} openBar={openBar} />
      <Common setOpenBar={setOpenBar} openBar={openBar}>
        <Outlet context={{ setOption }} />
      </Common>
      {option.isOpen && <Notify setOption={setOption} option={option} />}
    </>
  );
}
