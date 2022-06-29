import { useNavigate, Link } from 'react-router-dom';
import './loginform.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase_config';
import ButtonWithText from '../ButtonWithText';
import EmailPwdComponent from '../EmailPwdComponent';

const LoginForm = (props) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [error, setError] = useState('');
  const [loginPwd, setLoginPwd] = useState('');

  let navigate = useNavigate();
  const LoginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPwd);
      navigate(`homepage`);
    } catch (error) {
      setError(error.message);
    }
  };
  const onEmailChange = (evt) => {
    setLoginEmail(evt.target.value);
  };

  const onChangePwd = (evt) => {
    setLoginPwd(evt.target.value);
  };
  console.log('Login Form');
  return (
    <div className='login-container'>
      <EmailPwdComponent
        imageFooter={'Sign in to PayU'}
        emailLabel={'Username or email address'}
        onEmailChange={onEmailChange}
        pwdLabel={'Password'}
        onPwdChange={onChangePwd}
        error={error}
      />
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
