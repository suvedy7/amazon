// Setup data layer
// We need this to track the basket


import React,{ createContext,  useReducer, useContext } from "react"
//  this is data layer

export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider =({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer (reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

 // this is how to use it inside of a component 
export const  useStateValue = () => useContext(StateContext);