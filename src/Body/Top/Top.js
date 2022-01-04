import './Top.css';
import {TotRepos} from './TotRepos/TotRepos';
import {Selection} from './Selection/Selection';
import {SearchField} from './SearchField/SearchField';

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
                <li className="liTop3">
                    <SearchField/>
                </li>
            </ul>
        </div>
    );
}