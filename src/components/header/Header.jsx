import { NavLink } from "react-router-dom";
import cl from "./Header.module.css";

export const Header = ({ isAuth, user }) => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <header className={cl.header}>
        <div className={cl.link}>
          {isAuth && (
            <NavLink to="/login" activeClassName={cl.activ}>
              {user}
            </NavLink>
          )}
        </div>
        <div className={cl.link}>
          <NavLink to="/ " activeClassName={cl.activ}>
            Home Page
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
    </div>
  );
};
