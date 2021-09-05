import { Article } from "./Article";
import cl from "./Info.module.css";

export const Info = ({ data }) => {
  return (
    <div className={cl.info}>
      {data.map((el, i) => (
        <Article key={i} data={el} />
      ))}
    </div>
  );
};
