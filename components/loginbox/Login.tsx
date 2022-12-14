import Router from "next/router";
import React, { useEffect, useState } from "react";
import {
  LoginBox,
  NameInput,
  LoginButton,
  UrlInput,
  PortInput,
} from "./Login.styles";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userUrl] = useState("172.30.1.90");
  const [userPort] = useState("9001");

  const login = () => {
    localStorage.setItem("username", userName);
    localStorage.setItem("userurl", userUrl);
    localStorage.setItem("userport", userPort);
    const arr = [];
    localStorage.setItem("channels", JSON.stringify(arr));
    Router.push("/chat/every");
  };

  useEffect(() => {
    alert(
      `mqttνμ©! ππ»ββοΈ μμ μ±λμμ λ³΄λΈ λ©μΈμ§λ νμ μ±λμμλ μμ λ©λλ€.
mqttμ μμΌλμΉ΄λλ₯Ό μ΄μ©νμ¬ κ°λ¨ν κ³μΈ΅ κ΅¬μ‘°μ μ±νμ±μ λ§λ€μμ΅λλ€!`
    );
  }, []);

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
        value={userUrl}
        // μ§ 172.30.1.4 νμ¬ 192.168.100.74
      />
      <PortInput
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        //   setUserPort(e.target.value);
        // }}
        placeholder="port"
        value={userPort}
      />
      <LoginButton onClick={login}>Ok</LoginButton>
    </LoginBox>
  );
}
