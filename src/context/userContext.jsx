import React from "react";

const UserContext = React.createContext(
    {
        session: false,
        setSession: () => {}
    }
);

export default UserContext;