import { NavLink } from "react-router-dom";
import cl from "./Header.module.css";

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.link}>
        <NavLink to="/homePage" activeClassName={cl.activ}>
          Home Page
        </NavLink>
      </div>
      <div className={cl.link}>
        <NavLink to="/login" activeClassName={cl.activ}>
          Login
        </NavLink>
      </div>
      <div className={cl.link}>
        <NavLink to="/profile" activeClassName={cl.activ}>
          Profile
        </NavLink>
      </div>
      <div className={cl.link}>
        <NavLink to="/info" activeClassName={cl.activ}>
          Info
        </NavLink>
      </div>
      <div className={cl.link}>
        <NavLink to="/calendar" activeClassName={cl.activ}>
          Calendar
        </NavLink>
      </div>
    </header>
  );
};
