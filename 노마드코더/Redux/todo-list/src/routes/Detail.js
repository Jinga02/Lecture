import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <>
      <h1>toDo : {toDo?.text}</h1>
      <h2>Created at: {toDo?.id}</h2>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
