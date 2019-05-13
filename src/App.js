import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import PokeData from './components/PokeData';
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact path='/' component={PokeList}></Route>
      <Route path='/pokemon/:id' component={PokeData}></Route>
    </Switch>
  );
}

export default App;
