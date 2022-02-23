import { HeaderField } from './components/headerField/headerField';
import './App.css';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from './context/userContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

function App() {

  var {session, setSession } = useContext(UserContext);
  
  const navigate = useNavigate();

  if (session === false) {
    navigate('/login');
  }

  return (
    <UserContext.Provider value={{session, setSession}}>
      <div className="App">
        <HeaderField/>
        <Outlet/>
      </div>
    </UserContext.Provider>
  );
}
export default App;
