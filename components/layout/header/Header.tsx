import { useRouter } from "next/router";
import useRoomName from "../../../src/hooks/useRoomName";
import { Wrapper } from "./Header.styles";

export default function Header() {
  const router = useRouter();
  const { roomName } = useRoomName();

  return (
    <Wrapper>
      {router.asPath == "/chat/every"
        ? "📍 Channel - every"
        : `📍 Channel - every / ${roomName.channels}`}
      {roomName.wild !== undefined ? " / " + roomName.wild : null}
    </Wrapper>
  );
}
