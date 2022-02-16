import React from "react";

const UserContext = React.createContext(
    {
        session: true,
        setSession: () => {}
    }
);

export default UserContext;