import './Body.css'; 
import {Search} from './Search/Search';
import {Pages} from './Pages/Pages';
import {Table} from './Table/Table';


export const Body = () => {
    return(
        <div className="formBody">
            <Search/>
            <Table/>
            <Pages/>
        </div>
    );
}