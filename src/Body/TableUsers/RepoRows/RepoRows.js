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


export const RepoRows = (props) => {

    const [showDetails, setShowDetails] = useState(false);
    const [open, setOpen] = React.useState(false);
    const linkName = props.repoName;

    function changeDate (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLL yyyy | HH:mm:ss');
        return result;
    }

    return(
        <aa>
        <TableRow className='tableRow' sx={{ '& > *': { borderBottom: 'unset' } }}>
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
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
        </TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">{props.surname}</TableCell>
                                <TableCell align="right">{props.name}</TableCell>
                                <TableCell align="right">{props.login}</TableCell>
                                <TableCell align="right">
                                    <a className="link" href={props.link}> 
                                        <p className="liTableHeader2Txt">{linkName}</p>
                                    </a>
                                </TableCell>
                                <TableCell align="right">5</TableCell>
                                <TableCell align="right">{changeDate(props.creationDate)}</TableCell>
                                <TableCell align="right">{changeDate(props.lastUpdate)}</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Box>
            </Collapse>   
        </TableCell>
        </aa>
        


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