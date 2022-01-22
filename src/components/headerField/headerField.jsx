import './headerField.css';
import {Links} from "../links/links"
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

export const HeaderField = () => {
    return(
        <div className="formHeader">
            <div className='divHeader'>
                <Toolbar className='Header'>
                    <Grid container spacing={1}>
                        <Grid item xs={1} className="gridLogo">
                            <i className="fa fa-github-square"></i>
                        </Grid>
                        <Grid item xs={4}>  
                        </Grid>
                        <Grid item xs={7} className='gridButton'>
                            <Links/>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='headerPhone'>
                    <Grid container spacing={1}>
                        <Grid item className="gridLogo" xs={12}>
                            <i className="fa fa-github-square"></i>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='headerPhone'>
                    <Grid container spacing={1}>
                        <Grid item className='gridButton' xs={12}>
                            <Links/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </div>
        </div>
    );
}