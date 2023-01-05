import { useRouter } from "next/router";

export default function useRoomName() {
  const router = useRouter();
  const roomName = router.query;

  return { roomName };
}
