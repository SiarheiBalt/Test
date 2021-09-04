import "./App.css";
import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Info } from "./components/info/Info";
import { Calendar } from "./components/calendar/Calendar";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { HomePage } from "./components/homePage/HomePage";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((store) => store);
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          isAuth={data.authReducer.isAuth}
          user={data.authReducer.login}
        />
        <Route exact path="/ " />
        <Route exact path="/">
          <Redirect to="/ " />
        </Route>
        <Route path="/ " component={HomePage} />
        <Route
          path="/login"
          render={() => (
            <Login
              isAuth={data.authReducer.isAuth}
              user={data.authReducer.login}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              isAuth={data.authReducer.isAuth}
              userInfo={data.authReducer.userInfo}
              userEvents={data.calendarReducer.userEvents}
            />
          )}
        />
        <Route path="/info" render={() => <Info data={data.infoReducer} />} />
        <Route
          path="/calendar"
          render={() => (
            <Calendar
              data={data.calendarReducer}
              isAuth={data.authReducer.isAuth}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
