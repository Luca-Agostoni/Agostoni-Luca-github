import './Links.css';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';

export const Links = () => {
    return(
        <div className="formLinks">
            <ButtonGroup variant="text" aria-label="text button group">
                <Button className="link"  href="App.js"><p className="linkTxt">Visualizza repos</p></Button>
                <Button className="link" href="App.js"><p className="linkTxt">Nuovo utente</p></Button>
            </ButtonGroup>
            {/* <a className="link" href="App.js">Visualizza repos</a>
            -
            <a className="link" href="App.js">Nuovo utente</a> */}
        </div>
    );
}