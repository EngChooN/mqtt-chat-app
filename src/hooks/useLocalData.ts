import { useEffect, useState } from "react";

export default function useLocalData() {
  const [userName, setUserName] = useState("");
  const [userUrl, setUserUrl] = useState("172.30.1.20");
  // 집 172.30.1.4 회사 192.168.100.74
  const [userPort, setUserPort] = useState("9001");

  // 로컬스토리지에서 데이터를 가져옴
  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setUserUrl(localStorage.getItem("userurl"));
    setUserPort(localStorage.getItem("userport"));
  });

  return { userName, userUrl, userPort };
}
