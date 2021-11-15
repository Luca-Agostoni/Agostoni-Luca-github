import './Top.css';
import {TotRepos} from './TotRepos/TotRepos';
import {Selection} from './Selection/Selection';
import {Search} from './Search/Search';

export const Top = (props) => {
    return(
        <div className="formTop">
            <ul className="ulTop">
                <li className="liTop1">
                    <TotRepos totRepos={props.totRepos}/>
                </li>
                <li className="liTop2">
                    <Selection/> 
                </li>
                <li className="liTop1">
                    <Search/>
                </li>
            </ul>
        </div>
    );
}