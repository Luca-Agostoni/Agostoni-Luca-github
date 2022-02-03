import { useState, useEffect } from "react";
import { listRepos } from "../api/repos";

export const useRepos = () => {

    const [repos, setRepos] = useState([]);
    const [onError, setOnError] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const populateRepos = async () => {
            try {
                setLoad(true);
                setRepos(await listRepos());
                setLoad(false);   
            } catch (err) {
                setOnError(true);
            }
        }
        populateRepos();
    }, []) 
    return {repos, setRepos, onError, load, useEffect}
}