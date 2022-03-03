import {useEffect, useState} from "react";
import UserContext from "../context/userContext";
import { useContext } from "react";

export const useLog = () => {
    const { user } = useContext(UserContext); 
    var [ session, setSession ] = useState(false);
    const [ route, setRoute ] = useState("");

    useEffect(() => {
        const isLog = () => {
            setSession(user.session);
            if(user.session === false){
                setRoute("/login");
            } else {
                setRoute("");
            }
        }
        isLog();
    }, [(user.session), session, route]);

    return {session, route, setSession};
}