import { useState, useEffect } from "react";
import { listRepos } from "../api/repos";

export const useRepos = () => {

    const [repos, setRepos] = useState([]);
    const [onError, setOnError] = useState(false);

    useEffect(() => {
        const populateRepos = async () => {
        try {
            setRepos(await listRepos());
            
        } catch (err) {
            setOnError(true);
        }
        }
        populateRepos();
    }, []) 
    return {repos, setRepos, onError}
}