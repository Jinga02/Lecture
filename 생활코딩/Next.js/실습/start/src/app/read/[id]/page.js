export default async function Read(props) {
  // 이 페이지는 사용자와 상호작용하지 않는다
  // 읽어서 출력할 뿐
  // 이런 컴포넌트는 서버 컴포넌트로하면 된다
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-store",
  });
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
