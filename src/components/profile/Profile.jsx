import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constans";
import { DealsOutput } from "./DealsOutput";
import cl from "./Profile.module.css";
import { UserInfo } from "./UserInfo";

export const Profile = () => {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_USER_DEALS });
  }, []);

  return (
    <div className={cl.container}>
      <UserInfo userData={data.authReducer.userInfo} />
      <DealsOutput eventsData={data.calendarReducer.userEvents} />
    </div>
  );
};
