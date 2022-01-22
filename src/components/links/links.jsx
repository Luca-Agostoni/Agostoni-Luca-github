import './links.css';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";
import * as React from 'react';

export const Links = () => {
  
    return(
        <div className="formLinks">
            <ButtonGroup variant="text" aria-label="text button group" className="linkSectionGroup">
                <Button className="linkSection">
                    <Link to="repos" className="buttonLink">
                        <i className="fa fa-home"></i>
                    </Link> 
                </Button>
                <Button className="linkSection"><Link to="login" className="buttonLink"><i className="fa fa-user"></i></Link></Button>
                <Button className="linkSection"><Link to="users" className="buttonLink"><i className="fa fa-user-plus"></i></Link></Button>
                <Button className="linkSection"><Link to="classes" className="buttonLink"><i className="fa fa-users"></i></Link></Button>
                <Button className="linkSection"><Link to="logout" className="buttonLink"><i className="fa fa-sign-out"></i></Link></Button>
            </ButtonGroup>
        </div>
    );
}