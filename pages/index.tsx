import styled from "styled-components";
import Login from "../components/loginbox/Login";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121222;
`;

export default function Home() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}
