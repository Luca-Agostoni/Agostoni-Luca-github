import { HeaderField } from './components/headerField/headerField';
import './App.css';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from './context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  var {session, setSession} = useContext(UserContext);

  const value = {session, setSession};

  console.log(UserContext);

  const navigate = useNavigate();

  if (session === false) {
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
