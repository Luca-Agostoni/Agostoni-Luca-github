import { useState } from 'react/cjs/react.development';
import { DateTime } from 'luxon';
import './RepoRows.css';


export const RepoRows = (props) => {

    const [showDetails, setShowDetails] = useState(false);
    const linkName = props.repoName;

    function changeDate (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLL yyyy | HH:mm:ss');
        return result;
    }

    return(
            <div>
                <li className="liTable2">
                    <ul className="ulTableHeader2">
                        <li className="liTableHeader2">
                            <p>{props.surname}</p>
                        </li>
                        <li className="liTableHeader2">
                            <p>{props.name}</p>
                        </li>
                        <li className="liTableHeader2">
                            <p>{props.login}</p>
                        </li>
                        <li className="liTableHeader2">
                            <a className="link" href={props.link}>
                                <p>{linkName}</p>
                            </a>
                        </li>
                        <li className="liTableHeader2">
                            <p>2</p>
                        </li>
                        <li className="liTableHeader2">
                            <p>{changeDate(props.creationDate)}</p>
                        </li>
                        <li className="liTableHeader2">
                            <p>{changeDate(props.lastUpdate)}</p>
                        </li>
                    </ul>
                </li>
                <li className="liTable2check">
                    <div className="detailButtonSlot">
                        dettagli
                        <button className="activatorDetailButton" onClick={() => setShowDetails(!showDetails)} >
                            x
                        </button>
                    </div>
                </li>
                {showDetails && 
                <li className="liTable2Detail">
                    <ul className="ulTableHeader2Detail">
                        <li className="liTableHeader2Detail">
                            <p>{props.surname}</p>
                        </li>
                        <li className="liTableHeader2Detail">
                            <p>{props.name}</p>
                        </li>
                        <li className="liTableHeader2Detail">
                            <p>{props.login}</p>
                        </li>
                        <li className="liTableHeader2Detail">
                            <a className="linkDetail" href={props.link}>
                                <p>{linkName}</p>
                            </a>
                        </li>
                        <li className="liTableHeader2Detail">
                            <p>2</p>
                        </li>
                        <li className="liTableHeader2Detail">
                            <p>{changeDate(props.creationDate)}</p>
                        </li>
                        <li className="liTableHeader2Detail">
                            <p>{changeDate(props.lastUpdate)}</p>
                        </li>
                    </ul>
                </li>
                }
            </div>
    
    );
}