import './Links.css';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';

export const Links = () => {
    return(
        <div className="formLinks">
            <ButtonGroup variant="text" aria-label="text button group" className="linkSectionGroup">
                <Button className="linkSection"  href="App.js"><i className="fa fa-home"></i></Button>
                <Button className="linkSection" href="App.js"><i className="fa fa-user-plus"></i></Button>
            </ButtonGroup>
        </div>
    );
}