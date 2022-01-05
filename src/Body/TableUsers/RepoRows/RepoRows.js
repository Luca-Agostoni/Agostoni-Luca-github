import { useState } from 'react';
import { DateTime } from 'luxon';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { IconButton } from '@mui/material';
import { Collapse } from '@mui/material';
import { Box } from '@mui/system';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './RepoRows.css';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';

export const RepoRows = (props) => {

    const [showDetails, setShowDetails] = useState(false);
    const [open, setOpen] = React.useState(false);
    const linkName = props.repoName;

    function changeDate (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLL yyyy | HH:mm:ss');
        return result;
    }

    return(
        <>
            <Toolbar className='repoTable'>
                    <Grid container columns={16}>
                        <Grid item xs={2} className='repoTableGrid'>
                            <p>{props.surname}</p> 
                        </Grid>
                        <Grid item xs={2} className='repoTableGrid'>
                            <p>{props.name}</p> 
                        </Grid>
                        <Grid item xs={2} className='repoTableGrid'> 
                            <p>{props.login}</p>
                        </Grid>
                        <Grid item xs={2} className='repoTableGrid'>
                            <p>
                                <a href={props.link}>
                                    <button className='buttonLinkRepo'>
                                        <i className="fa-repeat"></i>
                                    </button>
                                </a>
                            </p>
                        </Grid>
                        <Grid item xs={1} className='repoTableGrid'>
                            <p>4</p>
                        </Grid>
                        <Grid item xs={3} className='repoTableGrid'> 
                            <p>{changeDate(props.creationDate)}</p>
                        </Grid>
                        <Grid item xs={3} className='repoTableGrid'> 
                            <p>{changeDate(props.lastUpdate)}</p>
                        </Grid>
                        <Grid item xs={1} className='repoTableGrid'> 
                            <p>
                            <IconButton className='buttonRow' aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                            </p>
                        </Grid>
                    </Grid>
            </Toolbar>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <Toolbar className='repoTableUnder'>
                    <Grid container columns={16}>
                        <Grid item xs={2} className='repoTableGrid'>
                            <p><b>{props.surname}</b></p> 
                        </Grid>
                        <Grid item xs={2} className='repoTableGrid'>
                            <p><b>{props.name}</b></p> 
                        </Grid>
                        <Grid item xs={2} className='repoTableGrid'> 
                            <p><b>{props.login}</b></p>
                        </Grid>
                        <Grid item xs={2} className='repoTableGrid'>
                            <p>
                                <a href={props.link}>
                                    <button className='buttonLinkRepo'>
                                        <i className="fa-repeat"></i>
                                    </button>
                                </a>
                            </p>
                        </Grid>
                        <Grid item xs={1} className='repoTableGrid'>
                            <p><b>4</b></p>
                        </Grid>
                        <Grid item xs={3} className='repoTableGrid'> 
                            <p><b>{changeDate(props.creationDate)}</b></p>
                        </Grid>
                        <Grid item xs={3} className='repoTableGrid'> 
                            <p><b>{changeDate(props.lastUpdate)}</b></p>
                        </Grid>
                        <Grid item xs={1} className='repoTableGrid'> 
                            <p>
                            <IconButton className='buttonPoint' aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            </IconButton>
                            </p>
                        </Grid>
                    </Grid>
            </Toolbar>
            </Collapse>
        {/* <TableRow className='tableRow'>
            <TableCell component="th" scope="row">{props.surname}</TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.login}</TableCell>
            <TableCell>
                <a  href={props.link}>
                    <button className='buttonLinkRepo'>
                        <i className="fa-repeat"></i>
                    </button>
                </a>
            </TableCell>
            <TableCell>4</TableCell>
            <TableCell>{changeDate(props.creationDate)}</TableCell>
            <TableCell>{changeDate(props.lastUpdate)}</TableCell>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
        </TableRow>
            <Collapse in={open} timeout="auto" unmountOnExit className='tableRow'>
                <TableRow >
                    <TableCell component="th" scope="row">{props.surname}</TableCell>
                    <TableCell>{props.name}</TableCell>
                    <TableCell>{props.login}</TableCell>
                    <TableCell>
                        <a className="link" href={props.link}> 
                            <p className="liTableHeader2Txt">{linkName}</p>
                        </a>
                    </TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>{changeDate(props.creationDate)}</TableCell>
                    <TableCell>{changeDate(props.lastUpdate)}</TableCell>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                        >
                        </IconButton>
                    </TableCell>
                </TableRow>
            </Collapse>    */}
        </>
        









            // <div>
            //     <li className="liTable2">
            //         <ul className="ulTableHeader2">
            //             <li className="liTableHeader2">
            //                 <p className="liTableHeader2Txt">{props.surname}</p>
            //             </li>
            //             <li className="liTableHeader2">
            //                 <p className="liTableHeader2Txt">{props.name}</p>
            //             </li>
            //             <li className="liTableHeader2">
            //                 <p className="liTableHeader2Txt">{props.login}</p>
            //             </li>
            //             <li className="liTableHeader2">
            //                 <a className="link" href={props.link}>
            //                     <p className="liTableHeader2Txt">{linkName}</p>
            //                 </a>
            //             </li>
            //             <li className="liTableHeader2">
            //                 <p className="liTableHeader2Txt">2</p>
            //             </li>
            //             <li className="liTableHeader2">
            //                 <p className="liTableHeader2Txt">{changeDate(props.creationDate)}</p>
            //             </li>
            //             <li className="liTableHeader2">
            //                 <p className="liTableHeader2Txt">{changeDate(props.lastUpdate)}</p>
            //             </li>
            //         </ul>
            //     </li>
            //     <li className="liTable2check">
            //         <div className="detailButtonSlot">
            //             dettagli
            //             <button className="activatorDetailButton" onClick={() => setShowDetails(!showDetails)} >
            //                 x
            //             </button>
            //         </div>
            //     </li>
            //     {showDetails && 
            //     <li className="liTable2Detail">
            //         <ul className="ulTableHeader2Detail">
            //             <li className="liTableHeader2Detail">
            //                 <p className="liTableHeader2Txt">{props.surname}</p>
            //             </li>
            //             <li className="liTableHeader2Detail">
            //                 <p className="liTableHeader2Txt">{props.name}</p>
            //             </li>
            //             <li className="liTableHeader2Detail">
            //                 <p className="liTableHeader2Txt">{props.login}</p>
            //             </li>
            //             <li className="liTableHeader2Detail">
            //                 <a className="linkDetail" href={props.link}>
            //                     <p className="liTableHeader2Txt">{linkName}</p>
            //                 </a>
            //             </li>
            //             <li className="liTableHeader2Detail">
            //                 <p className="liTableHeader2Txt">2</p>
            //             </li>
            //             <li className="liTableHeader2Detail">
            //                 <p className="liTableHeader2Txt">{changeDate(props.creationDate)}</p>
            //             </li>
            //             <li className="liTableHeader2Detail">
            //                 <p className="liTableHeader2Txt">{changeDate(props.lastUpdate)}</p>
            //             </li>
            //         </ul>
            //     </li>
            //     }
            // </div>
    
    );
}