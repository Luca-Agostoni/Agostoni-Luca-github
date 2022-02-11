import { useState, useEffect } from "react";
import { listCommits } from "../api/commits";

export const useCommits = (owner, repo) => {

    const [commits, setCommits] = useState([]);
    const [onErrorCommits, setOnErrorCommits] = useState(false);
    const [loadCommits, setLoadCommits] = useState(false);
    
    useEffect(() => {
        const populateCommits = async () => {
            try {
                setLoadCommits(true);
                setCommits(await listCommits(owner, repo));
                setLoadCommits(false); 
            } catch (err) {
                setOnErrorCommits(true);
            }
        }
        populateCommits();
    }, [owner, repo]) 
    return {commits, loadCommits, setLoadCommits, setCommits, onErrorCommits, useEffect}
}