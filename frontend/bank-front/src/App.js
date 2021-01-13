import React, { useState, useEffect} from 'react';
import axios from 'axios';


const UserProfile = () => {
  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/clients/5ffe54ddd0a1f67b5343fdf3").then( res => {
      console.log(res)
    })
  }
  useEffect(() => {
    fetchUserProfiles();
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
