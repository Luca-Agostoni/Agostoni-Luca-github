import { useState, useEffect } from "react";
import { listRepos } from "../api/repos";

export const useRepos = () => {

    const [repos, setRepos] = useState([]);
    const [onError, setOnError] = useState(false);
    const [load, setLoad] = useState(false);
    const [fullRepo, setFullRepo] = useState(true);

    useEffect(() => {
        const populateRepos = async () => {
            console.log("sos");
        try {
            setFullRepo(false);
            setLoad(true);
            setRepos(await listRepos());
            setLoad(false);
            setFullRepo(true);
            
        } catch (err) {
            setOnError(true);
        }
        }
        populateRepos();
    }, []) 
    return {repos, setRepos, onError, load, useEffect, fullRepo}
}