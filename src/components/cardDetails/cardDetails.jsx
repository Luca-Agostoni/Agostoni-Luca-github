import './cardDetails.css';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';
import { DateTime } from 'luxon';


export const CardDetails = (props) => {
    function changeDate (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLL yyyy');
        return result;
    }
    return(
        <div className="cardDetails">
           <Toolbar className='cardDetailsTable'>
                <Grid container columns={16}>
                    <Grid item xs={6} className='cardDetailsColonumLeft'> 
                        <p>Surname</p>
                    </Grid>
                    <Grid item xs={2} className='cardDetailsColonumLeft'> 
                        <b><p>:</p></b>
                    </Grid>
                    <Grid item xs={8}>
                        <p><b>{props.surname}</b></p> 
                    </Grid>
                </Grid>
            </Toolbar>    
            <Toolbar className='cardDetailsTable'>
                <Grid container columns={16}>
                    <Grid item xs={6} className='cardDetailsColonumLeft'> 
                        <p>Name</p>
                    </Grid>
                    <Grid item xs={2} className='cardDetailsColonumLeft'> 
                        <b><p>:</p></b>
                    </Grid>
                    <Grid item xs={8}>
                        <p><b>{props.name}</b></p> 
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar className='cardDetailsTable'>
                <Grid container columns={16}>
                    <Grid item xs={6} className='cardDetailsColonumLeft'> 
                        <p>Login</p>
                    </Grid>
                    <Grid item xs={2} className='cardDetailsColonumLeft'> 
                        <b><p>:</p></b>
                    </Grid>
                    <Grid item xs={8}> 
                        <p><b>{props.login}</b></p>
                    </Grid>
                </Grid>
            </Toolbar>    
            <Toolbar className='cardDetailsTable'>
                <Grid container columns={16}>
                    <Grid item xs={6} className='cardDetailsColonumLeft'> 
                        <p>Link</p>
                    </Grid>
                    <Grid item xs={2} className='cardDetailsColonumLeft'> 
                        <b><p>:</p></b>
                    </Grid>
                    <Grid item xs={8} className='repoTableGridLinkPhone'>
                                <a href={props.link}>
                                    <button className='buttonLinkRepoGit'>
                                        <i className="fa fa-github"></i>
                                    </button>
                                </a>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='cardDetailsTable'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='cardDetailsColonumLeft'> 
                            <p>Commits</p>
                        </Grid>
                        <Grid item xs={2} className='cardDetailsColonumLeft'> 
                        <b><p>:</p></b>
                        </Grid>
                        <Grid item xs={8}>
                            <p><b>4</b></p>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='cardDetailsTable'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='cardDetailsColonumLeft'> 
                            <p>Creation Date</p>
                        </Grid>
                        <Grid item xs={2} className='cardDetailsColonumLeft'> 
                            <b><p>:</p></b>
                        </Grid>
                        <Grid item xs={8}>
                            <p><b>{changeDate(props.creationDate)}</b></p>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='cardDetailsTable'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='cardDetailsColonumLeft'> 
                            <p>Last Update</p>
                        </Grid>
                        <Grid item xs={2} className='cardDetailsColonumLeft'> 
                            <b><p>:</p></b>
                        </Grid>
                        <Grid item xs={8}> 
                        <p><b>{changeDate(props.lastUpdate)}</b></p>   
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='cardDetailsTable'>
                    <Grid container columns={16}>
                    </Grid>
                </Toolbar>
            </div>
    );
}