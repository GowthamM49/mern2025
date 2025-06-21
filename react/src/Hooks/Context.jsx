import React from "react";
export const Context = React.createContext();

export const userContext = ({ children }) => {
    const user = { name: "Gowthamm", age: 22 };
    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    );
};
export const UserProvider = userContext; // Exporting with a different name for clarity