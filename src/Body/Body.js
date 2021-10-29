import './Body.css';
import {Pages} from './Pages/Pages'

export const Body = () => {
    return(
        <div className="formBody">
            <div className="TotRepos">
                Totale repos: 10
            </div>
            <Pages/>
        </div>
    );
}