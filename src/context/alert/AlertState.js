import React, {useReducer} from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
    SET_ALERT,
    REMOVE_ALERT,
} from '../types'

const AlertState = props => {
    const initialState = null;

    const [state,dispatch] = useReducer(AlertReducer,initialState);

    // Set Alert
    const setAlert = (msg,idx) =>{
        dispatch({ 
            type: SET_ALERT,
            payload:{msg,idx}
        })
        setTimeout(() => dispatch({type: REMOVE_ALERT}),2000)
      }

    // Set Loading
    //   const setLoading = () => dispatch({type: SET_LOADING})
    return (
    <AlertContext.Provider
    value={{
        alert: state,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>
    );
}

export default AlertState;