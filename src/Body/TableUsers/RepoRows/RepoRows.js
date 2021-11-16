import { useState } from 'react/cjs/react.development';
import './RepoRows.css';


export const RepoRows = (props) => {

    const [showDetails, setShowDetails] = useState(false);
    const linkName = props.repositorie_name;

    return(
            <div>
                <li className="liTable2">
                    <ul className="ulTableHeader2">
                        <li className="liTableHeader2">
                            {props.surname}
                        </li>
                        <li className="liTableHeader2">
                            {props.name}
                        </li>
                        <li className="liTableHeader2">
                            {props.login}
                        </li>
                        <li className="liTableHeader2">
                            <a className="link" href={props.repositorie_url}>
                                {linkName}
                            </a>
                        </li>
                        <li className="liTableHeader2">
                            2
                        </li>
                        <li className="liTableHeader2">
                            {props.creation_date}
                        </li>
                        <li className="liTableHeader2">
                            {props.update_date}
                        </li>
                    </ul>
                </li>
                <li className="liTable2check">
                    <div className="detailButtonSlot">
                        details
                        <button className="activatorDetailButton" onClick={() => setShowDetails(!showDetails)}></button>
                    </div>
                </li>
                {showDetails && 
                <li className="liTable2Detail">
                    <ul className="ulTableHeader2Detail">
                        <li className="liTableHeader2Detail">
                            {props.surname}
                        </li>
                        <li className="liTableHeader2Detail">
                            {props.name}
                        </li>
                        <li className="liTableHeader2Detail">
                            {props.login}
                        </li>
                        <li className="liTableHeader2Detail">
                            <a className="linkDetail" href={props.repositorie_url}>
                                {linkName}
                            </a>
                        </li>
                        <li className="liTableHeader2Detail">
                            2
                        </li>
                        <li className="liTableHeader2Detail">
                            {props.creation_date}
                        </li>
                        <li className="liTableHeader2Detail">
                            {props.update_date}
                        </li>
                    </ul>
                </li>
                }
            </div>
    
    );
}