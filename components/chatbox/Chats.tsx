import { useEffect, useState } from "react";
import { ChatWrapper, ChatBox } from "./Chats.styles";
import mqtt from "mqtt";

export default function Chat() {
  const [userName, setUserName] = useState("");
  const [userUrl, setUserUrl] = useState("");
  const [userPort, setUserPort] = useState("");

  // 로컬스토리지에서 데이터를 가져옴
  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setUserUrl(localStorage.getItem("userurl"));
    setUserPort(localStorage.getItem("userport"));
  });

  const options = {
    host: userUrl,
    port: Number(userPort),
    username: userName,
  };

  const client = mqtt.connect("mqtt://192.168.0.22");

  client.on("connect", function () {
    console.log();
  });

  return (
    <ChatWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        환영합니다!!{" "}
      </div>
      <ChatBox>
        ddasdjsaijdiasjdisajdksajdsalkjdsakjdskajdkasjfhfuwhfgusadhgsasopdksadksapodksapokdsapodksapodkspoakdospakdsoapkpdjkfblkdjshfdlksajf
      </ChatBox>
    </ChatWrapper>
  );
}
