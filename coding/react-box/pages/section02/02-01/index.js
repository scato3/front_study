import { useState } from "react";

export default function hi() {
  const [hi, setHi] = useState("안녕하세요");
  const [count, setCount] = useState(0);

  function hello() {
    setHi("반갑습니다");
  }

  function countUp() {
    setCount(count + 1);
  }

  return (
    <>
      <div>{hi}</div>
      <button onClick={hello}>눌러요</button>

      <div>{count}</div>
      <button onClick={countUp}>눌러요</button>
    </>
  );
}
