import './registrationForm.css';
import { useNavigate } from 'react-router-dom';
import payU_logo from '../../resources/images/payU_logo.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase_config';
import ButtonWithText from '../ButtonWithText';

const RegisterForm = (props) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPwd, setRegisterPwd] = useState('');

  let navigate = useNavigate();
  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPwd
      );
      navigate(`/homepage`);
    } catch (error) {
      console.log('Error:', error?.message);
    }
  };
  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src={payU_logo}></img>
        <div>Register with PayU</div>
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
        />
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
        />
      </div>
      <ButtonWithText
        text={'Register'}
        onClick={() => {
          registerUser();
        }}
      />
      <div className='new-user'>
        <a
          onClick={() => {
            navigate(`/`);
          }}
        >
          Back to login
        </a>
      </div>
    </div>
  );
};

export default RegisterForm;
