import React, {useState, useEffect} from 'react';
import data from './data';
import MembersList from './components/MembersList';
import logo from './logo.svg';
import Form from './components/Form'
import './App.css';
import NavBar from "./components/NavBar"

function App() {
  const [members, setMembers] = useState([])

  useEffect(()=>{
    setMembers(data)
  }, [])

  const addTeamMate = mate=>{
      const newMate = setMembers([...members, mate ])
  }

  return (
 <div className="App">
      <NavBar />
      <Form addTeamMate={addTeamMate}/>
      {members.map(member=>{
        return <MembersList key={member.email} info={member} />
      })}
    </div>
  );
}

export default App;
