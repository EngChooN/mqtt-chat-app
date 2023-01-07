import { useEffect, useRef, useState } from "react";
import { ChatWrapper, ChatBox, ChatMyBox } from "./Chats.styles";
import mqtt from "mqtt";
import Send from "../sendbox/Send";
import useLocalData from "../../src/hooks/useLocalData";
import useRoomName from "../../src/hooks/useRoomName";

export default function Chat() {
  const [personMessage, setPersonMessage] = useState([]);
  const { userName } = useLocalData();
  const { userUrl } = useLocalData();
  const { userPort } = useLocalData();
  const { roomName } = useRoomName(); // roomName.channels

  const url = `${userUrl}:${userPort}`;
  const client = mqtt.connect("mqtt://" + url);
  // const client = mqtt.connect("mqtt://192.168.100.74:9001");
  const inputRef = useRef("");

  useEffect(() => {
    // 로컬스토리지에서 url, port를 가져옴
    console.log("클라이언트 접속 중..");

    // 채팅룸이 바뀔 시, 클라이언트 연결
    const connectMqtt = () => {
      client.on("connect", () => {
        setPersonMessage([]);
        console.log("클라이언트 접속 완료!");
        // 해당 토픽 구독
        client.subscribe(roomName.channels, (err) => {
          if (!err) {
            console.log(roomName.channels + " 토픽 구독 성공!");
          } else {
            console.log("구독실패");
          }
        });
      });
    };

    if (url !== ":" && client !== undefined) {
      connectMqtt();
    }
  }, [roomName]);

  // 구독한 토픽에서 메세지 수신
  client.on("message", function (topic, message) {
    // message is Buffer
    console.log(message);
    // 버퍼 => 문자열
    const callMessage = message.toString("utf-8");
    // 데이터에 담기
    setPersonMessage((prev) => [...prev, callMessage]);
  });

  // 해당 토픽으로 메세지 송신
  const sendFunc = () => {
    client.publish(
      roomName.channels,
      `[${userName}]: ${inputRef.current}`,
      { qos: 0, retain: false },
      function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Published");
        }
      }
    );
    inputRef.current = "";
  };

  return (
    <>
      <ChatWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {userName}님 환영합니다!!
        </div>
        {personMessage.map((messages, idx) => (
          <div key={idx}>
            {messages.substring(
              messages.toString("utf-8").indexOf("[") + 1,
              messages.toString("utf-8").indexOf("]")
            ) !== userName ? (
              <>
                {messages.substring(
                  messages.toString("utf-8").indexOf("[") + 1,
                  messages.toString("utf-8").indexOf("]")
                )}
                <ChatBox>
                  {messages.substring(
                    messages.toString("utf-8").indexOf(":") + 1
                  )}
                </ChatBox>
              </>
            ) : (
              <ChatMyBox>
                {messages.substring(
                  messages.toString("utf-8").indexOf(":") + 1
                )}
              </ChatMyBox>
            )}
          </div>
        ))}
      </ChatWrapper>
      <Send sendFunc={sendFunc} inputRef={inputRef} />
    </>
  );
}
