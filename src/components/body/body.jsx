import './body.css'; 
import { TopField } from '../topField/topField';
import {RepoField} from '../repoField/repoField';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useRepos } from '../../hooks/useRepos';
import { useNavigate } from 'react-router-dom';
import { useLog } from '../../hooks/useLog';

export const Body = () => {
    const {repos, onError, load, useEffect} = useRepos();
    const [searchDataOut, setSearchDataOut] = useState('');

    let navigate = useNavigate();

    const { session, route } = useLog();

    useEffect(() => {
        const isLog = () => {
            if (session === false) {
                navigate(route);
            }
        }
        isLog();
    }, [navigate, session, route]);
    
    return(
        <div className='formBodyFirst'>
        {(!load && repos && !onError) &&
            (
                <div className="formBodySecond">
                    <TopField totRepos={repos.length} setSearchDataOut={setSearchDataOut}/>
                        <button className="updateButton" onClick={useEffect}>
                            <i className="fa fa-repeat"></i>
                        </button>
                        <RepoField repos={repos}  searchDataOut={searchDataOut} dataRepositorie={repos}/>
                </div>
            )
        }
        {(load && !onError) &&
            (
                <div className='divWait'>
                    <CircularProgress className="iconWait" />
                    <br></br>
                    <p className='textWait'><b>Wait a few moments...</b></p>
                </div>             
            )
        }
        {onError &&
            <p>Error</p>
        }
        </div>
    );
}
