/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React, { useState } from 'react'
import axios from 'axios';

/* ~ ~ ~ ~ ~ { Import Components } ~ ~ ~ ~ ~ */
import User from '../components/User';
import Alert from '../components/Alert';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
function Profile() {
  /* - - - - - < Initialize Component-Level State /> - - - - - */
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [type, setType] = useState('danger');
  const [repos, setRepos] = useState([]);

  let githubClientId;
  let githubClientSecret;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  /* - - - - - < Retrieve Data for a Single GitHub User /> - - - - - */
  const retrieve = async (login) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } 
  }

  /* - - - - - < Retrieve Repos for a Single GitHub User /> - - - - - */
  const repositories = async (login) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      setRepos(res.data);
    } catch (err) {
      console.log(err);
    } 
  }

  /* - - - - - < Create an Alert Message /> - - - - - */
  const SetAlert = (msg) => {
    setAlert(msg);

    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  /* - - - - - < Set Alert Message Type /> - - - - - */
  const SetType = (type) => {
    setType(type);
  }

  /* - - - - - < Return JSX Markup /> - - - - - */
  return (
    <>
      <Alert alert={alert} type={type} />
      <User retrieve={retrieve} repositories={repositories} repos={repos} setAlert={SetAlert} SetType={SetType} loading={loading} user={user} />
    </>
  );
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default Profile;