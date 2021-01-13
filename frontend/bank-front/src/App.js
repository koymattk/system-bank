import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {fetchUserProfiles} from './api';

const UserProfile = () => {
  useEffect(() => {
    fetchUserProfiles().then(response => {
      console.log(response.data);
    }).catch(erro => console.log('error: ' + erro));
  }, [])

  return <h1>Hello</h1>;
}


function App() {
  return (
    <div >
      <UserProfile />
    </div>
  );
}

export default App;
