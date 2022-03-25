/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React, { useState } from 'react'
import axios from 'axios';

/* ~ ~ ~ ~ ~ { Import Components } ~ ~ ~ ~ ~ */
import Users from '../components/Users';
import Search from '../components/Search';
import Alert from '../components/Alert';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
function Home() {
  /* - - - - - < Initialize Component-Level State /> - - - - - */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [type, setType] = useState('danger');

  /* - - - - - < Search GitHub Users /> - - - - - */
  const search = async (text) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
      const users = res.data.items;
      setUsers(users);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } 
  }

  /* - - - - - < Clear Search Results /> - - - - - */
  const clear = () => {
    setUsers([]);
    setLoading(false);
  }

  /* - - - - - < Check that Search Field is Valid /> - - - - - */
  const SetAlert = (msg) => {
    setAlert(msg);

    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  const SetType = (type) => {
    setType(type);
  }

  /* - - - - - < Return JSX Markup /> - - - - - */
  return (
    <>
      <Alert alert={alert} type={type} />
      <Search search={search} clear={clear} showClear={ users.length > 0 ? true : false } setAlert={SetAlert} SetType={SetType} />
      <Users loading={loading} users={users} />
    </>
  );
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default Home;