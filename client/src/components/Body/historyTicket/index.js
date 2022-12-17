import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useGlobalContext } from "../../../context";
import { getAllUserTickets } from "../../../apiRequest";
import { Ticket } from "./Ticket";
export default function HistoryTicket() {
  const [tickets, setTickets] = useState([]);
  const { user } = useGlobalContext();
  useEffect(() => {
    (async () => {
      setTickets(await getAllUserTickets(user.idUser));
    })();
  }, []);
  return (
    <div className="container-profile">
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to={"/"}>Trang chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Lịch sử giao dịch
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="container-tickets">
        <h2>Lịch sử giao dịch</h2>
        {tickets.map((ticket) => (
          <Ticket key={ticket.idTicket} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
