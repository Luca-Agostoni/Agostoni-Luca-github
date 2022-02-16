import { HeaderField } from './components/headerField/headerField';
import './App.css';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from './context/userContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  const [session, setSession] = useState({session: true});

  const value = {session, setSession};

  const navigate = useNavigate();

  if (!session.session) {
    navigate('/login');
  }

  return (
    <UserContext.Provider value={value}>
      <div className="App">
        <HeaderField/>
        <Outlet/>
      </div>
    </UserContext.Provider>
  );
}
export default App;
