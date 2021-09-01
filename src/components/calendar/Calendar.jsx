import cl from "./Calendar.module.css";
import { Days } from "./Days";
import { Navigation } from "./Navigation";
import { Top } from "./Top";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constans";
import { useState } from "react";

export const Calendar = () => {
  let data = useSelector((store) => store);
  let dispatch = useDispatch();
  let [monthCounte, setMonthCounte] = useState(0);
  const changeMonth = (e) => {
    if (e.target.innerText === ">") {
      setMonthCounte(monthCounte + 1);
      dispatch({ type: ACTIONS.GET_NEXT_MONTH, count: monthCounte });
    }
    if (e.target.innerText === "<") {
      setMonthCounte(monthCounte - 1);
      dispatch({ type: ACTIONS.GET_PREVIOUS_MONTH, count: monthCounte });
    }
  };

  return (
    <div className={cl.calendar}>
      <Top changeMonth={changeMonth} />
      <div className={cl.container}>
        <Navigation
          year={data.currentlyDate[monthCounte].year}
          month={data.currentlyDate[monthCounte].month}
          changeMonth={changeMonth}
          disabled={monthCounte === 0}
        />
        <Days
          selected={data.selectedDay}
          days={data.currentlyDate[monthCounte].days}
          today={data.currentlyDate[monthCounte].today}
        />
      </div>
    </div>
  );
};
