"use client";

import { useRouter } from "next/navigation";

const inputStyle = "b";
export default function Create() {
  // Next.js에서 사용할 수 있는 리디렉션
  const router = useRouter();
  return (
    // onSumbit는 사용자와 상호작용할 때 발생
    // 그러니까 server 컴포넌트가 아님
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.push(`/read/${lastid}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input
          className="border-solid border-gray"
          type="text"
          name="title"
          placeholder="title"
        />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="CREATE" />
      </p>
    </form>
  );
}
