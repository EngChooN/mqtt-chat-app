import styled from "styled-components";

export const ChatWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const ChatName = styled.div`
  width: 100%;
`;

export const ChatBox = styled.div`
  float: left;
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

export const ChatMyBox = styled.div`
  float: right;
  background-color: yellow;
  word-break: break-all;
  color: black;
  padding: 15px;
  display: flex;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  margin-bottom: 15px;
`;
