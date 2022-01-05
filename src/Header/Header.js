import './Header.css';
import {Links} from "./Links/Links"
import { Box } from '@mui/system';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

export const Header = () => {
    return(
        <div className="formHeader">
                <Toolbar className='Header'>
                    <Grid container spacing={1}>
                        <Grid item xs={1} className="gridLogo">
                            <i className="fa fa-user"></i>
                        </Grid>
                        <Grid item xs={7}>  
                        </Grid>
                        <Grid item xs={4} className='gridButton'>
                            <Links/>
                        </Grid>
                    </Grid>
                </Toolbar>
        </div>
    );
}