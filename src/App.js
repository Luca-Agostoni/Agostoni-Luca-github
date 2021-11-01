import {Header} from './Header/Header';
import {Body} from './Body/Body';
import {useState} from 'react';
import {listRepos} from './api/repos'
import './App.css';

function App() {
  const [repos] = useState(listRepos()); 
  /*
  console.log(repos.repositories);
  console.log(repos.users);
  */
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
