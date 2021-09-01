import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Info } from "./components/info/Info";
import { Calendar } from "./components/calendar/Calendar";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { HomePage } from "./components/homePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/homePage" />
        <Route exact path="/">
          <Redirect to="/homePage" />
        </Route>
        <Route path="/homePage" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/info" component={Info} />
        <Route path="/calendar" component={Calendar} />
      </div>
    </BrowserRouter>
  );
}

export default App;
