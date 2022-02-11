import './details.css';
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useRepos } from '../../hooks/useRepos';
import {CardDetails} from '../../components/cardDetails/cardDetails';
import { useReposDetails } from '../../hooks/useReposDetails';
function Details(props) {
  const {repos} = useRepos();
  
  let params = useParams();

  const repositorie = params.repoName;

  const {handleOpen} = useReposDetails();
  
  return (
    <div className="details" onLoad={handleOpen}>
      
      {
        repos.filter(repo=>
          (repo.repoName.includes(repositorie))
          ).map(repo => (
            <CardDetails
              login={repo.login} 
              repoName={repo.repoName} 
              key={repo.link}                   
            />
              )
          )            
      }
    </div>
  );
}
export default Details;
