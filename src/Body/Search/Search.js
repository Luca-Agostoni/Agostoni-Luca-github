import './Search.css';

export const Search = () => {
    return(
        <div className="formSearch">
            <ul className="ulSearch">
                <li className="liSearch1">
                    <div className="TotRepos">
                        Totale repos: 10
                    </div>
                </li>
                <li className="liSearch2">
                    <div className="divSearch">
                        Cerca:
                        <input className="searchBar" type="text"></input>
                    </div>
                </li>
            </ul>
        </div>
    );
}