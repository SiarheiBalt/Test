import { getNameofMounth } from "../../redux/functions";
import cl from "./Profile.module.css";

export const UserDealsLi = ({ data }) => {
  const month = getNameofMounth(data.month);

  return (
    <li className={cl.li}>
      {`${data.day}

      ${month}:

      ${data.deal.event},
      ${data.deal.text}.`}
    </li>
  );
};
