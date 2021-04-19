import React, { Fragment, useEffect, useContext } from 'react'
import Repos from '../repos/Repos'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'


const User = ({ match }) => {

    const githubContext = useContext(GithubContext)
    const { user, loading, getUser, getUserRepos, repos } = githubContext;
    const userName = match.params.login
    useEffect(()=>{
        // getUser(match.params.login)
        getUserRepos(userName)
        getUser(userName)
        //eslint-disable-next-line
    },[] )

      const { 
          name,
          avatar_url,
          location,
          bio,
          blog,
          login,
          html_url,
          followers,
          following,
          public_repos,
          public_gists,
          hireable,
          company,
       } = user

    if(loading) return <Spinner/>
    else{
    return (
      <Fragment>
         <button> <Link to='/'>Back to Home</Link></button>
         Hireable: {''}
         {hireable ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times-circle text-danger"></i>)}

        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} className="round-img" style={{width: '150px'}} alt=""/>
                <h1>{name}</h1>
                <p>Location: {location}</p>
                </div>
                <div>
                {bio && (<Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </Fragment>)}
                <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                <ul>
                    <li>
                        {login && <Fragment>
                            <strong>Username: </strong>{login}
                            </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong>Company: </strong>{company}
                            </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            <strong>Blog: </strong>{blog}
                            </Fragment>}
                    </li>
                </ul>
                </div>
        </div>

        <div className="card text-center">
            <div className="badge badge-primary">Following: {following}</div>
            <div className="badge badge-success">Followers: {followers}</div>
            <div className="badge badge-light">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        
            {/* {repos.map(repo=>{console.log(repo.name)})} */}
            <Repos repos={repos}/>
      </Fragment>
    )}
  }

export default User
