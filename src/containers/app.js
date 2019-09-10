import  React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Login from '../views/login/login';
import Index from '../views/index/index';
import Home from '../views/home/home';
export default class App extends  Component {
  render() {
    return (
        <Router>
          <Route exact path='/' component={Index}/>
          <Route exact path='/login' component={Login}/>
          <Route path='/home' component={Home}/>
        </Router>
    );
  }
}