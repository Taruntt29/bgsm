import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useDispatch, useSelector } from "react-redux";
import { getAshramwashiEventsAction } from "redux/actions/Events";
export default function EventModule() {
  const dispatch = useDispatch();
  const getAshramwashiEventsData = useSelector(
    (state) => state.getAshramwashiEventsReducer?.getAshramwashiEventsData
  );
  useEffect(() => {
    getAshramwashiEventsAction(dispatch);
  }, []);
  console.log("first", getAshramwashiEventsData);
  const event = getAshramwashiEventsData?.map((item) => {
    return {
      id: item.id,
      title: item.title,
      start: item.sDate,
      end: item.eDate,
      description: item.desc,
    };
  });
  console.log("eve", event);
  const hello = (info) => {
    console.log("info", info);
  };
  return (
    <div className="App">
      <FullCalendar
        defaultView="dayGridMonth"
        displayEventTime={true}
        headerToolbar={{
          left: "today,prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        displayEventEnd="true"
        //eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        themeSystem="Simplex"
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={event}
        eventClick={() => hello(event?.title)}
      />
    </div>
  );
}
