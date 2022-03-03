import React from "react";

const UserContext = React.createContext(
    {
        user: {
            session: true,
        },
        setUser: () => {}
    }
);

export default UserContext;