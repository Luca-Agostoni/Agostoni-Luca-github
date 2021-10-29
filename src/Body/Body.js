import './Body.css'; 
import {Pages} from './Pages/Pages';
import {Table} from './Table/Table';

export const Body = () => {
    return(
        <div className="formBody">
            <div className="TotRepos">
                Totale repos: 10
            </div>
            <Table/>
            <Pages/>
        </div>
    );
}