import { SendBox, SendInput, SendButton } from "./Send.styles";
import mqtt from "mqtt";
import { useState } from "react";

export default function Send() {
  const [sendMessage, setSendMessage] = useState("");
  const client = mqtt.connect("mqtt://192.168.100.74:9001");

  // 해당 토픽으로 메세지 송신
  const sendFunc = () => {
    client.publish(
      "every",
      sendMessage,
      { qos: 0, retain: false },
      function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Published");
        }
      }
    );
    setSendMessage("");
  };

  return (
    <SendBox>
      <SendInput
        onChange={(e) => {
          setSendMessage(e.target.value);
        }}
        value={sendMessage}
      />
      <SendButton onClick={sendFunc}>보내기</SendButton>
    </SendBox>
  );
}
