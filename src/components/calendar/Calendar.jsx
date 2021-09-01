import cl from "./Calendar.module.css";
import { Days } from "./Days";
import { Navigation } from "./Navigation";
import { Top } from "./Top";

export const Calendar = () => {
  return (
    <div className={cl.calendar}>
      <Top />
      <div className={cl.container}>
        <Navigation />
        <Days />
      </div>
    </div>
  );
};
