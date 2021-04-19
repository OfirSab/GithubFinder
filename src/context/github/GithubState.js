import React, {useReducer} from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import axios from 'axios'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'
let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState);

    // Search Users
    const searchUsers = async (userName) =>{
        setLoading();
        const res = await fetch(`https://api.github.com/search/users?q=${userName}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        const json  = await res.json()
            dispatch({
            type: SEARCH_USERS,
            payload: json.items,
        })
      }
    // Get Users

      // Get users repos
        const getUserRepos = async (userName) =>{
            setLoading();
            const res = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            const json  = await res.json()
            dispatch({
                type: GET_REPOS,
                payload: json,
            })
        }

      // Search a slngle user
        const getUser = async (userName) =>{
        setLoading();
        const res = await fetch(`https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        const json  = await res.json()
        // setUser(json)
        dispatch({
            type: GET_USER,
            payload: json,
        })
     }

    // Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS})
    
    // Set Loading
      const setLoading = () => dispatch({type: SET_LOADING})
    return (
    <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
    );
}

export default GithubState;