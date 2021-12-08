import './TotRepos.css';

export const TotRepos = (props) => {
    return(
        <div className="TotRepos">
            <div className="TotReposCell">
                Totale repos: {props.totRepos}
            </div>
        </div>
    );
}