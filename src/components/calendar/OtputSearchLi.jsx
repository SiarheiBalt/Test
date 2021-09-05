import cl from "./Calendar.module.css";

export const OutputSearchLi = ({ day, deal, month }) => {
  return (
    <li className={cl.li}>
      {day} {month} {deal.event} {deal.text}
    </li>
  );
};
