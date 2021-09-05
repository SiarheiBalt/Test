import cl from "./Calendar.module.css";
import { Button } from "../common/Button";
import { getNameofMounth } from "../../redux/functions";

export const Navigation = ({ month, changeMonth, year, disabled }) => {
  return (
    <div className={cl.navigation}>
      <Button action={"<"} onClick={changeMonth} disabled={disabled} />
      <span>
        {(month = getNameofMounth(month))} {year}
      </span>
      <Button action={">"} onClick={changeMonth} />
      <Button action={"Сегодня"} onClick={changeMonth} />
    </div>
  );
};
