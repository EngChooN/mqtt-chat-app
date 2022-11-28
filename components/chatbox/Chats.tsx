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

  // mqtt connect
  const mqttOption = {
    port: Number(userPort),
    username: userName,
    clientId: userName,
  };

  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState("");
  const [payload, setPayload] = useState({});

  useEffect(() => {
    const mqttConnect = (userUrl, mqttOption) => {
      setConnectStatus("Connecting");
      setClient(mqtt.connect(userUrl, mqttOption));
    };
    mqttConnect(userUrl, mqttOption);
  }, []);

  useEffect(() => {
    if (client) {
      console.log(client);
      client.on("connect", () => {
        setConnectStatus("Connected");
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        setConnectStatus("Reconnecting");
      });
      client.on("message", (topic, message) => {
        const payload = { topic, message: message.toString() };
        setPayload(payload);
      });
    }
  }, [client]);

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
