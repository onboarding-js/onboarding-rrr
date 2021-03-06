import React from 'react';
// import Home from './pages/Home'
import Home from './pages/Home/indexHooks.js'
import Results from './pages/Results'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact= {true} path='/' component={Home}></Route>     
      <Route path='/results' component={Results}></Route>  
  </Switch>
 </BrowserRouter>    
)}

export default App;
