import './detailsContent.css';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import Collapse from '@mui/material/Collapse';
import { DateTime } from 'luxon';

export const DetailsContent = (props) => {

    const [open, setOpen] = React.useState(false);
    function changeDate (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLL yyyy - t');
        return result;
    }

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
                    <Grid item xs={2} className='cardDetailsColonumLeft'>
                        <p>
                            <IconButton className='buttonRow' aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </p>
                    </Grid>
                </Grid>
            </Toolbar>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Toolbar className='cardDetailsTableDeatils'>
                    <Grid container columns={10}>
                        <Grid item xs={5} className='cardDetailsColonumLeft'>
                            <p className='categoryDetail'>
                                Commit Date
                            </p>
                        </Grid>
                        <Grid item xs={5}>
                            <p>
                                <b>{changeDate(props.date)}</b>
                            </p>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='cardDetailsTableDeatils'>
                    <Grid container columns={10}>
                        <Grid item xs={5} className='cardDetailsColonumLeft'>
                            <p className='categoryDetail'>
                                Committer name
                            </p>
                        </Grid>
                        <Grid item xs={5}>
                            <p>
                                <b>{props.name}</b>
                            </p>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='cardDetailsTableDeatils'>
                    <Grid container columns={10}>
                        <Grid item xs={5} className='cardDetailsColonumLeft'>
                            <p className='categoryDetail'>
                                Committer email
                            </p>
                        </Grid>
                        <Grid item xs={5}>
                            <p>
                                <b>{props.email}</b>
                            </p>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Collapse>
        </>
    );
}