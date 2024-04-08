"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const ulStyle = "flex font-semibold";
const liStyle = "mx-2";

export default function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const deleteTopic = () => {
    const options = { method: "DELETE" };
    fetch(`http://localhost:9999/topics/${id}`, options)
      .then((res) => res.json())
      .then(() => {
        router.push("/");
        router.refresh();
      });
  };
  return (
    <ul className={ulStyle}>
      <li className={liStyle}>
        <Link href="/create">CREATE</Link>
      </li>
      {id && (
        <>
          <li className={liStyle}>
            <Link href={`/update/${id}`}>UPDATE</Link>
          </li>
          <li className={liStyle}>
            <input type="button" value="DELETE" onClick={() => deleteTopic()} />
          </li>
        </>
      )}
    </ul>
  );
}
