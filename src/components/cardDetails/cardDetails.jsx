import './cardDetails.css';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';
import { useCommits } from '../../hooks/useCommits';
import { CircularProgress } from '@mui/material';
import React from 'react';
import { DetailsContent } from '../detailsContent/detailsContent';

export const CardDetails = (props) => {
    const {commits, loadCommits} = useCommits(props.login, props.repoName);
    
    return(
        <>
        <div className="cardDetails">
            { !loadCommits &&
                (
                    <>
                    <Toolbar className='cardDetailsTableHead'>
                            <Grid container columns={16}>
                                <Grid item xs={16}>
                                    <p><i className="fa fa-dot-circle-o"></i><b>{props.repoName}</b><i className="fa fa-dot-circle-o"></i></p> 
                                </Grid>
                            </Grid>
                    </Toolbar>
                    <div className='cardDetailsContent'>
                    {
                        commits.map(commit => (
                                    <DetailsContent
                                        date={commit.committer.date}
                                        name={commit.committer.name}
                                        email={commit.committer.email}
                                        message={commit.message}
                                        key={commit.committer.date}
                                    />
                                )
                            )  
                    } 
                    </div>
                    <Toolbar className='cardDetailsTableFinal'>
                        <Grid container columns={16}>
                        </Grid>
                    </Toolbar>
                    </>
                )
            }
        </div>
        { loadCommits &&
            (
                <Toolbar>
                        <Grid container columns={16}>
                            <Grid item xs={16}  className='loadingGrid'>
                                <div className='divWaitCommits'>
                                    <CircularProgress className="iconWait" />
                                    <br></br>
                                    <p className='textWait'><b>Loading...</b></p>
                                </div>    
                            </Grid>
                        </Grid>
                </Toolbar>         
            )
        }
        </>
    );
}