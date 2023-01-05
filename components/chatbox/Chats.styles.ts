import styled from "styled-components";

export const ChatWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ChatBox = styled.div`
  max-width: 200px;
  width: 100%;
  background-color: white;
  word-break: break-all;
  color: black;
  padding: 15px;
  display: flex;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-bottom: 15px;
`;
