import React from "react";

const TodoList = () => {
  return (
    <>
      <div>Todo</div>
      <div className="border-2 border-blue-700">
        <h1>제목</h1>
        <h3>내용</h3>
        <button className="border-2 border-blue-700 mr-3">완료</button>
        <button className="border-2 border-blue-700">삭제</button>
      </div>
    </>
  );
};

export default TodoList;
