import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { ACTIONS } from "../../redux/constans";
import { DealsOutput } from "./DealsOutput";
import cl from "./Profile.module.css";
import { UserInfo } from "./UserInfo";

export const Profile = ({ userInfo, userEvents, isAuth }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && dispatch({ type: ACTIONS.GET_USER_DEALS });
  }, []);
  if (!isAuth) return <Redirect to="Login" />;

  return (
    <div className={cl.container}>
      <UserInfo userData={userInfo} />
      <DealsOutput eventsData={userEvents} />
    </div>
  );
};
