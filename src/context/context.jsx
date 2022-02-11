import React from "react";

const SessionContext = React.createContext({
    name: "Luca",
    email: "email@email.email",
    session: true,
    setSession: () => {}
    }
);

export default SessionContext;