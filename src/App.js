import {Header} from './Header/Header';
import './App.css';
import * as React from 'react';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}
export default App;
