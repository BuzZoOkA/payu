import React from 'react';
import pageNotFound from '../../resources/images/pageNotFound.png';
import './pagenotfound.css';

export default function PageNotFound() {
  return (
    <div className='container'>
      <img src={pageNotFound}></img>
    </div>
  );
}
