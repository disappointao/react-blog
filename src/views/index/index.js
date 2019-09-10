import  React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import Login from '../login/login';
import Home from '../home/home';
export default class Index extends  Component {
  render() {
    if(sessionStorage.getItem('user')!=null){
      return (
          <Redirect to='/home'/>
      );
    }else{
      return (
          <Redirect to='/login'/>
      );
    }
  }
}