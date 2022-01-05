import './TableUsers.css';
import { RepoRows } from './RepoRows/RepoRows';
import { Table } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';

export const TableUsers = (props) => {
    return(
        <div className="formTable">
                <Toolbar className='headTable'>
                    <Grid container columns={16}>
                        <Grid item xs={2} className='headTableGrid'>
                            Surname 
                        </Grid>
                        <Grid item xs={2} className='headTableGrid'>
                            Name 
                        </Grid>
                        <Grid item xs={2} className='headTableGrid'> 
                            Login
                        </Grid>
                        <Grid item xs={2} className='headTableGrid'>
                            Link 
                        </Grid>
                        <Grid item xs={1} className='headTableGrid'>
                            Commits
                        </Grid>
                        <Grid item xs={3} className='headTableGrid'> 
                            Creation Data
                        </Grid>
                        <Grid item xs={3} className='headTableGrid'> 
                            Last Update
                        </Grid>
                        <Grid item xs={1} className='headTableGrid'> 
                            Details
                        </Grid>
                    </Grid>
                </Toolbar>
                {/* <Table>
                    <TableRow className='headTable'>
                        <TableCell>Surname</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Login</TableCell>
                        <TableCell>Link</TableCell>
                        <TableCell>Commits</TableCell>
                        <TableCell>Creation Date</TableCell>
                        <TableCell>Last Update</TableCell>
                        <TableCell>Details</TableCell>
                    </TableRow>
                </Table> */}
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
        </div>
    );
}