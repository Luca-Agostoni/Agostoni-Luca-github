import './Pages.css';

export const Pages = () => {
    return(
        <div className="formPages">
            <ul className="ulPages">
                <li className="liPages">
                    
                </li>
                <li className="liPagesButtonsCells">
                    <a href="App.js">
                        <div className="button">Precedente</div>
                    </a> 
                </li>
                <li className="liPagesButtonsCells">
                    <div className="pageOf">
                        2 di 4
                    </div>
                </li>
                <li className="liPagesButtonsCells">
                    <a href="App.js">
                        <div className="button">Successivo</div>
                    </a>
                </li>
                <li className="liPages">
                    
                </li>
            </ul>
        </div>
    );
}