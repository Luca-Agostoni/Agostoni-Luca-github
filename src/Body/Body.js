import './Body.css'; 
import {Top} from './Top/Top';
import {TableUsers} from './TableUsers/TableUsers';
import { listRepos } from '../api/repos';
import { useState } from 'react';


export const Body = () => {
    const [repos, setRepos] = useState(listRepos());
    return(
        <div className="formBody">
            <Top totRepos={repos.length}/>
            <TableUsers dataRepositorie={repos}/>
        </div>
    );
}