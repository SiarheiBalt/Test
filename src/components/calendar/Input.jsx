import cl from "./Calendar.module.css";

export const Input = ({ onchangeInput, value }) => {
  const onchange = (e) => {
    onchangeInput(e);
  };
  return (
    <input value={value} onChange={onchange} type="text" className={cl.input} />
  );
};
