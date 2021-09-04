import cl from "./Login.module.css";
import { Button } from "../common/Button.jsx";
import { Input } from "../common/Input";
import { useState } from "react";

export const Login = () => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const onChangeLoginInput = (e) => {
    setLoginInput(e.target.value);
  };
  const onChangePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const submit = () => {
    let user = {
      login: loginInput,
      password: passwordInput,
    };
    console.log(user);
  };

  return (
    <div className={cl.login}>
      <div>
        <h3>login</h3>
        <Input onchangeInput={onChangeLoginInput} value={loginInput} />

        <h3>Password</h3>
        <Input onchangeInput={onChangePasswordInput} value={passwordInput} />

        <div>
          <Button action={"Подтвердить"} onClick={submit} />
        </div>
      </div>
    </div>
  );
};
