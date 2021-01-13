import React, {useEffect, useState} from 'react';
import {fetchUserProfiles} from '../src/Services/api';
import CardsClients from '../src/Components/CardsClients/index'




function App() {

  const[client, setClient] = useState([])
  
    useEffect(() => {
      fetchUserProfiles().then(response => {
        setClient(response.data);
      }).catch(erro => console.log('error: ' + erro));
    }, [])
  


  return (
    <div >
      
      {
        client.map(c => ( 
          <CardsClients name={c.name}/>
        ))
      }
      
    </div>
  );
}

export default App;