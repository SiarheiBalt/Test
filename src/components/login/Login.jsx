import cl from "./Login.module.css";
import { Button } from "../common/Button.jsx";
import { Input } from "../common/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constans";
import { Redirect } from "react-router-dom";

export const Login = ({ isAuth, user }) => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [wasAttempt, setWasAttempt] = useState(false);
  const dispath = useDispatch();

  const onChangeLoginInput = (e) => {
    setLoginInput(e.target.value);
    setWasAttempt(false);
  };
  const onChangePasswordInput = (e) => {
    setPasswordInput(e.target.value);
    setWasAttempt(false);
  };

  const logOut = () => {
    dispath({ type: ACTIONS.CLOSE_ACCES });
    setWasAttempt(false);
  };

  const submit = () => {
    let user = {
      login: loginInput,
      password: passwordInput,
    };
    dispath({ type: ACTIONS.OPEN_ACCES, user });
    setLoginInput("");
    setPasswordInput("");
    setWasAttempt(true);
  };

  if (isAuth && wasAttempt) return <Redirect to="Profile" />;
  return (
    <div className={cl.login}>
      {isAuth ? (
        <div>
          <h3>Выполнен вход пользователя: {user}</h3>
          <Button action={"Выйти из профиля"} onClick={logOut} />
        </div>
      ) : (
        <div>
          <h3>login</h3>
          <Input onchangeInput={onChangeLoginInput} value={loginInput} />

          <h3>Password</h3>
          <Input
            onchangeInput={onChangePasswordInput}
            value={passwordInput}
            type={"password"}
          />

          {wasAttempt && !isAuth && (
            <div className={cl.error_mesage}>
              Имя пользователя или пароль введены неверно
            </div>
          )}
          <div>
            <Button action={"Подтвердить"} onClick={submit} />
          </div>
        </div>
      )}
    </div>
  );
};
