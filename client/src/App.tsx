import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from './ApiService';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [userId, setUserId] = useState(0)
  const [username, setUsername] = useState("")

  // userId = 1 is hard coded so that I have a working app. Need to update for user login
  /* JESS - Api calls from within a useEffect can sometimes cause unexpected problems - useEffect 
  will render components before calling functions, so a lot of the time a page will render
  with the default values passed to the useState. So here, if you keep setting userId to 0, 
  this is why (if not, never mind 😅 ).*/
  useEffect((userId = 1) => {

    ApiService.getUserById(userId)
      .then(user => {
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