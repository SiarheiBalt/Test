import { Article } from "./Article";
import cl from "./Info.module.css";

export const Info = () => {
  return (
    <div className={cl.info}>
      <Article />
    </div>
  );
};
