import styled from "styled-components";

export const LoginBox = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #393a6d;
  font-size: 25px;
`;

export const LoginInput = styled.input`
  width: 300px;
  height: 45px;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: 400;
  margin-top: 30px;
  padding-left: 10px;
`;

export const UrlInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 45px;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: 400;
  padding-left: 10px;
`;

export const PortInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 45px;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: 400;
  padding-left: 10px;
`;

export const LoginButton = styled.button`
  margin-top: 40px;
  width: 100px;
  height: 50px;
  font-size: 17px;
`;
