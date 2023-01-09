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
  const [userUrl] = useState("172.30.1.20");
  const [userPort] = useState("9001");

  const login = () => {
    localStorage.setItem("username", userName);
    localStorage.setItem("userurl", userUrl);
    localStorage.setItem("userport", userPort);
    const arr = [];
    localStorage.setItem("channels", JSON.stringify(arr));
    Router.push("/chat/free");
  };

  useEffect(() => {
    alert(
      `mqtt활용! 🙋🏻‍♂️ 상위 채널에서 보낸 메세지는 하위 채널에서도 수신됩니다.
mqtt의 와일드카드를 이용하여 간단한 계층 구조의 채팅앱을 만들었습니다!`
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
        // 집 172.30.1.4 회사 192.168.100.74
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
