import Router from "next/router";
import React, { useState } from "react";
import { LoginBox, LoginInput, LoginButton } from "./Login.styles";

export default function Login() {
  const [userName, setUserName] = useState("");

  console.log(userName);

  const login = () => {
    localStorage.setItem("username", userName);
    Router.push("/chat/" + userName);
  };

  return (
    <LoginBox>
      Login
      <LoginInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(e.target.value);
        }}
      />
      <LoginButton onClick={login}>Ok</LoginButton>
    </LoginBox>
  );
}
