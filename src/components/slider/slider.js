import  React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon, Menu,Layout} from 'antd';

import avatar from '../../static/assets/img/default.png'
import './slider.css';
const {Sider} = Layout;
const { SubMenu } = Menu;
export default class Slider extends  Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    if(!this.state.collapsed){
      this.logo.style.height='0'
    }else{
      this.logo.style.height='20vh';
    }
    this.setState({ collapsed });
  };
  render() {
    return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{backgroundColor:'#2f4050',position:'fixed',height:'100%'}}>
          <div className="logo" ref={logo=>this.logo=logo}>
            <img src={avatar} alt=""/>
            <h3 className="name">刘创凹</h3>
          </div>
          <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline"  style={{backgroundColor:'#2f4050'}}>
            <Menu.Item key="1">
              <Link to='/home/index'>
                <Icon type="pie-chart" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={
                  <span>
                  <Icon type="read" />
                  <span>文章</span>
                </span>
                }
            >

              <Menu.Item key="2"><Link to='/home/passage'>所有文章</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/home/write_passage'>写文章</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
              <Link to='/home/tag'>
                <Icon type="tag" />
                <span>标签
              </span></Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to='/home/users'>
                <Icon type="team" />
                <span>用户</span>
              </Link>
            </Menu.Item>
            <SubMenu
                key="sub2"
                title={
                  <span>
                  <Icon type="setting" />
                  <span>设置</span>
                </span>
                }
            >
              <Menu.Item key="6">站点设置</Menu.Item>
              <Menu.Item key="7">主题设置</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
  }
}