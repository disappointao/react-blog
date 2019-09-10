import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import  React,{Component} from 'react';
import {Redirect,Switch,Route} from 'react-router-dom';

import Head from '../../components/head/head';
import Slider from '../../components/slider/slider';
import Content_home from '../../components/contents/index/index';
import Content_passage from '../../components/contents/passage/all';
import Content_profile from '../../components/contents/profile/profile'
import Foot from '../../components/foot/foot';

const {Header} =Layout;

export default class Home extends  Component {
  render() {
    if(sessionStorage.getItem('user')!=null){
      return (
          <Layout style={{ minHeight: '100vh' }}>
            <Slider/>
            <Layout style={{marginLeft:200}}>
              <Head history={this.props.history}/>
              <Switch>
                <Route path='/home/index' component={Content_home}/>
                <Route path='/home/passage' component={Content_passage}/>
                <Route path='/home/profile' component={Content_profile}/>
                <Redirect to='/home/index'/>
              </Switch>
              <Foot/>
            </Layout>
          </Layout>
      );
    }else{
      return (
          <Redirect to='/login'/>
      );
    }
  }
}