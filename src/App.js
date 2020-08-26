import React, { useEffect, useState } from 'react';

import { Button } from 'antd';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as ROUTES from './routes';

import 'antd/dist/antd.css'

import Mytable from './Table'
import About from './About.js'
import Navigation from './Navigation'



function App() {

  const [ammoStats, setAmmoStats] = useState([])

  useEffect(() => {
    fetch('https://us-central1-tarkovscrape.cloudfunctions.net/app/getData')
      .then(res => res.json())
      .then(json => {
        setAmmoStats(json)
        console.log(json)
      })

  }, []);

  const Home = () => (
    <div className="App">
      <About />
      <Mytable data={ammoStats} />
    </div>
  )

  const Thetable = () => (
    <div className="App">
      <Mytable data={ammoStats} />
    </div>
  )


  return (

    <Router>
      <div>
        <Navigation />
        <hr />

        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.TABLE} component={Thetable} />

      </div>
    </Router>

  );
}

export default App;
