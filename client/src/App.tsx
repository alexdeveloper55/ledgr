import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from './ApiService';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [userId, setUserId] = useState(0)
  const [username, setUsername] = useState("")

  // userId = 8 is hard coded so that I have a working app. Need to update for user login
  useEffect((userId = 1) => {

    ApiService.getUserById(userId)
      .then(user => {
        console.log("hopefully getting username");
        console.log(user);
        setUsername(user.username);
        setUserId(user.id);
      });
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar username={username}/>
        <Dashboard userId={userId}/>
      </header>
    </div>
  );
}

export default App;