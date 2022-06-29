import { auth } from '../../../firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { isEmpty } from 'lodash';

const sessionWrapper = (WrappedComponent) => (props) => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  if (isEmpty(user)) {
    return <div>Loading...</div>;
  }
  return <WrappedComponent {...props} user={user} setUser={setUser} />;
};
export default sessionWrapper;
