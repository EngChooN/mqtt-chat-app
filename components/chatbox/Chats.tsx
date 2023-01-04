import { useEffect, useState } from "react";
import { ChatWrapper, ChatBox } from "./Chats.styles";
import mqtt from "mqtt";

export default function Chat() {
  const [personMessage, setPersonMessage] = useState([]);

  const client = mqtt.connect("mqtt://192.168.100.74:9001");

  useEffect(() => {
    console.log("클라이언트 접속 중..");
    // 최초 렌더링 시, 클라이언트 연결
    const connectMqtt = () => {
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
    };
    connectMqtt();
  }, []);

  // 구독한 토픽에서 메세지 수신
  client.on("message", function (topic, message) {
    // message is Buffer
    console.log(message);
    // 버퍼 => 문자열
    const callMessage = message.toString("utf-8");
    console.log(message.toString("utf-8"));
    // 데이터에 담기
    setPersonMessage((prev) => [...prev, callMessage]);
  });

  const date = new Date();
  console.log(date);

  return (
    <ChatWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        환영합니다!!
      </div>
      {personMessage.map((messages, idx) => (
        <ChatBox key={idx}>{messages}</ChatBox>
      ))}
    </ChatWrapper>
  );
}
