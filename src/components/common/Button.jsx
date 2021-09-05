import cl from "./Button.module.css";

export const Button = ({ action, onClick, disabled }) => {
  const click = (e) => {
    onClick(e);
  };
  return (
    <button
      disabled={disabled}
      onClick={click}
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
