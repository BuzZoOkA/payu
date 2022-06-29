import './homepage.css';
import React from 'react';
import sessionWrapper from '../../hoc/PageWrapper/sessionWrapper/sessionWrapper';
import PageWrapper from '../../hoc/PageWrapper/PageWrapper';

function HomePage(props) {
  return (
    <PageWrapper>
      <div className='homepage-container'>
        <div>Welcome </div>
        <div>{props?.user?.email}</div>
      </div>
    </PageWrapper>
  );
}

export default sessionWrapper(HomePage);
