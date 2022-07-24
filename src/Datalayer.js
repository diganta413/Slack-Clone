import React, {useContext,createContext,useReducer} from "react";

export const context = createContext();

export const DataLayercontext = ({initialState,reducer,children}) => (
    <context.Provider value={useReducer(reducer,initialState)}>
        {children}
    </context.Provider>
)

export const DataLayer = () => useContext(context);