import { HeaderField } from './components/headerField/headerField';
import './App.css';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from './context/userContext';
import { useContext } from 'react';

function App() {

  const { user , setUser } = useContext(UserContext);

  return (
    <UserContext.Provider value={{user , setUser}}>
      <div className="App">
        <HeaderField/>
        <Outlet/>
      </div>
    </UserContext.Provider>
  );
}
export default App;
