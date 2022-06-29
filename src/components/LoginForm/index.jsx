import { useNavigate, Link } from 'react-router-dom';
import './loginform.css';
import payU_logo from '../../resources/images/payU_logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase_config';
import ButtonWithText from '../ButtonWithText';

const LoginForm = (props) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [error, setError] = useState('');
  const [registerPwd, setRegisterPwd] = useState('');

  let navigate = useNavigate();
  const LoginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPwd
      );
      navigate(`homepage`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src={payU_logo}></img>
        <div>Sign in to PayU</div>
      </div>
      <div className='email-container'>
        <label>Username or email address</label>
        <input
          type={'email'}
          required
          placeholder='Enter email'
          onChange={(evt) => {
            setRegisterEmail(evt.target.value);
          }}
        ></input>
      </div>
      <div className='pwd-container'>
        <label>Password</label>
        <input
          required
          type={'password'}
          placeholder='Enter password'
          onChange={(evt) => {
            setRegisterPwd(evt.target.value);
          }}
        ></input>
      </div>
      <div className='error-container'>{error}</div>
      <ButtonWithText
        text={'Sign in'}
        onClick={() => {
          LoginUser();
        }}
      />
      <div className='new-user'>
        New user?
        <a
          onClick={() => {
            navigate(`register`);
          }}
        >
          Register here.
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
