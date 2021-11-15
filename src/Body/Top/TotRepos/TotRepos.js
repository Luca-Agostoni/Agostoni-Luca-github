import './TotRepos.css';

export const TotRepos = (props) => {
    return(
        <div className="TotRepos">
            Totale repos: {props.totRepos}
        </div>
    );
}