import React, { useState, useEffect } from 'react';


function Form(props) {
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
    const [newTeamMember, setNewTeamMember] = useState({
        name: '',
        email: '',
        role: '', 
    })
    

    // useEffect(() => {
    //     setNewTeamMember( ...props.member)
    // }, [])
    console.log(newTeamMember)

    function changeHandler(e) {
        setNewTeamMember({
            ...newTeamMember,
          [e.target.name]: e.target.value
          })
        //   console.log(e.target.name)
    }
    
    function submitHandler(e) {
        e.preventDefault();
        const initialState = {
            name: '',
            email: '',
            role: '', 
        }
        teamMember.push(newTeamMember);
        setNewTeamMember(initialState);

    }
    
  
  return (
      <div>
        {teamMember.map(member => 
        <div className="member">
          <p>name: {member.name}</p>
          <p>email: {member.email}</p>
          <p>role: {member.role}</p>
        </div>
        )}
    <form onSubmit={submitHandler}>
        <label
         htmlFor="name">name</label>
        <input
         id="name"
         name="name"
         placeholder="name"
         value={newTeamMember.name}
         onChange={changeHandler}></input>
        <label
         htmlFor="email">email</label>
        <input
         id="email"
         name="email"
         placeholder="email"
         value={newTeamMember.email}
         onChange={changeHandler}></input>
        <label
         htmlFor="role">role</label>
        <input
         id="role"
         name="role"
         placeholder="role"
         value={newTeamMember.role}
         onChange={changeHandler}></input>
         <button type="submit">SUBMIT</button>
    </form>
    </div>
  );
}

export default Form;
