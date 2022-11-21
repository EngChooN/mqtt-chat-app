import styled from "styled-components";
import { Wrapper, UserInfoBox, ChannelsBox } from "./Sdiebar.styles";

export default function Sidebar() {
  return (
    <Wrapper>
      <UserInfoBox>로그인해주세요</UserInfoBox>
      <ChannelsBox>#채널</ChannelsBox>
    </Wrapper>
  );
}
