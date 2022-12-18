import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useGlobalContext } from "../../../context";
import { getAllUserTickets } from "../../../apiRequest";
import { Ticket } from "./Ticket";
import ReactPaginate from "react-paginate";

export default function HistoryTicket() {
  const [tickets, setTickets] = useState([]);
  const { user } = useGlobalContext();
  const [slidedTickets, setSlicedTickets] = useState([]);

  const [index, setIndex] = useState(0);
  const [numbersPerPage, setNumberPerPage] = useState(3);
  const [countPages, setCountPage] = useState(0);

  const handlePageClick = (e) => {
    setIndex(e.selected);
    setSlicedTickets(
      tickets.slice(
        e.selected * numbersPerPage,
        (e.selected + 1) * numbersPerPage
      )
    );
  };
  useEffect(() => {
    (async () => {
      const res = await getAllUserTickets(user.idUser);
      console.log(res);
      setTickets(res);
      setSlicedTickets(res.slice(0, numbersPerPage));
      setCountPage(Math.ceil(res.length / numbersPerPage));
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
        {slidedTickets.map((ticket) => (
          <Ticket key={ticket.idTicket} ticket={ticket} />
        ))}
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          forcePage={index}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={countPages}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="phantrangadmin"
        />
      </div>
    </div>
  );
}
