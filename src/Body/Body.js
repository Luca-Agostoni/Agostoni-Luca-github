import './Body.css'; 
import {Top} from './Top/Top';
import {TableUsers} from './TableUsers/TableUsers';
import { listRepos } from '../api/repos';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

export const Body = () => {
    const [repos, setRepos] = useState(undefined);

    useEffect(() => {
        const populateRepos = async () => {
            setRepos(await listRepos());
        };
        populateRepos();
        
    }, [])
    const handleLoadClick = () => {
        // const populateRepos = async () => {
        //     setRepos(await listRepos());
        // };
        // populateRepos();
    }
    
    return(
        <div className='formBodyFirst'>
        {(repos)  &&
            (
                <div className="formBodySecond">
                    <Top totRepos={repos.length}/>
                        <button className="updateButton" onClick={() => handleLoadClick()}>
                            <b className='reloadText'>Reload</b>
                            <i className="fa fa-repeat"></i>
                        </button>
                    <TableUsers dataRepositorie={repos}/>
                </div>
            )
        }
        {(!repos) &&
            (
                <div className='divWait'>
                    <CircularProgress className="iconWait" />
                    <br></br>
                    <p className='textWait'><b>Wait a few moments...</b></p>
                </div>
                
            )
        }
        </div>
    );
}