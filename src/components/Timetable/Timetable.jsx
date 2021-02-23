import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import "./Timetable.css";

export const Timetable = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="calendar"
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      locale={ru}
      minDate={new Date()}
      onChange={date => setStartDate(date)}
      withPortal />
  );
};