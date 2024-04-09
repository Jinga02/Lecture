import { redirect } from "next/navigation";

export default function Login(): void {
  // 트위터에서 이렇게 동작함 이유는 모름 ㅋ
  // /login 갔다가 바로 i/flow/login으로 감
  redirect("/i/flow/login");
}
