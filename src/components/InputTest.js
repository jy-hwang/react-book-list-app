import React, { useState, useRef } from "react";

const InputTest = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;
  const [text, setText] = useState("");
  // const onChange = (e) => {
  //   setText(e.target.value);
  // };

  const onChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    // const nextInputs = { ...inputs};
    setInputs({
      ...inputs,
      [name]: value, //nextInputs[name] = value
    });
  };

  // const onReset = (e) => {
  //   setText("");
  // };

  const onReset = (e) => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={text}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        이름 (닉네임)
        {text}
      </div>
    </div>
  );
};

export default InputTest;
