import { useEffect, useRef, useState } from "react";
import { ChatWrapper, ChatBox, ChatMyBox } from "./Chats.styles";
import mqtt from "mqtt";
import Send from "../sendbox/Send";
import useLocalData from "../../src/hooks/useLocalData";
import useRoomName from "../../src/hooks/useRoomName";
import { useRouter } from "next/router";

export default function Chat() {
  const router = useRouter();
  const [personMessage, setPersonMessage] = useState([]);
  const { userName } = useLocalData();
  const { userUrl, userPort } = useLocalData();
  const { roomName } = useRoomName(); // roomName.channels
  console.log("하위토픽임", roomName);

  const url = `${userUrl}:${userPort}`;
  const client = mqtt.connect("mqtt://" + url);
  // const client = mqtt.connect("mqtt://192.168.100.74:9001");
  const inputRef = useRef(null);

  // const [callMessage, setCallMessage] = useState("");
  let callMessage = "";

  useEffect(() => {
    // 로컬스토리지에서 url, port를 가져옴
    console.log("클라이언트 접속 중..");

    // 채팅룸이 바뀔 시, 클라이언트 연결
    const connectMqtt = () => {
      client.on("connect", () => {
        setPersonMessage([]);
        console.log("클라이언트 접속 완료!");
        // 해당 토픽 구독
        if (router.asPath == "/chat/every") {
          const topicSub = `room/every/#`;
          client.subscribe(topicSub, (err) => {
            if (!err) {
              console.log(topicSub + "토픽 구독 성공!");
            } else {
              console.log("구독실패");
            }
          });
        } else if (roomName.wild !== undefined) {
          // ex) test/# 구독
          const topicSub = `room/every/#`;
          client.subscribe(topicSub, (err) => {
            if (!err) {
              console.log(topicSub + "토픽 구독 성공!");
            } else {
              console.log("구독실패");
            }
          });
        } else {
          // ex) test 구독
          const topicSub = `room/every/${roomName.channels}/#`;
          client.subscribe(topicSub, (err) => {
            if (!err) {
              console.log(topicSub + " 토픽 구독 성공!");
            } else {
              console.log("구독실패");
            }
          });
        }
      });
    };

    if (url !== ":" && client !== undefined) {
      connectMqtt();
    }
  }, [roomName]);

  // 데이터에 담기
  // useEffect(() => {
  //   console.log("cm담기!")
  //   setPersonMessage((prev) => [...prev, callMessage]);
  // }, [callMessage]);

  // 구독한 토픽에서 메세지 수신
  client.on("message", function (topic, message) {
    // message is Buffer
    console.log(message);
    // 버퍼 => 문자열
    // setCallMessage(message.toString("utf-8"));
    callMessage = message.toString("utf-8");
    console.log("cm", callMessage);
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
      {router.asPath}
      <Send sendFunc={sendFunc} inputRef={inputRef} />
    </>
  );
}
