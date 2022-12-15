import "./index.css"
import { AiFillEdit,AiFillDelete } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { useState,useEffect } from "react";
import Select from "react-select";
import { getAllShowTime,getAllShows, addShowTime,deleteShowtime} from "../../../../../apiRequest";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default function ShowTimeManagement(){
    const [idShow, setIdShow] = useState(null); 
    const [time, setTime] = useState(null); 
    const [shows, setShows] = useState(null); 

    const [showOptions, setShowOptions] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [timeOptions, setTimeOptions] = useState(["7:00","9:00","11:00","13:00","15:00","17:00","19:00","21:00","23:00"].map((time)=>({value: time,label: time})));
    const fetchShowtime = async ()=>{
        const resShowtimes = await getAllShowTime();
        setShows(resShowtimes);
    } 
    useEffect(() => {
        fetchShowtime();   
    }, []);

    useEffect(() => {
        const fetchShows = async ()=>{
            const resShowtimes = await getAllShows();
            setShowOptions(
                resShowtimes.map((show) => ({
                    value: show.idShow,
                    label: show.title
                }))
            );
        }
        fetchShows();   
    }, []);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newShowTime = {
            idShow: idShow,
            date: moment(startDate).format("DD-MM-YYYY"),
            hour: time
        }
        await addShowTime(newShowTime);
        await fetchShowtime();
    };

    return (

        <div className="showtime-management">
            <div className="showtime-header">
                <p>Quản lý Show</p>
            </div>
            <form className="add-showtime-form" onSubmit={handleSubmit}>
                <Select name="showtime" id="showtime" className = "select_tag"
                        placeholder="Chọn show"
                        options={showOptions}
                        onChange={(e) => {
                            setIdShow(e.value);
                        }}
                        />
                <DatePicker selected={startDate} name="dateShow" id="dateShow" className = "select_tag" onChange={(date) => setStartDate(date)} />
                <Select name="time" id="time" className = "select_tag"
                        placeholder="Chọn giờ"
                        options={timeOptions}
                        onChange={(e) => {
                            setTime(e.value);
                        }}
                        />   
                <button type="submit" className="btn">Thêm lịch</button>
            </form>
            <div className="showtime-container">
                <ul className="showtime-info">
                    {
                        shows?.map((show) =>{
                            return(
                                <li>
                                    <div className="info-container">
                                        <p>{show.idShow}</p>
                                        <p>{show.idMovie}</p>
                                        <p>{show.title}</p>
                                        <p>{show.dateShow}</p>
                                        <p>{show.hour}</p>
                                    </div>
                                    <div className="showtime-modify">
                                        <AiFillEdit className="showtime-mod edit-show"/>
                                        <AiFillDelete className="showtime-mod delete-show" onClick={async ()=>{
                                            await deleteShowtime({
                                                showID: show.idShow,
                                                hourID : show.idHour
                                            });
                                            await fetchShowtime();
                                        }}/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}