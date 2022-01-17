import './Body.css'; 
import {Top} from './Top/Top';
import {TableUsers} from './TableUsers/TableUsers';
import { listRepos } from '../api/repos';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useRepos } from '../hooks/useRepos';

export const Body = () => {
    const {repos, setRepos, onError} = useRepos();
    const [load, setLoad] = useState(false);
    const [searchDataOut, setSearchDataOut] = useState('');

    const handleLoadClick = () => {
        const populateRepos = async () => {
            setLoad(listRepos());
            setLoad(load)
        };
        populateRepos();
    }
    
    return(
        <div className='formBodyFirst'>
        {(repos && !onError) &&
            (
                <div className="formBodySecond">
                    <Top totRepos={repos.length} setSearchDataOut={setSearchDataOut}/>
                        <button className="updateButton" onClick={() => handleLoadClick()}>
                            <div></div>
                            <b className='reloadText'>Reload repos</b>
                            <i className="fa fa-repeat"></i>
                        </button>
                        <TableUsers repos={repos}  searchDataOut={searchDataOut} dataRepositorie={repos}/>
                </div>
            )
        }
        {!repos &&
            (
                <div className='divWait'>
                    <CircularProgress className="iconWait" />
                    <br></br>
                    <p className='textWait'><b>Wait a few moments...</b></p>
                </div>             
            )
        }
        {load &&
            (
                <div className='divloading'>
                    <div className='divLoad'>
                        <CircularProgress className="iconWait" />
                    </div>             
                </div>
            )               
        }
        {onError &&
            <p>Error</p>
        }
        </div>
    );
}