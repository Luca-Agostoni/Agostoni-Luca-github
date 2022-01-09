import './TotRepos.css';

export const TotRepos = (props) => {
    return(
        <div className="TotRepos">
            <div className="TotReposCell">
                Total repos: {props.totRepos}
            </div>
        </div>
    );
}