import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constans";
import { getDayOfWeek } from "../../redux/functions";
import { Day } from "./Day";
import "./Grid.css";

export const Days = ({ days, today, selected }) => {
  let daysOfWeek = getDayOfWeek();

  const dispatch = useDispatch();
  const select = (id) => {
    dispatch({ type: ACTIONS.SELECT_DAY, id });
  };
  return (
    <div className={"grid"}>
      {days.map((el, i) => (
        <Day
          selected={selected}
          key={i}
          data={el}
          today={today === el.day}
          dayOfWeek={daysOfWeek[i]}
          select={select}
        />
      ))}
    </div>
  );
};
