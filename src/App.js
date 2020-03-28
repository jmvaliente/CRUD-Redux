import React, {Fragment} from 'react';
import Header from './components/Header'
import List from './components/List'
import Add from './components/Add'
import Edit from './components/Edit'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={List}/>
        <Route exact path="/new-element" component={Add}/>
        <Route exact path="/edit/:id" component={Edit}/>
      </Switch>
    </Fragment>
  );
}

export default App;
