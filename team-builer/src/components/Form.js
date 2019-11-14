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

const FormContent = styled.div`

justify-content:space-between;
@media only screen 
  and (min-device-width: 500px) 
  and (max-device-width: 1400px)  {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
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

    props.addTeamMate(member)
    setMember(   
    {name: '',
    image: '',
    email: '',
    role: ''})
}


    return (
        <Card>
        <div>
            <form onSubmit={submitHandler}>
            <FormContent>
                <label style={{padding: "0 7px"}} htmlFor="name">Member's Name:</label>
                <input onChange={changeHandler} id="name" name="name" value={member.name} type="text" placeholder="Name"></input>
               
                <label style={{padding: "0 7px"}} htmlFor="email">Member's Email:</label>
                <input onChange={changeHandler} id="email" name="email" value={member.email} type="text" placeholder="Email"></input>

                <label style={{padding: "0 7px"}} htmlFor="role">Member's Role:</label>
                <input onChange={changeHandler} id="role" name="role" value={member.role} type="text" placeholder="Role"></input>

                <label style={{padding: "0 7px"}} htmlFor="role">Member's Image:</label>
                <input onChange={changeHandler} id="image" name="image" value={member.image} type="text" placeholder="Image"></input>
               
                <button style={{margin: "0 7px"}} type="submit">Add Member</button>
                </FormContent>
            </form>
        </div></Card>
    )
}
export default Form