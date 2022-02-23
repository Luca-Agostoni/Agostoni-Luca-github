import './links.css';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export const Links = () => {
    const [anchorElHome, setAnchorElHome] = React.useState(null);
    const [anchorElLogin, setAnchorElLogin] = React.useState(null);
    const [anchorElAdd, setAnchorElAdd] = React.useState(null);
    const [anchorElStudents, setAnchorElStudents] = React.useState(null);
    const [anchorElLogout, setAnchorElLogout] = React.useState(null);

    const handlePopoverOpenHome = (event) => {
        setAnchorElHome(event.currentTarget);
    };
    const handlePopoverCloseHome = () => {
        setAnchorElHome(null);
    };

    const handlePopoverOpenLogin = (event) => {
        setAnchorElLogin(event.currentTarget);
    };
    const handlePopoverCloseLogin = () => {
        setAnchorElLogin(null);
    };

    const handlePopoverOpenAdd = (event) => {
        setAnchorElAdd(event.currentTarget);
    };
    const handlePopoverCloseAdd = () => {
        setAnchorElAdd(null);
    };

    const handlePopoverOpenStudents = (event) => {
        setAnchorElStudents(event.currentTarget);
    };
    const handlePopoverCloseStudents = () => {
        setAnchorElStudents(null);
    };


    const handlePopoverOpenLogout = (event) => {
        setAnchorElLogout(event.currentTarget);
    };
    const handlePopoverCloseLogout = () => {
        setAnchorElLogout(null);
    };


    const openHome = Boolean(anchorElHome);
    const openLogin = Boolean(anchorElLogin);
    const openAdd = Boolean(anchorElAdd);
    const openStudents = Boolean(anchorElStudents);
    const openLogout = Boolean(anchorElLogout);

    return (
        <div className="formLinks">
            <ButtonGroup variant="text" aria-label="text button group" className="linkSectionGroup">
                <Button className="linkSection">
                    <Link to="repos" className="buttonLink"
                        aria-owns={openHome ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpenHome}
                        onMouseLeave={handlePopoverCloseHome}
                    >
                        <i className="fa-solid fa-house-chimney"></i>
                    </Link>
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                        }}
                        open={openHome}
                        anchorEl={anchorElHome}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverCloseHome}
                        disableRestoreFocus
                    >
                        <Typography className="popover" sx={{ p: 1 }}>Home</Typography>
                    </Popover>
                </Button>
                <Button className="linkSection">
                    <Link to="login" className="buttonLink"
                        aria-owns={openLogin ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpenLogin}
                        onMouseLeave={handlePopoverCloseLogin}
                    >
                        <i className="fa fa-user" id='fa-user'></i>
                    </Link>
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                        }}
                        open={openLogin}
                        anchorEl={anchorElLogin}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverCloseLogin}
                        disableRestoreFocus
                    >
                        <Typography className="popover" sx={{ p: 1 }}>Login</Typography>
                    </Popover>
                </Button>
                <Button className="linkSection">
                    <Link to="users" className="buttonLink"
                        aria-owns={openAdd ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpenAdd}
                        onMouseLeave={handlePopoverCloseAdd}
                    >
                        <i className="fa fa-user-plus"></i>
                    </Link>
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                        }}
                        open={openAdd}
                        anchorEl={anchorElAdd}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverCloseAdd}
                        disableRestoreFocus
                    >
                        <Typography className="popover" sx={{ p: 1 }}>Add user</Typography>
                    </Popover>
                </Button>
                <Button className="linkSection">
                    <Link to="classes" className="buttonLink"
                        aria-owns={openStudents ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpenStudents}
                        onMouseLeave={handlePopoverCloseStudents}
                    >
                        <i className="fa fa-users"></i>
                    </Link>
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                        }}
                        open={openStudents}
                        anchorEl={anchorElStudents}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverCloseStudents}
                        disableRestoreFocus
                    >
                        <Typography className="popover" sx={{ p: 1 }}>Students</Typography>
                    </Popover>
                </Button>
                <Button className="linkSection">
                    <Link to="login" className="buttonLink"
                        aria-owns={openLogout ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpenLogout}
                        onMouseLeave={handlePopoverCloseLogout}
                    >
                        <i className="fa-solid fa-arrow-right-from-bracket" id='fa-arrow-right-from-bracket'></i>
                    </Link>
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                        }}
                        open={openLogout}
                        anchorEl={anchorElLogout}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverCloseLogout}
                        disableRestoreFocus
                    >
                        <Typography className="popover" sx={{ p: 1 }}>Logout</Typography>
                    </Popover>
                </Button>
            </ButtonGroup>
        </div>
    );
}