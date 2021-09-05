import { UserDealsLi } from "./UsearDealsLi";

export const DealsOutput = ({ eventsData }) => {
  return (
    <div>
      <h3>{eventsData.length === 0 ? "Нет событий" : "События"}</h3>
      <ul>
        {eventsData.map((el, i) => (
          <UserDealsLi key={i} data={el} />
        ))}
      </ul>
    </div>
  );
};
