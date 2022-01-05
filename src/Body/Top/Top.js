import './Top.css';
import {TotRepos} from './TotRepos/TotRepos';
import {Selection} from './Selection/Selection';
import {SearchField} from './SearchField/SearchField';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

export const Top = (props) => {
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
                        <SearchField/>
                    </Grid>
                </Grid>
            </Toolbar>
        </div>
    );
}