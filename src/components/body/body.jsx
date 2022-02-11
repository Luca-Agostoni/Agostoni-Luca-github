import './body.css'; 
import { TopField } from '../topField/topField';
import {RepoField} from '../repoField/repoField';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useRepos } from '../../hooks/useRepos';

export const Body = () => {
    const {repos, onError, load, useEffect} = useRepos();
    const [searchDataOut, setSearchDataOut] = useState('');

    
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

// PROVIDER
// creare una cartella context con il file omonimo; 
// verificare il login in App.js; 
// inizializzare variabile user con il mock apposito (name, email, session);
// settare il provider con la variabile di stato
// leggere variabile in ogni pagina user dal context e se session vale false, meseguire un navigate su login