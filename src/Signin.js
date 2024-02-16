import React, { useState } from 'react';
import logo from './img/logo.png';
import './Signin.css';

export default function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // 로그인 처리 로직을 여기에 추가하세요.

    // 예시: 아래는 간단한 출력 예시입니다.
    console.log("Email:", Email);
    console.log("Password:", Password);
  };

  return (
    <div>
      <Logo />
      <div className='fooridge'>
      <h2>FOORIDGE</h2>
      </div>
      <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
        <div className="input">
            <input type='email' value={Email} onChange={onEmailHandler} placeholder="Email" />
            <input type='password' value={Password} onChange={onPasswordHandler} placeholder="비밀번호" />
        </div>
        <br />
        <div className="loginbutton">
         <button className='login' type='submit'>로그인</button>
        </div>
      </form>
    </div>
  );
}

function Logo() {
  return (
    <div className='Logo'>
      <img src={logo} alt="FOORIDGE Logo" />
    </div>
  );
}
