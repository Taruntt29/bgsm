import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const events = [
  { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  {
    title: "Long Event",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10"),
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  },
  {
    title: "Conference",
    start: "YEAR-MONTH-17",
    end: getDate("YEAR-MONTH-19"),
  },
  {
    title: "Meeting",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
  },
  {
    title: "Break!",
    start: "2023-05-31T09:13:55.008",
    end: "2023-05-31T09:40:55.008",
  },
  {
    title: "Meeting BGSM",
    start: "2023-05-31T10:13:55.008",
    end: "2023-05-31T11:12:55.008",
  },
  {
    title: "Implemention Attendence",
    start: "2023-05-31T11:30:55.008",
    end: "2023-05-31T13:09:55",
  },
  {
    title: "R & D  Attendence Module",
    start: "2023-05-30T13:13:55",
    end: "2023-05-30T19:13:55",
  },
  {
    title: "Interview",
    start: "2023-05-31T10:13AM",
    end: "2023-05-31T19:13:55",
  },

  {
    backgroundColor: "#f56954",
    borderColor: "#f56954",
    start: "2023-05-29",
    end: "2023-05-30",
    title: "Absent",
  },
  {
    backgroundColor: "blue",
    borderColor: "#f56954",
    start: "2023-05-30",
    end: "2023-05-31",
    title: "Present",
  },
  {
    backgroundColor: "#f56954",
    borderColor: "#f56954",
    start: "2023-05-20",
    end: "2023-05-22",
    title: "Absent",
  },

  { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default function Attendence() {
  return (
    <div className="App">
      <FullCalendar
        defaultView="dayGridMonth"
        headerToolbar={{
          left: "today,prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
      />
    </div>
  );
}
