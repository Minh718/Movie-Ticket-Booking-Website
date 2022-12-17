import React, { useEffect, useState } from "react";
import moment from "moment";
import "./style.css";
import { DateSlideshow } from "../dateSlideshow";
import { getAllHourInRoom, insertHours } from "../../../../../../apiRequest";
import { useOutletContext } from "react-router-dom";
export const SlideShow = ({ idShow, room, close }) => {
  console.log(close);
  const [nextDates, setNextDates] = useState(null);
  const [hoursOfShow, setHoursOfShow] = useState(null);
  const [hoursDifShow, setHoursDifShow] = useState(null);
  const [choosedHours, setChoosedHours] = useState(null);
  const [choosedDate, setChoosedDate] = useState(null);
  const [hours, setHours] = useState([
    "07:00",
    "09:00",
    "11:00",
    "13:00",
    "15:00",
    "17:00",
    "19:00",
    "21:00",
    "23:00",
  ]);
  const { setOption } = useOutletContext();
  const getDates = (startDate) => {
    let aryDates = [];

    for (let i = 1; i <= 5; i++) {
      let currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push({
        dateShow: moment(currentDate).format("DD/MM"),
        dateSave: moment(currentDate).format("YYYY-MM-DD"),
      });
    }

    return aryDates;
  };
  const handleSubmit = async () => {
    try {
      await insertHours({ hours: choosedHours, idShow, dateShow: choosedDate });
      close();
      setOption({
        isOpen: true,
        text: "Lênh giờ chiếu thành công",
        color: "#31C6D4",
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setNextDates(getDates(new Date()));
  }, []);
  const handleTakeHour = async (dateShow) => {
    setHoursDifShow(
      await getAllHourInRoom({ room, dateShow, idShow, ofShow: 0 })
    );
    setHoursOfShow(
      await getAllHourInRoom({ room, dateShow, idShow, ofShow: 1 })
    );
  };
  console.log(hoursDifShow, hoursOfShow);
  return (
    <div className="container-add-slideshow">
      <div className="container-notes">
        <div>
          <div className="vuong ofShow"></div>
          Giờ chiếu đã được chọn bởi show này
        </div>
        <div>
          <div className="vuong difShow"></div>
          Giờ chiếu đã được chọn bởi show khác
        </div>
        <div>
          <div className="vuong choosed"></div>
          Giờ chiếu đã đang được chọn
        </div>
        <div>
          <div className="vuong"></div>
          Giờ chiếu còn trống
        </div>
      </div>
      <h2>Thêm giờ chiếu</h2>
      <h4>Chọn ngày</h4>
      <div className="container-btns-date">
        {nextDates?.map((date) => (
          <button
            onClick={() => {
              handleTakeHour(date.dateSave);
              setChoosedDate(date.dateSave);
              setChoosedHours(null);
            }}
            className={date.dateSave === choosedDate && "active"}
            key={date.dateSave}
          >
            {date.dateShow}
          </button>
        ))}
      </div>

      {choosedDate && (
        <>
          <h4>Chọn giờ</h4>
          <div className="container-btns-hours">
            {hours.map((hour, index) => {
              if (hoursOfShow?.includes(hour))
                return (
                  <button key={index} className="hour-of-show">
                    {hour}
                  </button>
                );
              else if (hoursDifShow?.includes(hour))
                return (
                  <button key={index} className="hour-dif-show">
                    {hour}
                  </button>
                );
              else if (choosedHours?.includes(hour))
                return (
                  <button
                    onClick={() =>
                      setChoosedHours(
                        choosedHours?.filter((hour1) => hour1 != hour)
                      )
                    }
                    key={index}
                    className="hour-choosed"
                  >
                    {hour}
                  </button>
                );
              else
                return (
                  <button
                    onClick={() => {
                      choosedHours
                        ? setChoosedHours([...choosedHours, hour])
                        : setChoosedHours([hour]);
                    }}
                    key={index}
                  >
                    {hour}
                  </button>
                );
            })}
            <div>
              {/* {hours.length === hoursOfShow.length + hoursDifShow.length ? ( */}
              <button
                onClick={() =>
                  setChoosedHours(
                    hours.filter(
                      (hour) =>
                        !hoursOfShow?.includes(hour) &&
                        !hoursDifShow?.includes(hour)
                    )
                  )
                }
                className={
                  hours.length ===
                  hoursOfShow?.length +
                    hoursDifShow?.length +
                    choosedHours?.length
                    ? "disabled btn-select-all-hours"
                    : "btn-select-all-hours"
                }
              >
                Select All
              </button>
              {/* ) : (
                <button
                >
                  {hour}
                </button>
              )} */}
            </div>
          </div>
        </>
      )}
      {(!!choosedHours || choosedHours?.length === 0) && (
        <button onClick={handleSubmit}>Thêm giờ chiếu</button>
      )}
    </div>
  );
};
