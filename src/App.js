import React, {Fragment} from 'react';
import Header from './components/Header'
import List from './components/List'
import Add from './components/Add'
import Edit from './components/Edit'
import {Switch, Route} from 'react-router-dom'

//Redux
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Header/>
        <div className="container m-5">
          <Switch>
            <Route exact path="/" component={List}/>
            <Route exact path="/new-element" component={Add}/>
            <Route exact path="/edit/:id" component={Edit}/>
          </Switch>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
