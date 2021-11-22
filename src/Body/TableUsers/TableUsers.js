import './TableUsers.css';
import { RepoRows } from './RepoRows/RepoRows';

export const TableUsers = (props) => {
    return(
        <div className="formTable">
            <ul className="ulTable">
                <li className="liTable1">
                    <ul className="ulTableHeader1">
                        <li className="liTableHeader1">
                            <p>Cognome</p>
                        </li>
                        <li className="liTableHeader1">
                            <p>Nome</p>
                        </li>
                        <li className="liTableHeader1">
                            <p>Utente github</p>
                        </li>
                        <li className="liTableHeader1">
                            <p>Nome repo</p>
                        </li>
                        <li className="liTableHeader1">
                            <p>Totale commit</p>
                        </li>
                        <li className="liTableHeader1">
                            <p>Data creazione</p>
                        </li>
                        <li className="liTableHeader1final">
                            <p>Ultimo aggiornamento</p>
                        </li>
                    </ul>
                </li>
                {
                    props.dataRepositorie.map(
                        repos => (
                            <RepoRows 
                                name={repos.name} 
                                surname={repos.surname} 
                                login={repos.login} 
                                repoName={repos.repoName} 
                                link={repos.link}
                                creationDate={repos.creationDate}
                                lastUpdate={repos.lastUpdate}
                                key={repos.link}
                            />
                        )
                    )
                }
            </ul>
        </div>
    );
}