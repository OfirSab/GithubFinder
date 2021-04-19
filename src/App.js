import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import GithubContext from './context/github/githubContext'
import './App.css';


const App = () => {
  const githubContext = useContext(GithubContext)

  useEffect( async ()=> {
    // const res = await fetch(`https://api.github.com/users`)
    // const json  = await res.json()
    // console.log(json);

    // const res = await axios.get('https://api.github.com/search/users?q=brad')
    // console.log(res.data.items);
    // const res = await fetch(`https://api.github.com/users${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // const json  = await res.json()
    //     dispatch({
    //     type: SEARCH_USERS,
    //     payload: json.items,
    //   })


    //eslint-disable-next-line
  },[] )

  // Search GitHub users

  // // Search a slngle user
  // const getUser = async (userName) =>{
  //   setLoading(true)
  //   const res = await fetch(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   const json  = await res.json()
  //   setUser(json)
  //   setLoading(false)
  // }
  // // Get users repos
  // const getUserRepos = async (userName) =>{
  //   setLoading(true)
  //   const res = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   const json  = await res.json()
  //   setRepos(json)
  //   setLoading(false)
  // }
  // Clear the lists of users
  // const clearUsers = () => {
  //   setUsers([])
  //   setLoading(false)
  // }



    return (
      <GithubState>
      <AlertState>
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/user/:login" component={User}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
    </AlertState>
    </GithubState>
    );
  }

export default App;
