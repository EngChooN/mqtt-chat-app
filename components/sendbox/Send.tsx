import { SendBox, SendInput, SendButton } from "./Send.styles";

export default function Send({ sendMessage, setSendMessage, sendFunc }) {
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
