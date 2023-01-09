import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ChannelList({ channels, setChannels, index }) {
  const router = useRouter();
  const [addChannelFlag, setAddChannelFlag] = useState(false);
  const [channelName, setChannelName] = useState("");

  const addedChannel = (e, index) => {
    if (e.keyCode == 13) {
      // 스페이스바를 누르고 추가했을 시, 예외처리 해야함!! (아직 안함)
      if (channelName == "") {
        // 채널명을 아무것도 입력하고 추가헀을 시, 채널 추가를 막음
        setChannelName("");
        setAddChannelFlag(false);
      } else {
        let getArr = JSON.parse(localStorage.getItem("channels"));
        console.log("getArr", getArr);
        let setArr = JSON.stringify([
          ...getArr,
          getArr[index].wildChannel.push(channelName),
        ]);
        localStorage.setItem("channels", setArr);
        setChannels(JSON.parse(setArr));
        setAddChannelFlag(false);
        // router.push("/chat/" + channels[0].wildChannel[idx]);
      }
    }
  };

  return (
    <>
      {channels[index]?.channelName?.map((el) => (
        <li key={index} style={{ marginBottom: "5px" }}>
          <Link href={"/chat/" + el}>{el}</Link>
          <button
            style={{ marginLeft: "15px" }}
            onClick={() => {
              setAddChannelFlag(!addChannelFlag);
            }}
          >
            +
          </button>
          {addChannelFlag ? (
            <input
              style={{ marginTop: "20px", width: "100%", color: "white" }}
              onChange={(e) => {
                setChannelName(e.target.value);
              }}
              onKeyDown={(e) => {
                addedChannel(e, index);
              }}
              placeholder="엔터를 누르면 추가됩니다."
            />
          ) : null}
        </li>
      ))}
      {channels[index]?.wildChannel?.map((el) => (
        <ul>
          <li>
            <Link href={"/chat/" + channels[index]?.channelName + "/" + el}>
              {el}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
}
