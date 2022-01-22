import { HeaderField } from './components/headerField/headerField';
import './App.css';
import * as React from 'react';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HeaderField/>
      <Outlet/>
    </div>
  );
}
export default App;
