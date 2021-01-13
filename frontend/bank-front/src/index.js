import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

ReactDOM.render(
  <React.StrictMode>
    <>
      <LoginPage/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


