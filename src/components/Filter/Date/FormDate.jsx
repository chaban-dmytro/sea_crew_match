import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import sprite from "../../../images/sptite.svg";
import { DateWrapper } from "./FormDate.styled";

export const FormDate = ({ text }) => {
  const [startDate, setStartDate] = useState();
  return (
    <DateWrapper>
      <label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText={text}
          maxDate={new Date()}
          dateFormat="dd/MM/yyyy"
        />
        <span>
          <svg>
            <use href={sprite + "#icon-calendar"}></use>
          </svg>
        </span>
      </label>
    </DateWrapper>
  );
};
