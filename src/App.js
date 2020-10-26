import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Followers from './components/Followers';
import NavBar from './components/NavBar';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [show, setShow] = useState(true);
  const pageIndex = 1;
  const pageSize = 10;
  const handleTextChange = (e) => {
    setInput(e.target.value);
  }

  //should put error handling condition
  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      console.log('enter');
      try {
        const response = await axios.get(`https://api.github.com/users/${input}`);
        setUser({ ...response.data });
        const followerResponse = await axios.get(`https://api.github.com/users/${input}/following?page=${pageIndex}&per_page=${pageSize}`);
        setFollowers([...followerResponse.data]);
        console.log(response);
      } catch (e) {
        setUser({});
        setShow(false);
      }
    }
  }

  const handleShowMore = async () => {
    const nextSize = pageSize + 10;
    const response = await axios.get(`https://api.github.com/users/${input}/following?page=${pageIndex}&per_page=${nextSize}`);
    console.log(response.data);
    setFollowers([...response.data]);
  }

  useEffect(() => {
    if (input === '') {
      setUser(null);
      setFollowers([]);
      setShow(true);
    }
  }, [input])

  return (
    <Router>
      <NavBar handleKeyDown={handleKeyDown} value={input} handleTextChange={handleTextChange} />
      <Switch>
        <Route exact render={() => <Landing user={user} show={show} />} path='/home'>
        </Route>
        <Route exact render={() => <Followers followers={followers} user={user} handleShowMore={handleShowMore} show={show} />} path='/following'></Route>
      </Switch>
    </Router>
  );
}

export default App;
