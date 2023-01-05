import styled from "styled-components";
import Chats from "../../../components/chatbox/Chats";

const Wrapper = styled.section`
  background-color: #222222;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default function Chat() {
  return (
    <Wrapper>
      <Chats />
    </Wrapper>
  );
}
