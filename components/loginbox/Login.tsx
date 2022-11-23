import Router from "next/router";
import React, { useState } from "react";
import {
  LoginBox,
  LoginInput,
  LoginButton,
  UrlInput,
  PortInput,
} from "./Login.styles";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userUrl, setUserUrl] = useState("");
  const [userPort, setUserPort] = useState("");

  const login = () => {
    localStorage.setItem("username", userName);
    localStorage.setItem("userurl", userUrl);
    localStorage.setItem("userport", userPort);
    const arr = [];
    localStorage.setItem("channels", JSON.stringify(arr));
    Router.push("/chat/every");
  };

  return (
    <LoginBox>
      Login your MQTT server!
      <LoginInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(e.target.value);
        }}
        placeholder="name"
      />
      <UrlInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserUrl(e.target.value);
        }}
        placeholder="url"
      />
      <PortInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserPort(e.target.value);
        }}
        placeholder="port"
      />
      <LoginButton onClick={login}>Ok</LoginButton>
    </LoginBox>
  );
}
