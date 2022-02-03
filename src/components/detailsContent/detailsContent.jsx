import './detailsContent.css';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

export const DetailsContent = (props) => {

    const [open, setOpen] = React.useState(false);


    return (
        <>
            <Toolbar className='cardDetailsTable'>
                <Grid container columns={10}>
                    <Grid item xs={2} className='cardDetailsColonumLeft'>
                        <p>
                            <IconButton className='buttonRow' aria-label="expand row" size="small">
                            </IconButton>
                        </p>
                    </Grid>
                    <Grid item xs={6}>
                        <p><b>{props.message}</b></p>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={1} className='cardDetailsColonumLeft'>
                        <p>
                            <IconButton className='buttonRow' aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </p>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    );
}