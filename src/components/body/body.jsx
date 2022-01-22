import './body.css'; 
import { TopField } from '../topField/topField';
import {RepoField} from '../repoField/repoField';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useRepos } from '../../hooks/useRepos';

export const Body = () => {
    const {repos, onError, load, fullRepo, useEffect} = useRepos();
    const [searchDataOut, setSearchDataOut] = useState('');

    
    return(
        <div className='formBodyFirst'>
        {(fullRepo && repos && !onError) &&
            (
                <div className="formBodySecond">
                    <TopField totRepos={repos.length} setSearchDataOut={setSearchDataOut}/>
                        <button className="updateButton" onClick={useEffect}>
                            <div></div>
                            <b className='reloadText'>Reload repos</b>
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
        {/* {load &&
            (
                <div className='divloading'>
                    <div className='divLoad'>
                        <CircularProgress className="iconWait" />
                    </div>             
                </div>
            )               
        } */}
        {onError &&
            <p>Error</p>
        }
        </div>
    );
}