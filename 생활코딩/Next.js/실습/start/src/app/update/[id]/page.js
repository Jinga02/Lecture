"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Update() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const updateTopic = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };
    fetch(`http://localhost:9999/topics/${id}`, options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const lastid = result.id;
        router.push(`/read/${lastid}`);
        router.refresh();
      });
  };

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.title);
        setBody(res.body);
      });
  }, []);
  return (
    <form onSubmit={(e) => updateTopic(e)}>
      <p>
        <input
          className="border-solid border-gray"
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="UPDATE" />
      </p>
    </form>
  );
}
