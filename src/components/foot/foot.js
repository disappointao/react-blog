import  React,{Component} from 'react';
import {Layout} from 'antd';
import './foot.css';

const {Footer}=Layout;
export default class Foot extends  Component {
  render() {
    return (
        <Footer style={{ textAlign: 'center' ,height:30,padding:0}}><a href='https://github.com/disappointao'>https://github.com/disappointao</a></Footer>
    );
  }
}