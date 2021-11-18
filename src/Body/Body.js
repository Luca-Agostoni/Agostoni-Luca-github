import './Body.css'; 
import {Top} from './Top/Top';
import {TableUsers} from './TableUsers/TableUsers';
import { listRepos } from '../api/repos';
import { useEffect, useState } from 'react';


export const Body = () => {
    const [repos, setRepos] = useState(undefined);

    useEffect(() => {
        const populateRepos = async () => {
            setRepos(await listRepos());
        };
        populateRepos();
        
    }, [])

    const handleLoadClick = () => {
        const populateRepos = async () => {
            setRepos(await listRepos());
        };
        populateRepos();
    }

    return(
        <div>
        {repos &&
            (
                <div className="formBody">
                    <Top totRepos={repos.length}/>
                    <button onClick={() => handleLoadClick()}>Aggiorna repos</button>
                    <TableUsers dataRepositorie={repos}/>
                </div>
            )
        }
        {!repos &&
            (
                <p>
                    caricamento...
                </p>
            )
        }
        </div>
    );
}