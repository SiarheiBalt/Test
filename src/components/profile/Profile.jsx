import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constans";
import { DealsOutput } from "./DealsOutput";
import cl from "./Profile.module.css";

export const Profile = () => {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_USER_DEALS });
  }, []);
  console.log(data.userEvents);
  return (
    <div className={cl.container}>
      <DealsOutput eventsData={data.userEvents} />
    </div>
  );
};
