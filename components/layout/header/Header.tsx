import useRoomName from "../../../src/hooks/useRoomName";
import { Wrapper } from "./Header.styles";

export default function Header() {
  const { roomName } = useRoomName();

  return (
    <Wrapper>
      📍 Channel - {roomName.channels}
      {roomName.wild !== undefined ? " / " + roomName.wild : null}
    </Wrapper>
  );
}
