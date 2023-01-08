import { useState } from "react";
import { SendBox, SendInput, SendButton } from "./Send.styles";

export default function Send({ sendFunc, inputRef }) {
  // 인풋값을 초기화를 위해서 자식 컴포넌트에서 따로 값을 관리할 state를 선언
  const [value, setValue] = useState("");

  const onChange = (e) => {
    // 실절적으로 보낼 값
    inputRef.current = e.target.value;
    console.log(inputRef.current);
    // 부모컴포넌트의 props데이터가 아니기 때문에, 부모컴포넌트까지 리렌더링이 발생하지 않음 (관리만 할 값임)
    setValue(inputRef.current);
  };

  // ref로는 초기화가 어렵기 때문에 따로 관리로 사용하려고 선언한 state값을 초기화 해줌
  const reset = () => {
    setValue("");
  };

  return (
    <SendBox>
      <SendInput ref={inputRef} onChange={onChange} value={value} />
      <SendButton
        onClick={() => {
          sendFunc();
          reset();
        }}
      >
        보내기
      </SendButton>
    </SendBox>
  );
}
