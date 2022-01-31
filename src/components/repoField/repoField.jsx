import './repoField.css';
import { RepoData } from '../repoData/repoData';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';
import * as React from 'react';

export const RepoField = (props) => {
    const searchDataOut = props.searchDataOut;
    const repos = props.repos;
    return(
        <>
        <div className="formTablePhone">
                <Toolbar className='headTable'>
                    <Grid container columns={16}>
                        <Grid item xs={10} className='headTableGrid'>
                            Repositorie 
                        </Grid>
                        <Grid item xs={6} className='headTableGrid'>
                            Info
                        </Grid>
                    </Grid>
                </Toolbar>
                {
                    repos.filter(repo=>
                    (repo.repoName.includes(searchDataOut))
                    ).map(repo => (
                            <RepoData 
                                name={repo.name} 
                                surname={repo.surname} 
                                login={repo.login} 
                                repoName={repo.repoName} 
                                link={repo.link}
                                creationDate={repo.creationDate}
                                lastUpdate={repo.lastUpdate}
                                key={repo.link}
                            />
                        )
                    )
                }
                <Toolbar className='tailTable'>
                    <Grid container columns={16}>
                    </Grid>
                </Toolbar>
        </div>
        <div className="formTable">
                <Toolbar className='headTable'>
                    <Grid container columns={30}>
                        <Grid item xs={3} className='headTableGrid'>
                            Surname 
                        </Grid>
                        <Grid item xs={3} className='headTableGrid'>
                            Name 
                        </Grid>
                        <Grid item xs={5} className='headTableGrid'> 
                            Login
                        </Grid>
                        <Grid item xs={6} className='headTableGrid'>
                            Link 
                        </Grid>
                        <Grid item xs={3} className='headTableGrid'>
                            Commits
                        </Grid>
                        <Grid item xs={4} className='headTableGrid'> 
                            Creation Data
                        </Grid>
                        <Grid item xs={4} className='headTableGrid'> 
                            Last Update
                        </Grid>
                        <Grid item xs={2} className='headTableGrid'> 
                            Details
                        </Grid>
                    </Grid>
                </Toolbar>
                {
                    repos.filter(repo=>(repo.surname.includes(searchDataOut)) || 
                                (repo.name.includes(searchDataOut)) || 
                                (repo.login.includes(searchDataOut)) || 
                                (repo.repoName.includes(searchDataOut))
                                ).map(repo => (
                            <RepoData 
                                name={repo.name} 
                                surname={repo.surname} 
                                login={repo.login} 
                                repoName={repo.repoName} 
                                link={repo.link}
                                creationDate={repo.creationDate}
                                lastUpdate={repo.lastUpdate}
                                key={repo.link}
                            />
                        )
                    )
                }
                <Toolbar className='tailTable'>
                    <Grid container columns={16}>
                    </Grid>
                </Toolbar>
        </div>
        </>
    );
}
// {
//     repos.filter(repo=>
//     (repo.repoName.includes(searchDataPhone))
//     ).map(repo => (
//             <RepoData 
//                 name={repo.name} 
//                 surname={repo.surname} 
//                 login={repo.login} 
//                 repoName={repo.repoName} 
//                 link={repo.link}
//                 creationDate={repo.creationDate}
//                 lastUpdate={repo.lastUpdate}
//                 key={repo.link}
//             />
//         )
//     )
// }