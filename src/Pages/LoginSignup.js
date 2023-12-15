// Tạo file LoginSignup.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginSignupContainer = styled.div`
  width: 100%;
  height:80vh;
  align-items: center;
  
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.form`
  background: #fce3fe;
  padding: 60px;
  border-radius: 10px;
  width: 700px;
  text-align: center;
  font-size: 20px;
`;

const LoginHeader = styled.div`
  margin-bottom: 30px;
  color: #ff4141;
`;

const LoginInput = styled.input`
  font-size: 20px;
  margin-top: 10px;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  background: #ff4141;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
  position: ;
  animation: shake 1.5s ease infinite; 
`;

const LoginSignup = () => {
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false); 
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const accounts = JSON.parse(localStorage.getItem('Account'));

    if (accounts == null) return alert('Account does not exist');

    const accountExists = accounts.some((account) => account.name === name && account.pwd === pwd);

    if (accountExists) {
      setLoginSuccess(true); 
      alert('Login success!');
      localStorage.setItem('checkAccount', true);
      localStorage.setItem('AccountCurrent', JSON.stringify({ name, pwd }));    
    } else {
      alert('Account does not exist');
    }
  };

  const changeName = (e) => setName(e.target.value);
  const changePwd = (e) => setPwd(e.target.value);
  useEffect(() => {
    if (loginSuccess) {
      
      navigate('/men');
 
    }
  }, [loginSuccess, navigate]);

  return (
    <LoginSignupContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginHeader>
          <h1>SIGN IN</h1>
        </LoginHeader>
        <div>
          <label htmlFor="username">Username</label>
          <LoginInput type="text" id="username" name="use rname" required onChange={changeName} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <LoginInput type="password" id="password" name="password" required onChange={changePwd} />
        </div>
        <div>
          <LoginButton type="submit">Sign in now</LoginButton>
        </div>
      </LoginForm>
    </LoginSignupContainer>
  );
};

export default LoginSignup;
