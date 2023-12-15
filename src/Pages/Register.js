// Register.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RegisterContainer = styled.div`
  width: 100%;
  height: 90vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const RegisterForm = styled.form`
  background: #fce3fe;
  padding: 60px;
  border-radius: 10px;
  width: 700px;
  text-align: center;
  font-size: 20px;
`;

const RegisterHeader = styled.div`
  margin-bottom: 30px;
  color: #ff4141;
`;

const RegisterInput = styled.input`
  font-size: 20px;
  margin-top: 10px;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RegisterButton = styled.button`
  margin-top: 20px;
  background: #ff4141;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
`;

const Register = () => {
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();
  const navigate = useNavigate();
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [email, setEmail] = useState();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('checkAccount', true);
    localStorage.setItem('AccountCurrent', JSON.stringify({ name, pwd, email }));   
    setRegisterSuccess(true);
  };

  const changeName = (e) => setName(e.target.value);
  const changePwd = (e) => setPwd(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value); 

  useEffect(() => {
    if (registerSuccess) {
      alert('Registration successful!');
      navigate('/login');
    }
  }, [registerSuccess, navigate]);

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterHeader>
          <h1>SIGN UP</h1>
        </RegisterHeader>
        <div>
          <label htmlFor="username">Username</label>
          <RegisterInput type="text" id="username" name="username" required onChange={changeName} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <RegisterInput type="email" id="email" name="email" required onChange={changeEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <RegisterInput type="password" id="password" name="password" required onChange={changePwd} />
        </div>
        <div>
          <RegisterButton type="submit">Sign up now</RegisterButton>
        </div>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
