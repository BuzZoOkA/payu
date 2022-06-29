import './emailpwdcomponent.css';
import payU_logo from '../../resources/images/payU_logo.png';
const EmailPwdComponent = (props) => {
  console.log('EmailPwdComponent');
  return (
    <div>
      <div className='image-container'>
        <img src={payU_logo}></img>
        <div>{props.imageFooter}</div>
      </div>
      <div className='email-container'>
        <label>{props.emailLabel}</label>
        <input
          type={'email'}
          required
          placeholder='Enter email'
          onChange={(evt) => props.onEmailChange(evt)}
        ></input>
      </div>
      <div className='pwd-container'>
        <label>{props.pwdLabel}</label>
        <input
          required
          type={'password'}
          placeholder='Enter password'
          onChange={(evt) => props.onPwdChange(evt)}
        ></input>
      </div>
      {props?.error && <div className='error-container'>{props.error}</div>}
    </div>
  );
};

export default EmailPwdComponent;
