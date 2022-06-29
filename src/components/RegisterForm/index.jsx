import './registrationForm.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import EmailPwdComponent from '../EmailPwdComponent';
import { useState } from 'react';
import { auth } from '../../firebase_config';
import ButtonWithText from '../ButtonWithText';

const RegisterForm = (props) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPwd, setRegisterPwd] = useState('');
  const [error, setError] = useState('');

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
      setError(error.message);
    }
  };
  const onEmailChange = (evt) => {
    setRegisterEmail(evt.target.value);
  };

  const onPwdChange = (evt) => {
    setRegisterPwd(evt.target.value);
  };
  console.log('Register Form');
  return (
    <div className='login-container'>
      <EmailPwdComponent
        imageFooter={'Register with PayU'}
        emailLabel={'Username or email address'}
        onEmailChange={onEmailChange}
        pwdLabel={'Password'}
        onPwdChange={onPwdChange}
        error={error}
      />
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
