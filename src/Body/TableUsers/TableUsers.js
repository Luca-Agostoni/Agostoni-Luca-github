import './TableUsers.css';
import { RepoRows } from './RepoRows/RepoRows';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';

export const TableUsers = (props) => {
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
                    props.dataRepositorie.map(
                        repos => (
                            <RepoRows 
                                name={repos.name} 
                                surname={repos.surname} 
                                login={repos.login} 
                                repoName={repos.repoName} 
                                link={repos.link}
                                creationDate={repos.creationDate}
                                lastUpdate={repos.lastUpdate}
                                key={repos.link}
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
                    props.dataRepositorie.map(
                        repos => (
                            <RepoRows 
                                name={repos.name} 
                                surname={repos.surname} 
                                login={repos.login} 
                                repoName={repos.repoName} 
                                link={repos.link}
                                creationDate={repos.creationDate}
                                lastUpdate={repos.lastUpdate}
                                key={repos.link}
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