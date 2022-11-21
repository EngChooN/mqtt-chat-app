import styled from "styled-components";
import Sidebar from "./sidebar/Sidebar";

const Wrapper = styled.section`
  display: flex;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <Sidebar />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
