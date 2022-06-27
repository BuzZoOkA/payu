import { useNavigate, Link } from 'react-router-dom';
import './loginform.css';
import payU_logo from '../../resources/images/payU_logo.png';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase_config';

const LoginForm = (props) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPwd, setRegisterPwd] = useState('');
  const [registration, setRegistration] = useState(false);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPwd
      );
      console.log('🚀 ~ file: index.jsx ~ line 16 ~ registerUser ~ user', user);
      setUser(user);
    } catch (error) {
      console.log('Error:', error?.message);
    }
  };

  const registerComponent = () => {};

  const loginComponent = () => {};

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPwd
      );
      console.log('🚀 ~ file: index.jsx ~ line 16 ~ registerUser ~ user', user);
      setUser(user);
    } catch (error) {
      console.log('Error:', error?.message);
    }
  };

  const logoutUser = () => {};

  let navigate = useNavigate();
  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src={payU_logo}></img>
        <div>{registration ? 'Register with PayU' : 'Sign in to PayU'}</div>
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
      <button
        onClick={() => {
          registration ? registerUser() : loginUser();
          navigate(`homepage`, { state: user });
        }}
      >
        {registration ? 'Register' : 'Sign in'}
      </button>
      {registration && (
        <div className='new-user'>
          <a
            onClick={() => {
              setRegistration((registration) => !registration);
            }}
          >
            {' '}
            Back to login
          </a>
        </div>
      )}
      {!registration && (
        <div className='new-user'>
          New user?
          <a
            onClick={() => {
              setRegistration((registration) => !registration);
            }}
          >
            {' '}
            Register here.
          </a>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
