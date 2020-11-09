import React from 'react';
const { createContext } = require("react");

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
    <StoreContext.Provider value = {store}>
        {props.children}
    </StoreContext.Provider>
    )
}

export default StoreContext;