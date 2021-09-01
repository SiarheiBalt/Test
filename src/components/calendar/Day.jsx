import "./Grid.css";

export const Day = ({ data, today, dayOfWeek, select, selected }) => {
  const onclick = () => {
    select(data.id);
  };

  return (
    <div
      id={data.id}
      className={"grid__element"}
      style={{
        backgroundColor: today
          ? "whitesmoke"
          : "" || data.id === selected.id
          ? "rgb(200, 234, 255)"
          : "",
      }}
      onClick={onclick}
    >
      <div className={"date_title"}>
        {dayOfWeek}
        {data.day}
      </div>
    </div>
  );
};
