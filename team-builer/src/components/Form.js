import React, { useState } from 'react'
import styled from "styled-components";

const Card = styled.div`
  background-color: lightblue;
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 10px auto;
`;


const Form = props=>{
const [member, setMember] = useState({
    name: '',
    image: '',
    email: '',
    role: ''
});

const changeHandler = e =>{
    setMember({...member, [e.target.name]: e.target.value})
}

const submitHandler = e =>{
    e.preventDefault()
    const newMate = {
        ...member,
        id: Date.now(),
        image: 'http://pngimg.com/uploads/wolverine/wolverine_PNG59.png'
    }
    props.addTeamMate(newMate)
    setMember(newMate)
}
    return (
        <Card>
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Member's Name</label>
                <input onChange={changeHandler} id="name" name="name" value={member.name} type="text" placeholder="Name"></input>
               
                <label htmlFor="email">Member's Email</label>
                <input onChange={changeHandler} id="email" name="email" value={member.email} type="text" placeholder="Email"></input>

                <label htmlFor="role">Member's Role</label>
                <input onChange={changeHandler} id="role" name="role" value={member.role} type="text" placeholder="Role"></input>
               
                <button type="submit">Add</button>
            </form>
        </div></Card>
    )
}
export default Form