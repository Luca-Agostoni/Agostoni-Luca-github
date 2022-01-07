import './Header.css';
import {Links} from "./Links/Links"
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

export const Header = () => {
    return(
        <div className="formHeader">
                <Toolbar className='Header'>
                    <Grid container spacing={1}>
                        <Grid item xs={1} className="gridLogo">
                            <i className="fa fa-github-square"></i>
                        </Grid>
                        <Grid item xs={7}>  
                        </Grid>
                        <Grid item xs={4} className='gridButton'>
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
    );
}