import  React,{Component} from 'react';
import {Button,Icon, Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import './head.css';
import Text from 'antd/es/typography/Text';

const {Header}=Layout;
export default class Head extends  Component {
  handleLogout=()=>{
    if(window.confirm('是否退出登录')){
      sessionStorage.removeItem('user');
      this.props.history.replace({pathname:'/login'});
    }

  };
  render() {
    return (

          <Header style={{ background: '#fff', padding: 0,height:50,position:'fixed',left:200,right:0,zIndex:10}} >
            <div className='selectIcon'>
              <Icon type='unordered-list'style={{float:'left',fontSize:20}}></Icon>
            </div>
            <Text className="title" type='warning'>
              {JSON.parse(sessionStorage.getItem('user')).username}&nbsp;&nbsp;欢迎您
            </Text>
            <div className='logout' onClick={this.handleLogout}>
              <Icon type="logout" style={{fontSize:17,marginRight:5}}/>退出登录
            </div>
            <Link to='/home/profile'>
              <div className='user'>
                <Icon type="user" style={{fontSize:17,marginRight:5}}/>
                个人中心
              </div>
            </Link>
          </Header>
    );
  }
}