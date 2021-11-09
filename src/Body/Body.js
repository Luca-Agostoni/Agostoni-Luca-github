import './Body.css'; 
import {Top} from './Top/Top';
import {Table} from './Table/Table';
import { listRepos } from '../api/repos';


export const Body = () => {
    listRepos();
    return(
        <div className="formBody">
            <Top/>
            <Table/>
        </div>
    );
}