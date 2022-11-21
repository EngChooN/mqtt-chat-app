import Router from "next/router";
import { useState } from "react";
import { LoginBox, LoginInput, LoginButton } from "./Login.styles";

export default function Login() {
  const [userName, setUserName] = useState("");

  console.log(userName);

  const login = () => {
    localStorage.setItem("username", userName);
    Router.push("/chat");
  };

  return (
    <LoginBox>
      Login
      <LoginInput
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <LoginButton onClick={login}>Ok</LoginButton>
    </LoginBox>
  );
}
