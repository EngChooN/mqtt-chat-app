import { useRouter } from "next/router";
import { Wrapper, UserInfoBox, ChannelsBox } from "./Sidebar.styles";

export default function Sidebar() {
  const router = useRouter();
  let username = router.query.username;

  return (
    <Wrapper>
      {username !== "" ? (
        <UserInfoBox>{username}</UserInfoBox>
      ) : (
        <UserInfoBox>로그인해주세요</UserInfoBox>
      )}
      <ChannelsBox>
        <div>#채널</div>
        <ul>
          <li>ch01</li>
          <li>ch02</li>
        </ul>
      </ChannelsBox>
    </Wrapper>
  );
}
