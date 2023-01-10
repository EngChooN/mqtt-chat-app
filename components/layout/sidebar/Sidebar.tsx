import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useLocalData from "../../../src/hooks/useLocalData";
import ChannelList from "./channelList/ChannelList";
import { Wrapper, UserInfoBox, ChannelsBox } from "./Sidebar.styles";

export default function Sidebar() {
  const router = useRouter();
  // 로컬스토리지의 이름 값을 담아야함 (next.js의 SSR때문에..)
  const { userName, userUrl, userPort } = useLocalData();
  const [addChannelFlag, setAddChannelFlag] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    console.log(addChannelFlag);
  });

  const addedChannel = (e) => {
    if (e.keyCode == 13) {
      // 스페이스바를 누르고 추가했을 시, 예외처리 해야함!! (아직 안함)
      if (channelName == "") {
        // 채널명을 아무것도 입력하고 추가헀을 시, 채널 추가를 막음
        setChannelName("");
        setAddChannelFlag(false);
      } else {
        let getArr = JSON.parse(localStorage.getItem("channels"));
        let setArr = JSON.stringify([
          ...getArr,
          { channelName: [channelName], wildChannel: [] },
        ]);
        localStorage.setItem("channels", setArr);
        setChannels(JSON.parse(setArr));
        console.log(channels);
        setAddChannelFlag(false);
        router.push("/chat/" + channelName);
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
              setAddChannelFlag(!addChannelFlag);
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
          <li style={{ marginBottom: "5px" }}>
            <Link href={"/chat/every"}>every</Link>
          </li>
          <ul>
            {channels.map((el, idx) => (
              <>
                {console.log(el)}
                <ChannelList
                  key={idx}
                  index={idx}
                  channels={channels}
                  setChannels={setChannels}
                />
              </>
            ))}
          </ul>
        </ul>
      </ChannelsBox>
      <li>URL - {userUrl}</li>
      <li>PORT - {userPort}</li>
    </Wrapper>
  );
}
