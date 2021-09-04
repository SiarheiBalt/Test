import logo from "./logo.svg";
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
        <Header />
        <Route exact path="/ " />
        <Route exact path="/">
          <Redirect to="/ " />
        </Route>
        <Route path="/ " component={HomePage} />
        <Route path="/login" component={Login} />
        <Route
          path="/profile"
          render={() => (
            <Profile
              userInfo={data.authReducer.userInfo}
              userEvents={data.calendarReducer.userEvents}
            />
          )}
        />
        <Route path="/info" render={() => <Info data={data.infoReducer} />} />
        <Route
          path="/calendar"
          render={() => <Calendar data={data.calendarReducer} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
