import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("에러가 없습니다");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    console.log(email);
    console.log(password);

    if (email.includes("@") === false) {
      setEmailError("@가 없음");
    } else {
      alert("회원가입 성공");
    }
  }
  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
