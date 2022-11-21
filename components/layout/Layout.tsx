import styled from "styled-components";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <Sidebar />
        <Body>{props.children}</Body>
      </div>
    </Wrapper>
  );
}
