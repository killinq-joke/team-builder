import React, { useState, useEffect } from 'react';


function Form(props) {
    const [data, setData] = useState({
        name: '',
        email: '',
        role: '',  
    })
    const [newTeamMember, setNewTeamMember] = useState({

    })
    

    // useEffect(() => {
    //     setNewTeamMember( ...props.member)
    // }, [])
    console.log(newTeamMember)

    function changeHandler(e) {
        setData({
            ...data,
          [e.target.name]: e.target.value
          })
          console.log(e.target.name)
    }
    
    function submitHandler(e) {
        e.preventDefault();
        const initialState = {
            name: '',
            email: '',
            role: '', 
        }
        setData(initialState);

    }
    
  
  return (
    <form onSubmit={submitHandler}>
        <label
         htmlFor="name">name</label>
        <input
         id="name"
         name="name"
         placeholder="name"
         value={data.name}
         onChange={changeHandler}></input>
        <label
         htmlFor="email">email</label>
        <input
         id="email"
         name="email"
         placeholder="email"
         value={data.email}
         onChange={changeHandler}></input>
        <label
         htmlFor="role">role</label>
        <input
         id="role"
         name="role"
         placeholder="role"
         value={data.role}
         onChange={changeHandler}></input>
         <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Form;
