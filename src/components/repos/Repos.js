 import React from 'react'
 import RepoItem from './RepoItem'
 import PropTypes from 'prop-types'
 
 const Repos = ({ repos }) => {
    Repos.propTypes = {
        repos: PropTypes.array.isRequired,
    }
   return (
       <div>
           {repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)}
       </div>
       )
 }

 export default Repos
 