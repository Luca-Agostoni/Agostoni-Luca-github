
import { DateTime } from 'luxon';
import { IconButton } from '@mui/material';
import { Collapse } from '@mui/material';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './repoData.css';
import { Grid } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { useReposDetails } from '../../hooks/useReposDetails';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;



export const RepoData = (props) => {
    const {openDetail, handleClose, handleOpen} = useReposDetails();
    const [open, setOpen] = React.useState(false);

    function checkModal (){
        if (window.location.href === "http://localhost:3000/repos/casiraghi-davide-github"){
            console.log("bubu");
            handleOpen();  
        }
    }
    function changeDate (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLL yyyy');
        return result;
    }

    return(
        <>
            <div></div>
            <Toolbar className='repoTable' >
                    <Grid container columns={30}>
                        <Grid item xs={3} className='repoTableGrid'>
                            <p>{props.surname}</p> 
                        </Grid>
                        <Grid item xs={3} className='repoTableGrid'>
                            <p>{props.name}</p> 
                        </Grid>
                        <Grid item xs={5} className='repoTableGrid'> 
                            <p>{props.login}</p>
                        </Grid>
                        <Grid item xs={6} className='repoTableGrid'>
                            <p>
                                <a href={props.link}>
                                    <button className='buttonLinkRepo'>
                                        <b>{props.repoName}</b>
                                    </button>
                                </a>
                            </p>
                        </Grid>
                        <Grid item xs={3} className='repoTableGrid'>
                            <p>4</p>
                        </Grid>
                        <Grid item xs={4} className='repoTableGrid'> 
                            <p>{changeDate(props.creationDate)}</p>
                        </Grid>
                        <Grid item xs={4} className='repoTableGrid'> 
                            <p>{changeDate(props.lastUpdate)}</p>
                        </Grid>
                        <Grid item xs={2} className='repoTableGrid'> 
                            <p>
                            <Link to={props.repoName} onClick={handleOpen}>
                                <IconButton className='buttonRow' aria-label="expand row" size="small">
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </Link>
                            </p>
                        </Grid>
                    </Grid>
            </Toolbar>
            <Link to="/repos" className='linkPos' onClick={handleClose}>
                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={openDetail}
                    onClose={handleClose}
                    BackdropComponent={Backdrop}
                >
                    <div className="detailsBox">
                        <Outlet/>
                    </div>
                </StyledModal>
            </Link>

{/* ////////////////////////////// */}

            <Toolbar className='repoTablePhone'>
                    <Grid container columns={16}>
                        <Grid item xs={10} className='repoTableGrid'>
                            <p>{props.repoName}</p> 
                        </Grid>
                        <Grid item xs={6} className='repoTableGrid'> 
                            <p>
                            <IconButton className='buttonRow' aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                            </p>
                        </Grid>
                    </Grid>
            </Toolbar>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Toolbar className='repoTableUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableGridPhone'> 
                            <p>Surname</p>
                        </Grid>
                        <Grid item xs={10}>
                            <p><b>{props.surname}</b></p> 
                        </Grid>
                    </Grid>
                </Toolbar>    
                <Toolbar className='repoTableUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableGridPhone'> 
                            <p>Name</p>
                        </Grid>
                        <Grid item xs={10}>
                            <p><b>{props.name}</b></p> 
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='repoTableUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableGridPhone'> 
                            <p>Login</p>
                        </Grid>
                        <Grid item xs={10}> 
                            <p><b>{props.login}</b></p>
                        </Grid>
                    </Grid>
                </Toolbar>    
                <Toolbar className='repoTableUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableGridPhone'> 
                            <p>Link</p>
                        </Grid>
                        <Grid item xs={10} className='repoTableGridLinkPhone'>
                                <a href={props.link}>
                                    <button className='buttonLinkRepoGit'>
                                        <i className="fa fa-github"></i>
                                    </button>
                                </a>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='repoTableUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableGridPhone'> 
                            <p>Commits</p>
                        </Grid>
                        <Grid item xs={10}>
                            <p><b>4</b></p>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='repoTableUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableGridPhone'> 
                            <p>Creation Date</p>
                        </Grid>
                        <Grid item xs={10}>
                            <p><b>{changeDate(props.creationDate)}</b></p>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='repoTableUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableGridPhone'> 
                            <p>Last Update</p>
                        </Grid>
                        <Grid item xs={10}> 
                            <p><b>{changeDate(props.lastUpdate)}</b></p>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className='repoTableTailUnderPhone'>
                    <Grid container columns={16}>
                        <Grid item xs={6} className='repoTableTailGridPhone'> 
                            <p>Details</p>
                        </Grid>
                        <Grid item xs={10}>
                            <Link to={props.repoName} onClick={handleOpen}>
                                <IconButton className='buttonRowPhone' aria-label="expand row" size="small">
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Collapse>
        </>
    );
}