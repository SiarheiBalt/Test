import cl from "./Calendar.module.css";
import { ButtonForTop } from "./ButtonForTop";

export const Navigation = ({ month, changeMonth, year, disabled }) => {
  return (
    <div className={cl.navigation}>
      <ButtonForTop action={"<"} onClick={changeMonth} disabled={disabled} />
      <span>
        {month} {year}
      </span>
      <ButtonForTop action={">"} onClick={changeMonth} />
      <ButtonForTop action={"Сегодня"} onClick={changeMonth} />
    </div>
  );
};
