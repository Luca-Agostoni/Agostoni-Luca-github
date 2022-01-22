import './details.css';
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useRepos } from '../../hooks/useRepos';
import {CardDetails} from '../../components/cardDetails/cardDetails';

function Details() {

  const {repos} = useRepos();
  let params = useParams();
  const repositorie = params.repoName;

  return (
    <div className="details">
      {
        repos.filter(repo=>
          (repo.repoName.includes(repositorie))
          ).map(repo => (
            <CardDetails 
              name={repo.name} 
              surname={repo.surname} 
              login={repo.login} 
              repoName={repo.repoName} 
              link={repo.link}
              creationDate={repo.creationDate}
              lastUpdate={repo.lastUpdate}
              key={repo.link}                   
            />
              )
          )            
      }
    </div>
  );
}
export default Details;
