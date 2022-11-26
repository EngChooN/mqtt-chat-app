import styled from "styled-components";
import Login from "../components/loginbox/Login";

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121222;
`;

// test commit

export default function Home() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}
