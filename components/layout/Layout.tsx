import Router from "next/router";
import { useEffect, useState } from "react";
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
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(Router.pathname);
  });
  return (
    <Wrapper>
      <Header />
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        {currentUrl == "/" ? null : <Sidebar />}
        <Body>{props.children}</Body>
      </div>
    </Wrapper>
  );
}
