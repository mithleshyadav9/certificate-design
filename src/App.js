import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Certificate from './components/certificate'
import Home from './components/home'


function App() {

  return (

    <Router>
    <Switch>
    <Route exact path="/certificate" render={()=><Certificate/>} />
    <Route exact path="/" render={()=><Home/>} />
    </Switch>
    </Router>

  );
}

export default App;
