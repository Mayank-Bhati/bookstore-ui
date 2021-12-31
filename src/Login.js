import {useState, useEffect} from 'react';
import './Login.css';

function Login(login) {
  function handleSubmit(){
  }
  return (
  <div id="login">
  <div id="loginContent">
    <div>Username:</div>
    <div><input type="text"/></div>
    <div>Password:</div>
    <div><input type="password"/></div>
    <div className="loginButton"><input type="submit" value="Submit" onClick={handleSubmit}/></div>
    </div>
  </div>
  );
}

export default Login;
