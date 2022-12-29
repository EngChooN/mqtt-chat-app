import { useEffect, useState } from "react";
import { ChatWrapper, ChatBox } from "./Chats.styles";
import mqtt from "mqtt";

export default function Chat() {
  const client = mqtt.connect("mqtt://localhost:1883");

  useEffect(() => {
    console.log("클라이언트 접속 중..");

    // 클라이언트 연결
    client.on("connect", () => {
      console.log("클라이언트 접속 완료!");
      // 해당 토픽 구독
      client.subscribe("every", (err) => {
        if (!err) {
          console.log("every 토픽 구독 성공!");
        } else {
          console.log("구독실패");
        }
      });
    });

    // 해당 토픽의 메세지 로그 콜백
    client.on("message", function (topic, message) {
      // message is Buffer
      console.log(message.toString());
    });
  }, []);

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
