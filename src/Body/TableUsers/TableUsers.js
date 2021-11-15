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
                <RepoRows dataRows={props.dataRepositorie}/>
            </ul>
        </div>
    );
}