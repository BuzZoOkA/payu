import './pagewrapper.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase_config';
import { signOut } from 'firebase/auth';
import ButtonWithText from '../../components/ButtonWithText';

const PageWrapper = (wrappedComponent) => {
  let navigate = useNavigate();
  const logoutUser = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div>
      <header>
        <ButtonWithText
          text={'Sign out'}
          onClick={() => {
            logoutUser();
          }}
        />
      </header>
      <main>{wrappedComponent.children}</main>
      <footer>
        <a> Terms </a>
        <a> Privacy </a>
        <a> Security </a>
        <a> Contact us </a>
      </footer>
    </div>
  );
};

export default PageWrapper;
