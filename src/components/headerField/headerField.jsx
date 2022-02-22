import './headerField.css';
import {Links} from "../links/links"
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';
import ttflogo from '../images/ttflogo.png';

export const HeaderField = () => {
    
    return(
        <div className="formHeader">
            <div className='divHeader'>
                <Toolbar className='Header'>
                    <Grid container spacing={1}>
                        <Grid item xs={2} className="gridLogo">
                            <img src={ttflogo} alt="ttflogo" height="50px" />
                        </Grid>
                        <Grid item xs={3}>  
                        </Grid>
                        <Grid item xs={7} className='gridButton'>
                            <Links/>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='headerPhone'>
                    <Grid container spacing={1}>
                        <Grid item className="gridLogo" xs={12}>
                            <img src={ttflogo} alt="ttflogo" className="logoPhone"/>
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