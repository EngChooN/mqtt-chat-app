import Router from "next/router";
import React, { useState } from "react";
import {
  LoginBox,
  NameInput,
  LoginButton,
  UrlInput,
  PortInput,
} from "./Login.styles";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userUrl, setUserUrl] = useState("192.168.100.74");
  const [userPort, setUserPort] = useState("9001");

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
      <NameInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(e.target.value);
        }}
        placeholder="name"
      />
      <UrlInput
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        //   setUserUrl(e.target.value);
        // }}
        placeholder="url"
        value={"192.168.100.74"}
      />
      <PortInput
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        //   setUserPort(e.target.value);
        // }}
        placeholder="port"
        value={"9001"}
      />
      <LoginButton onClick={login}>Ok</LoginButton>
    </LoginBox>
  );
}
