import { SendBox, SendInput, SendButton } from "./Send.styles";

export default function Send({ sendFunc, inputRef }) {
  const onChange = (e) => {
    inputRef.current = e.target.value;
    console.log(inputRef.current);
  };
  return (
    <SendBox>
      <SendInput onChange={onChange} />
      <SendButton onClick={sendFunc}>보내기</SendButton>
    </SendBox>
  );
}
