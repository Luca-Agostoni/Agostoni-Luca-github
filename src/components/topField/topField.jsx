import './topField.css';
import {TotRepos} from '../totRepos/totRepos';
import {Selection} from '../selection/selection';
import {SearchField} from '../searchField/searchField';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material'; 

export const TopField = (props) => {
    return(
        <div className="formTop">
             <Toolbar className='Top'>
                <Grid container spacing={1}>
                    <Grid item xs={4} className='Top1'>
                        <TotRepos totRepos={props.totRepos}/> 
                    </Grid>
                    <Grid item xs={4} className='Top2'>
                        <Selection/>
                    </Grid>
                    <Grid item xs={4} className='Top3'>
                        <SearchField setSearchDataOut={props.setSearchDataOut}/>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar className='topPhone'>
                <Grid container spacing={1}>
                    <Grid item xs={12} className='topPhoneLevel'>
                        <SearchField/>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar className='topPhone'>
                <Grid container spacing={1}>
                    <Grid item xs={12} className='topPhoneLevel'>
                        <Selection/>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar className='topPhone'>
                <Grid container spacing={1}>
                    <Grid item xs={12} className='topPhoneLevel'>
                        <TotRepos totRepos={props.totRepos}/> 
                    </Grid>
                </Grid>
            </Toolbar>
        </div>
    );
}