import cl from "./Calendar.module.css";

export const ButtonForTop = ({ action }) => {
  return (
    <button
      className={
        action === "<" || action === ">" || action === "Сегодня"
          ? cl.button__navigation
          : cl.button__top
      }
    >
      {action}
    </button>
  );
};
