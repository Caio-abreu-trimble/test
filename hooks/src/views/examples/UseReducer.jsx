import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from "../../store/index";
import { add2ToNumber, login } from '../../store/actions';

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span> :
                    <span className="text">No user login</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Joao')}>Login</button>
                    <button className="btn" onClick={() => add2ToNumber(dispatch)}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
