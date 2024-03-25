import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitForm}>
      <label>제목</label>
      <input
        className="border-2 border-blue-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label>내용</label>
      <input
        className="border-2 border-blue-700"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button className="border-2 border-blue-700">submit</button>
    </form>
  );
};

export default Input;
