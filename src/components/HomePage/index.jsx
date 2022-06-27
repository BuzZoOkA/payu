import React from 'react';
import { auth } from '../../firebase_config';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const state = useLocation();
  console.log('state are', state);
  return <div>{auth?.currentUser?.email}</div>;
}
