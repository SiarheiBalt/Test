import cl from "./Calendar.module.css";
import { ButtonForTop } from "./ButtonForTop";

export const Navigation = () => {
  return (
    <div className={cl.navigation}>
      <ButtonForTop action={"<"} />
      <span>Mont 2020</span>
      <ButtonForTop action={">"} />
      <ButtonForTop action={"Сегодня"} />
    </div>
  );
};
