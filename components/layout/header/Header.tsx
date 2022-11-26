import Router from "next/router";
import { useEffect, useState } from "react";
import { Wrapper } from "./Header.styles";

export default function Header() {
  const [channelName, setChannelName] = useState("");

  useEffect(() => {
    // setChannelName(Router.asPath);
    setChannelName(Router.query.channels);
  });

  return <Wrapper>📍 Channel - {channelName}</Wrapper>;
}
