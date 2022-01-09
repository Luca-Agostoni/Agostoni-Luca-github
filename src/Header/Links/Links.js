import './Links.css';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';

export const Links = () => {
    return(
        <div className="formLinks">
            <ButtonGroup variant="text" aria-label="text button group" className="linkSectionGroup">
                <Button className="linkSection"  href="App.js"><p className="linkTxt">View repos</p></Button>
                <Button className="linkSection" href="App.js"><p className="linkTxt">New user</p></Button>
            </ButtonGroup>
        </div>
    );
}