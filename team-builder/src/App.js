import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';


function App() {
  const [teamMember,setTeamMember] = useState([
  ])

useEffect(() => {
  setTeamMember([{
    name: 'Amin',
    email: 'amin@gmail.com',
    role: 'backend'
  },
  {
    name: 'Kolade',
    email: 'kolade@gmail.com',
    role: 'backend bro'
  },
  {
    name: 'Alison',
    email: 'alison@gmail.com',
    role: 'full stack'
  },
  {
    name: 'Eoin',
    email: 'eoin@gmail.com',
    role: 'got a haircut'
  },
  {
    name: 'Rufai',
    email: 'rufai@gmail.com',
    role: 'front bro'
  }])
  
}, [])




  return (
    <div className="App">
      {teamMember.map(member => 
        <div className="member">
          <p>name: {member.name}</p>
          <p>email: {member.email}</p>
          <p>role: {member.role}</p>
        </div>
        )}
      <Form member={teamMember}/>
    </div>
  );
}

export default App;
