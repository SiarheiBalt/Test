import "./Grid.css";

export const Day = ({ data, today, dayOfWeek, select, selected }) => {
  const onclick = () => {
    select(data);
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
          : "" || data.deal !== null
          ? "rgb(247, 239, 217)"
          : "",
      }}
      onClick={onclick}
    >
      <div className={"date_title"}>
        {dayOfWeek}
        {data.day}
      </div>
      <div>
        <h4 className={"deal"}>{data.deal !== null && data.deal.event}</h4>
        <div className={"deal"}>{data.deal !== null && data.deal.text}</div>
      </div>
    </div>
  );
};
