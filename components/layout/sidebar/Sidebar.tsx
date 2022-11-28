import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Wrapper, UserInfoBox, ChannelsBox } from "./Sidebar.styles";

export default function Sidebar() {
  const router = useRouter();
  // 로컬스토리지의 이름 값을 담아야함 (next.js의 SSR때문에..)
  const [userName, setUserName] = useState("");
  const [userUrl, setUserUrl] = useState("");
  const [userPort, setUserPort] = useState("");
  const [addChannelFlag, setAddChannel] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channels, setChannels] = useState([]);

  // 로컬스토리지에서 데이터를 가져옴
  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setUserUrl(localStorage.getItem("userurl"));
    setUserPort(localStorage.getItem("userport"));
  });

  useEffect(() => {
    console.log(addChannelFlag);
  });

  const addedChannel = (e) => {
    if (e.keyCode == 13) {
      // 스페이스바를 누르고 추가했을 시, 예외처리 해야함!! (아직 안함)
      if (channelName == "") {
        // 채널명을 아무것도 입력하고 추가헀을 시, 채널 추가를 막음
        setChannelName("");
        setAddChannel(false);
      } else {
        let getArr = JSON.parse(localStorage.getItem("channels"));
        let setArr = JSON.stringify([...getArr, channelName]);
        localStorage.setItem("channels", setArr);
        setChannels(JSON.parse(setArr));
        setAddChannel(false);
      }
    }
  };

  useEffect(() => {
    let getArr = JSON.parse(localStorage.getItem("channels"));
    setChannels(getArr);
  }, []);

  return (
    <Wrapper>
      {typeof window !== undefined ? (
        <UserInfoBox>{userName}</UserInfoBox>
      ) : (
        <UserInfoBox>로그인해주세요</UserInfoBox>
      )}
      <ChannelsBox>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>#채널</div>
          <button
            onClick={() => {
              setAddChannel(true);
            }}
          >
            +
          </button>
        </div>
        {addChannelFlag ? (
          <input
            style={{ marginTop: "20px", width: "100%", color: "white" }}
            onChange={(e) => {
              setChannelName(e.target.value);
            }}
            onKeyDown={addedChannel}
            placeholder="엔터를 누르면 추가됩니다."
          />
        ) : null}
        <ul>
          <li>
            <Link href={"/chat/every"}>every</Link>
          </li>
          {channels.map((el, idx) => (
            <li key={idx}>
              <Link href={"/chat/" + el.replace(/ /g, "")}>{el}</Link>
            </li>
          ))}
        </ul>
      </ChannelsBox>
      <li>URL - {userUrl}</li>
      <li>PORT - {userPort}</li>
    </Wrapper>
  );
}
