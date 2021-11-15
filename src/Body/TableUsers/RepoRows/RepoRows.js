import { useState } from 'react/cjs/react.development';
import './RepoRows.css';


export const RepoRows = (props) => {

    const [showDetails, setShowDetails] = useState(false);


    const repo = props.dataRows;

    const repoList = repo.map(
        (repos)=>{

        const linkName = repos.repositorie_name;
        return(
            <div>
                <li className="liTable2">
                    <ul className="ulTableHeader2">
                        <li className="liTableHeader2">
                            {repos.surname}
                        </li>
                        <li className="liTableHeader2">
                            {repos.name}
                        </li>
                        <li className="liTableHeader2">
                            {repos.login}
                        </li>
                        <li className="liTableHeader2">
                            <a className="link" href={repos.repositorie_url}>
                                {linkName}
                            </a>
                        </li>
                        <li className="liTableHeader2">
                            2
                        </li>
                        <li className="liTableHeader2">
                            {repos.creation_date}
                        </li>
                        <li className="liTableHeader2">
                            {repos.update_date}
                        </li>
                    </ul>
                </li>
                <li className="liTable2check">
                    <div className="detailButtonSlot">
                        details
                        <button className="activatorDetailButton" onClick={() => setShowDetails(!showDetails)}></button>
                    </div>
                </li>
                {(showDetails && {repos}) &&
                <li className="liTable2Detail">
                    <ul className="ulTableHeader2Detail">
                        <li className="liTableHeader2Detail">
                            {repos.surname}
                        </li>
                        <li className="liTableHeader2Detail">
                            {repos.name}
                        </li>
                        <li className="liTableHeader2Detail">
                            {repos.login}
                        </li>
                        <li className="liTableHeader2Detail">
                            <a className="linkDetail" href={repos.repositorie_url}>
                                {linkName}
                            </a>
                        </li>
                        <li className="liTableHeader2Detail">
                            2
                        </li>
                        <li className="liTableHeader2Detail">
                            {repos.creation_date}
                        </li>
                        <li className="liTableHeader2Detail">
                            {repos.update_date}
                        </li>
                    </ul>
                </li>
                }
            </div>
            

            );
        }
    );

    return(
        <div>
            {repoList}
        </div>
        
    );
}