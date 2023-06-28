import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    function updateStore(key, value) {
        setState({
            ...state, 
            [key]: value
        });
    }

    return(
        <AppContext.Provider value={{
            number: state.number, 
            text: state.text,
            setNumber: n => updateStore('number', n),
            setText: n => updateStore('text', n),
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store