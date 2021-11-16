import './TableUsers.css';
import { RepoRows } from './RepoRows/RepoRows';

export const TableUsers = (props) => {
    return(
        <div className="formTable">
            <ul className="ulTable">
                <li className="liTable1">
                    <ul className="ulTableHeader1">
                        <li className="liTableHeader1">Cognome</li>
                        <li className="liTableHeader1">Nome</li>
                        <li className="liTableHeader1">Utente github</li>
                        <li className="liTableHeader1">Nome repo</li>
                        <li className="liTableHeader1">Totale commit</li>
                        <li className="liTableHeader1">Data creazione</li>
                        <li className="liTableHeader1final">Ultimo aggiornamento</li>
                    </ul>
                </li>
                {
                    props.dataRepositorie.map(
                        repos => (
                            <RepoRows 
                                name={repos.name} 
                                surname={repos.surname} 
                                login={repos.login} 
                                repositorie_name={repos.repositorie_name} 
                                repositorie_url={repos.repositorie_url}
                                creation_date={repos.creation_date}
                                update_date={repos.update_date}
                            />
                        )
                    )
                }
            </ul>
        </div>
    );
}