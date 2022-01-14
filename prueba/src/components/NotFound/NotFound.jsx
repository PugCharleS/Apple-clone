import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

  let navigate = useNavigate();

  return (
    <div className='error-container'>
      <h1 className='error-text'>404 Page Not Found</h1>
      <button className='return-button' onClick={() => {
        navigate('/');
      }}>Return To Home Page</button>
    </div>
  )
}

export default NotFound;
