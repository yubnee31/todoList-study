import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitForm}>
      <label className="mr-2">제목</label>
      <input
        className="border-2 border-blue-700 mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label className="mr-2">내용</label>
      <input
        className="border-2 border-blue-700 mr-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button className="border-2 border-blue-700">submit</button>
    </form>
  );
};

export default Input;
