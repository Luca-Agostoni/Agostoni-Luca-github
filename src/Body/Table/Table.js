import './Table.css';

export const Table = () => {
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
                <li className="liTable2">
                    <ul className="ulTableHeader2">
                        <li className="liTableHeader2">
                            Rossi
                        </li>
                        <li className="liTableHeader2">
                            Mario
                        </li>
                        <li className="liTableHeader2">
                            mrossi
                        </li>
                        <li className="liTableHeader2">
                            <a className="link" href="App.js">
                                rossi-mario-github
                            </a>
                        </li>
                        <li className="liTableHeader2">
                            2
                        </li>
                        <li className="liTableHeader2">
                            29/10/2021
                        </li>
                        <li className="liTableHeader2">
                            29/10/2021
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}